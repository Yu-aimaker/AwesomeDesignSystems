import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const tokens = JSON.parse(readFileSync(new URL('../AwesomeDS/tokens.json', import.meta.url), 'utf8'));
const luminance = hex => {
  assert.match(hex, /^#[0-9a-f]{6}$/i, `Invalid color: ${hex}`);
  const rgb = hex.slice(1).match(/../g).map(v => parseInt(v, 16) / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4);
  return rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722;
};
let pairs = 0;
for (const [theme, colors] of Object.entries(tokens.color)) {
  for (const value of Object.values(colors)) luminance(value);
  for (const background of ['background', 'surface', 'muted', 'selection']) {
    for (const foreground of ['text', 'textSecondary']) {
      const values = [luminance(colors[foreground]), luminance(colors[background])].sort((a,b) => b-a);
      const ratio = (values[0]+.05)/(values[1]+.05);
      assert.ok(ratio >= 4.5, `${theme} ${foreground}/${background}: ${ratio.toFixed(2)} < 4.5`);
      pairs++;
    }
  }
  for (const [foreground, background, minimum] of [['onAccent','accent',4.5],['onAccent','accentHover',4.5],['focus','surface',3],['danger','surface',4.5],['success','surface',4.5]]) {
    const values = [luminance(colors[foreground]), luminance(colors[background])].sort((a,b) => b-a);
    const ratio = (values[0]+.05)/(values[1]+.05);
    assert.ok(ratio >= minimum, `${theme} ${foreground}/${background}: ${ratio.toFixed(2)} < ${minimum}`);
    pairs++;
  }
}
for (const [name, profile] of Object.entries(tokens.profiles ?? {})) {
  const values = [luminance(profile.accent),luminance(profile.onAccent)].sort((a,b)=>b-a);
  assert.ok((values[0]+.05)/(values[1]+.05)>=4.5, name+' profile action contrast');
  assert.ok(profile.radius>=0 && profile.gap>0);
  pairs++;
}
assert.ok(tokens.sizing.controlMin >= 44);
assert.ok(Object.values(tokens.spacing).every(v => v > 0 && v % 4 === 0));
assert.deepEqual(Object.keys(tokens.color.light), Object.keys(tokens.color.dark));
console.log(`PASS: ${pairs} meaningful contrast pairs across light/dark; target size and spacing. This does not certify complete WCAG conformance.`);
