// SPDX-FileCopyrightText: 2026 <JerryLiiiiii> <lijiarui9220@gmail.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

//INTRO
setcpm(170/4)

//Lead
$: note("<[[-@1 g4@2 a4@3 ] g4 e4 d4 - g3 a3 c4] - > ").layer(
  x => x.sound("sawtooth"),
  x => x.sound("sawtooth").trans(24).adsr("0:.5:0:0").room(.4),
  x => x.sound("supersaw").trans(12).room(.3).unison("7").spread("1").detune(.5),
  x => x.sound("gm_vibraphone:3").adsr("0:.2:0:0").trans(24),
  x => x.sound("piano").adsr("0:0:1.5:.03"),
  x => x.sound("white").gain(.13)
)//._pianoroll()

$:stack(
  //drum
  stack(
    //BassDrum
    sound("<bd:5 ->").compressor("-20:20:10:.002:.02").gain(".9").speed(.5),//._scope(),
    sound("<bd:1 ->").compressor("-20:20:10:.002:.02").gain(.5)
  ),
  //Loop
  sound(`
        [hh hh hh - ] [hh -  hh hh] [hh hh hh - ] [hh -  hh - ],
        <[[-  -  -  - ] [cp -  -  - ] [-  -  -  - ] [cp -  -  - ]]
        [[-  -  -  - ] [-  -  -  - ] [-  -  -  - ] [cp -  -  - ]]>,
        <[[bd -  -  - ] [-  -  bd - ] [-  -  bd - ] [-  -  bd - ]]
        [[-  -  -  - ] [-  -  -  - ] [-  -  bd - ] [-  -  -  - ]]>`).gain(.3)
  //._punchcard()
)

//Arp
$:note("c7 b6 g6 d6 c6 b5 g5 d5 c5 d5 g5 b5 c6 d6 g6 b6").sound("square")
  .gain(sine.rev().range(0.2,0.25).slow(2))
  .pan(.3)

//Piano
$:note("<[a2 e3 [c4,e4,a4] g2 d3 [d4,g4,b4] - [f3,a3,c4,g4]] - >").sound("piano")
  .adsr("0:0:1.5:.1").room(0.4)
    //._pianoroll()
$:note("[- [g5 c6 d6 g6 d6@4]]").s("piano").adsr("0:0:2:.3").compressor("-20:20:10:.002:.02")
  .mask("<0@3 1>")