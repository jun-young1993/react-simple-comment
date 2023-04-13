cp dist/mjs/comment.d.ts dist 

rm -rf dist/*/comment.d.ts 

cat >dist/cjs/package.json <<!EOF
{
    "type": "commonjs"
}
!EOF

cat >dist/mjs/package.json <<!EOF
{
    "type": "module"
}
!EOF