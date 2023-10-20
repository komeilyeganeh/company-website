/* ====================================================
   Managing The Loading 
  ===================================================== */
const loading = document.querySelector(".loading");
window.onload = () => {
  loading.classList.add("hide");
  document.body.style.overflowY = "auto";
};

/* ====================================================
   Managing Hover Items Description 
  ===================================================== */
const mobileAppItems = document.querySelectorAll(".description__item_left div");
const imgEl = document.querySelector(".description__item_right img");
mobileAppItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const imgTarget = item.getAttribute("data-img");
    imgEl.setAttribute("src", `${imgTarget}`);
  });
  item.addEventListener("mouseleave", () => {
    imgEl.setAttribute("src", "./assets/images/services/img-1.png");
  });
});

/* ====================================================
   Runing Logo Animations 
  ===================================================== */
bodymovin.loadAnimation({
  container: document.getElementById("icon__planing"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  animationData: {
    v: "5.7.13",
    fr: 29.9700012207031,
    ip: 0,
    op: 31.0000012626559,
    w: 400,
    h: 400,
    nm: "list",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 3,
        nm: "Control layer",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [200, 200, 0], ix: 2, l: 2 },
          a: { a: 0, k: [200, 200, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        ef: [
          {
            ty: 5,
            nm: "Primary color",
            np: 3,
            mn: "ADBE Color Control",
            ix: 1,
            en: 1,
            ef: [
              {
                ty: 2,
                nm: "Color",
                mn: "ADBE Color Control-0001",
                ix: 1,
                v: {
                  a: 0,
                  k: [
                    0.12941176470588237, 0.1843137254901961,
                    0.27058823529411763, 1,
                  ],
                  ix: 1,
                },
              },
            ],
          },
          {
            ty: 5,
            nm: "Secondary color",
            np: 3,
            mn: "ADBE Color Control",
            ix: 2,
            en: 1,
            ef: [
              {
                ty: 2,
                nm: "Color",
                mn: "ADBE Color Control-0001",
                ix: 1,
                v: {
                  a: 0,
                  k: [
                    0.9411764705882353, 0.7843137254901961, 0.3568627450980392,
                    1,
                  ],
                  ix: 1,
                },
              },
            ],
          },
          {
            ty: 5,
            nm: "Position control",
            np: 3,
            mn: "ADBE Point Control",
            ix: 3,
            en: 1,
            ef: [
              {
                ty: 3,
                nm: "Point",
                mn: "ADBE Point Control-0001",
                ix: 1,
                v: { a: 0, k: [200, 200], ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Bg ON",
            np: 3,
            mn: "ADBE Checkbox Control",
            ix: 4,
            en: 1,
            ef: [
              {
                ty: 7,
                nm: "Checkbox",
                mn: "ADBE Checkbox Control-0001",
                ix: 1,
                v: { a: 0, k: 0, ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Bg Color",
            np: 3,
            mn: "ADBE Color Control",
            ix: 5,
            en: 1,
            ef: [
              {
                ty: 2,
                nm: "Color",
                mn: "ADBE Color Control-0001",
                ix: 1,
                v: { a: 0, k: [1, 1, 1, 1], ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Stroke width",
            np: 3,
            mn: "ADBE Slider Control",
            ix: 6,
            en: 1,
            ef: [
              {
                ty: 0,
                nm: "Slider",
                mn: "ADBE Slider Control-0001",
                ix: 1,
                v: { a: 0, k: 12, ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Scale",
            np: 3,
            mn: "ADBE Slider Control",
            ix: 7,
            en: 1,
            ef: [
              {
                ty: 0,
                nm: "Slider",
                mn: "ADBE Slider Control-0001",
                ix: 1,
                v: { a: 0, k: 100, ix: 1 },
              },
            ],
          },
        ],
        ip: 0,
        op: 150.000006109625,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 2,
        ty: 3,
        nm: "fixed null",
        sr: 1,
        ks: {
          o: { a: 0, k: 0, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: {
            a: 0,
            k: [292, 441, 0],
            ix: 2,
            l: 2,
            x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Position control')('Point');",
          },
          a: { a: 0, k: [50, 50, 0], ix: 1, l: 2 },
          s: {
            a: 0,
            k: [57, 57, 100],
            ix: 6,
            l: 2,
            x: "var $bm_rt;\nvar temp;\ntemp = thisComp.layer('Control layer').effect('Scale')('Slider');\n$bm_rt = [\n    temp,\n    temp\n];",
          },
        },
        ao: 0,
        ip: 0,
        op: 150.000006109625,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 3,
        ty: 3,
        nm: "Null 1",
        parent: 2,
        sr: 1,
        ks: {
          o: { a: 0, k: 0, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [50, 50, 0], ix: 2, l: 2 },
          a: { a: 0, k: [50, 50, 0], ix: 1, l: 2 },
          s: { a: 0, k: [138, 138, 100], ix: 6, l: 2 },
        },
        ao: 0,
        ip: 0,
        op: 150.000006109625,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 4,
        ty: 3,
        nm: "top lists",
        parent: 3,
        sr: 1,
        ks: {
          o: { a: 0, k: 0, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: {
            a: 1,
            k: [
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 1,
                s: [50, 50, 0],
                to: null,
                ti: null,
              },
              { t: 17.0000006924242, s: [50, -13.5, 0] },
            ],
            ix: 2,
            l: 2,
          },
          a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        ip: 0,
        op: 150.000006109625,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 5,
        ty: 4,
        nm: "line1",
        parent: 4,
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              {
                i: { x: [0.667], y: [1] },
                o: { x: [0.333], y: [0] },
                t: 5,
                s: [100],
              },
              { t: 11.0000004480392, s: [0] },
            ],
            ix: 11,
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [33.132, -63.659, 0], ix: 2, l: 2 },
          a: { a: 0, k: [77.368, 6, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [148.735, 6],
                      [6, 6],
                    ],
                    o: [
                      [148.735, 6],
                      [6, 6],
                    ],
                    v: [
                      [148.735, 6],
                      [6, 6],
                    ],
                    c: false,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 138, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 150.000006109625,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 6,
        ty: 4,
        nm: "circle1",
        parent: 4,
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              {
                i: { x: [0.667], y: [1] },
                o: { x: [0.333], y: [0] },
                t: 5,
                s: [100],
              },
              { t: 11.0000004480392, s: [0] },
            ],
            ix: 11,
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [-86.211, -63.659, 0], ix: 2, l: 2 },
          a: { a: 0, k: [48.289, 48.289, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [18.289, -10.101],
                      [10.101, 18.289],
                      [-18.289, 10.101],
                      [-10.101, -18.289],
                    ],
                    o: [
                      [18.289, 10.101],
                      [-10.101, 18.289],
                      [-18.289, -10.101],
                      [10.101, -18.289],
                    ],
                    v: [
                      [18.289, 0],
                      [0, 18.289],
                      [-18.289, 0],
                      [0, -18.289],
                    ],
                    c: true,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.415686304429, 0.043137254902, 1, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Secondary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 138, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [48.289, 48.289], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 150.000006109625,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 7,
        ty: 4,
        nm: "line3",
        parent: 4,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [33.132, -0.008, 0], ix: 2, l: 2 },
          a: { a: 0, k: [77.368, 6, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [148.735, 6],
                      [6, 6],
                    ],
                    o: [
                      [148.735, 6],
                      [6, 6],
                    ],
                    v: [
                      [148.735, 6],
                      [6, 6],
                    ],
                    c: false,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 138, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 150.000006109625,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 8,
        ty: 4,
        nm: "circle3",
        parent: 4,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [-86.211, -0.008, 0], ix: 2, l: 2 },
          a: { a: 0, k: [48.289, 48.289, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [18.289, -10.101],
                      [10.101, 18.289],
                      [-18.289, 10.101],
                      [-10.101, -18.289],
                    ],
                    o: [
                      [18.289, 10.101],
                      [-10.101, 18.289],
                      [-18.289, -10.101],
                      [10.101, -18.289],
                    ],
                    v: [
                      [18.289, 0],
                      [0, 18.289],
                      [-18.289, 0],
                      [0, -18.289],
                    ],
                    c: true,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.415686304429, 0.043137254902, 1, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Secondary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 138, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [48.289, 48.289], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 150.000006109625,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 9,
        ty: 4,
        nm: "line2",
        parent: 4,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [33.132, 63.811, 0], ix: 2, l: 2 },
          a: { a: 0, k: [77.368, 6, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [148.735, 6],
                      [6, 6],
                    ],
                    o: [
                      [148.735, 6],
                      [6, 6],
                    ],
                    v: [
                      [148.735, 6],
                      [6, 6],
                    ],
                    c: false,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 138, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 150.000006109625,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 10,
        ty: 4,
        nm: "circle2",
        parent: 4,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [-86.211, 63.811, 0], ix: 2, l: 2 },
          a: { a: 0, k: [48.289, 48.289, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [18.289, -10.101],
                      [10.101, 18.289],
                      [-18.289, 10.101],
                      [-10.101, -18.289],
                    ],
                    o: [
                      [18.289, 10.101],
                      [-10.101, 18.289],
                      [-18.289, -10.101],
                      [10.101, -18.289],
                    ],
                    v: [
                      [18.289, 0],
                      [0, 18.289],
                      [-18.289, 0],
                      [0, -18.289],
                    ],
                    c: true,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.415686304429, 0.043137254902, 1, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Secondary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 138, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [48.289, 48.289], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 150.000006109625,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 11,
        ty: 4,
        nm: "line4",
        parent: 3,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [83.132, 113.811, 0], ix: 2, l: 2 },
          a: { a: 0, k: [77.368, 6, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.667, y: 1 },
                      o: { x: 0.333, y: 0 },
                      t: 14,
                      s: [
                        {
                          i: [
                            [6.016, 5.999],
                            [6, 6],
                          ],
                          o: [
                            [6.016, 5.999],
                            [6, 6],
                          ],
                          v: [
                            [6.016, 5.999],
                            [6, 6],
                          ],
                          c: false,
                        },
                      ],
                    },
                    {
                      i: { x: 0.667, y: 1 },
                      o: { x: 0.167, y: 0 },
                      t: 19,
                      s: [
                        {
                          i: [
                            [158.235, 6],
                            [6, 6],
                          ],
                          o: [
                            [158.235, 6],
                            [6, 6],
                          ],
                          v: [
                            [158.235, 6],
                            [6, 6],
                          ],
                          c: false,
                        },
                      ],
                    },
                    {
                      t: 22.0000008960784,
                      s: [
                        {
                          i: [
                            [148.735, 6],
                            [6, 6],
                          ],
                          o: [
                            [148.735, 6],
                            [6, 6],
                          ],
                          v: [
                            [148.735, 6],
                            [6, 6],
                          ],
                          c: false,
                        },
                      ],
                    },
                  ],
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 138, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 14.0000005702317,
        op: 150.000006109625,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 12,
        ty: 4,
        nm: "circle4",
        parent: 3,
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              {
                i: { x: [0.667], y: [1] },
                o: { x: [0.333], y: [0] },
                t: 10,
                s: [0],
              },
              { t: 17.0000006924242, s: [100] },
            ],
            ix: 11,
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [-36.211, 113.811, 0], ix: 2, l: 2 },
          a: { a: 0, k: [48.289, 48.289, 0], ix: 1, l: 2 },
          s: {
            a: 1,
            k: [
              {
                i: { x: [0.391, 0.391, 0.667], y: [1, 1, 1] },
                o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                t: 10,
                s: [0, 0, 100],
              },
              {
                i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                t: 17,
                s: [110, 110, 100],
              },
              { t: 21.0000008553475, s: [100, 100, 100] },
            ],
            ix: 6,
            l: 2,
          },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [18.289, -10.101],
                      [10.101, 18.289],
                      [-18.289, 10.101],
                      [-10.101, -18.289],
                    ],
                    o: [
                      [18.289, 10.101],
                      [-10.101, 18.289],
                      [-18.289, -10.101],
                      [10.101, -18.289],
                    ],
                    v: [
                      [18.289, 0],
                      [0, 18.289],
                      [-18.289, 0],
                      [0, -18.289],
                    ],
                    c: true,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.415686304429, 0.043137254902, 1, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Secondary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 138, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [48.289, 48.289], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 10.0000004073083,
        op: 150.000006109625,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 13,
        ty: 4,
        nm: "background",
        sr: 1,
        ks: {
          o: {
            a: 0,
            k: 100,
            ix: 11,
            x: "var $bm_rt;\nif (thisComp.layer('Control layer').effect('Bg ON')('Checkbox') > 0) {\n    $bm_rt = 100;\n} else {\n    $bm_rt = 0;\n}",
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [200, 200, 0], ix: 2, l: 2 },
          a: { a: 0, k: [1, -0.5, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [400, 400], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                r: { a: 0, k: 0, ix: 4 },
                nm: "Rectangle Path 1",
                mn: "ADBE Vector Shape - Rect",
                hd: false,
                _render: true,
              },
              {
                ty: "fl",
                c: {
                  a: 0,
                  k: [1, 1, 1, 1],
                  ix: 4,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Bg Color')('Color');",
                },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [1, -0.5], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Rectangle 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 150.000006109625,
        st: 0,
        bm: 0,
        completed: true,
      },
    ],
    markers: [],
    __complete: true,
  },
});
bodymovin.loadAnimation({
  container: document.getElementById("icon__design"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  animationData: {
    v: "5.7.13",
    fr: 30,
    ip: 0,
    op: 70,
    w: 400,
    h: 400,
    nm: "pencil",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 3,
        nm: "Control layer",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [200, 200, 0], ix: 2, l: 2 },
          a: { a: 0, k: [200, 200, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        ef: [
          {
            ty: 5,
            nm: "Primary color",
            np: 3,
            mn: "ADBE Color Control",
            ix: 1,
            en: 1,
            ef: [
              {
                ty: 2,
                nm: "Color",
                mn: "ADBE Color Control-0001",
                ix: 1,
                v: {
                  a: 0,
                  k: [
                    0.12941176470588237, 0.1843137254901961,
                    0.27058823529411763, 1,
                  ],
                  ix: 1,
                },
              },
            ],
          },
          {
            ty: 5,
            nm: "Secondary color",
            np: 3,
            mn: "ADBE Color Control",
            ix: 2,
            en: 1,
            ef: [
              {
                ty: 2,
                nm: "Color",
                mn: "ADBE Color Control-0001",
                ix: 1,
                v: {
                  a: 0,
                  k: [
                    0.9411764705882353, 0.7843137254901961, 0.3568627450980392,
                    1,
                  ],
                  ix: 1,
                },
              },
            ],
          },
          {
            ty: 5,
            nm: "Position control",
            np: 3,
            mn: "ADBE Point Control",
            ix: 3,
            en: 1,
            ef: [
              {
                ty: 3,
                nm: "Point",
                mn: "ADBE Point Control-0001",
                ix: 1,
                v: { a: 0, k: [200, 200], ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Bg ON",
            np: 3,
            mn: "ADBE Checkbox Control",
            ix: 4,
            en: 1,
            ef: [
              {
                ty: 7,
                nm: "Checkbox",
                mn: "ADBE Checkbox Control-0001",
                ix: 1,
                v: { a: 0, k: 0, ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Bg Color",
            np: 3,
            mn: "ADBE Color Control",
            ix: 5,
            en: 1,
            ef: [
              {
                ty: 2,
                nm: "Color",
                mn: "ADBE Color Control-0001",
                ix: 1,
                v: { a: 0, k: [1, 1, 1, 1], ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Stroke width",
            np: 3,
            mn: "ADBE Slider Control",
            ix: 6,
            en: 1,
            ef: [
              {
                ty: 0,
                nm: "Slider",
                mn: "ADBE Slider Control-0001",
                ix: 1,
                v: { a: 0, k: 12, ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Scale",
            np: 3,
            mn: "ADBE Slider Control",
            ix: 7,
            en: 1,
            ef: [
              {
                ty: 0,
                nm: "Slider",
                mn: "ADBE Slider Control-0001",
                ix: 1,
                v: { a: 0, k: 100, ix: 1 },
              },
            ],
          },
        ],
        ip: 0,
        op: 150.15015015015,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 2,
        ty: 3,
        nm: "fixed null",
        sr: 1,
        ks: {
          o: { a: 0, k: 0, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: {
            a: 0,
            k: [292, 441, 0],
            ix: 2,
            l: 2,
            x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Position control')('Point');",
          },
          a: { a: 0, k: [50, 50, 0], ix: 1, l: 2 },
          s: {
            a: 0,
            k: [57, 57, 100],
            ix: 6,
            l: 2,
            x: "var $bm_rt;\nvar temp;\ntemp = thisComp.layer('Control layer').effect('Scale')('Slider');\n$bm_rt = [\n    temp,\n    temp\n];",
          },
        },
        ao: 0,
        ip: 0,
        op: 150.15015015015,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 3,
        ty: 3,
        nm: "Null 1",
        parent: 2,
        sr: 1,
        ks: {
          o: { a: 0, k: 0, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [50, 44, 0], ix: 2, l: 2 },
          a: { a: 0, k: [50, 50, 0], ix: 1, l: 2 },
          s: { a: 0, k: [130, 130, 100], ix: 6, l: 2 },
        },
        ao: 0,
        ip: 0,
        op: 150.15015015015,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 4,
        ty: 4,
        nm: "pencil ",
        parent: 3,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: {
            a: 1,
            k: [
              {
                i: { x: [0.667], y: [1] },
                o: { x: [0.333], y: [0] },
                t: 5,
                s: [0],
              },
              {
                i: { x: [0.833], y: [1] },
                o: { x: [0.167], y: [0] },
                t: 11,
                s: [-21],
              },
              {
                i: { x: [0.833], y: [1] },
                o: { x: [0.167], y: [0] },
                t: 18,
                s: [-21],
              },
              {
                i: { x: [0.667], y: [1] },
                o: { x: [0.167], y: [0] },
                t: 31,
                s: [20],
              },
              {
                i: { x: [0.833], y: [1] },
                o: { x: [0.167], y: [0] },
                t: 45,
                s: [6],
              },
              { t: 54, s: [0] },
            ],
            ix: 10,
          },
          p: {
            a: 1,
            k: [
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 0,
                s: [50, 51.935, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 5,
                s: [50, 56.935, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 11,
                s: [50, 29.935, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.833, y: 0.833 },
                o: { x: 0.185, y: 0 },
                t: 18,
                s: [76, 59.858, 0],
                to: [0, 0, 0],
                ti: [10.962, 1.754, 0],
              },
              {
                i: { x: 0.833, y: 0.833 },
                o: { x: 0.167, y: 0.167 },
                t: 21,
                s: [66.749, 54.247, 0],
                to: [-6.675, -1.068, 0],
                ti: [9.226, 0, 0],
              },
              {
                i: { x: 0.833, y: 0.833 },
                o: { x: 0.167, y: 0.167 },
                t: 24,
                s: [35.303, 51.935, 0],
                to: [-7.669, 0, 0],
                ti: [9.145, -1.235, 0],
              },
              {
                i: { x: 0.833, y: 0.833 },
                o: { x: 0.167, y: 0.167 },
                t: 27,
                s: [0.286, 53.469, 0],
                to: [-12.526, 1.692, 0],
                ti: [0, 0, 0],
              },
              {
                i: { x: 0.833, y: 0.833 },
                o: { x: 0.167, y: 0.167 },
                t: 30,
                s: [-16, 57.55, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 31,
                s: [-16, 57.55, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.167, y: 0 },
                t: 45,
                s: [50, 19.935, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 54,
                s: [50, 56.935, 0],
                to: null,
                ti: null,
              },
              { t: 61, s: [50, 51.935, 0] },
            ],
            ix: 2,
            l: 2,
          },
          a: { a: 0, k: [53.174, 132.261, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [53.174, 234.522],
                      [53.174, 240.652],
                    ],
                    o: [
                      [53.174, 234.522],
                      [53.174, 240.652],
                    ],
                    v: [
                      [53.174, 234.522],
                      [53.174, 240.652],
                    ],
                    c: false,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 130, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [30, 200.522],
                      [76.348, 200.522],
                    ],
                    o: [
                      [30, 200.522],
                      [76.348, 200.522],
                    ],
                    v: [
                      [30, 200.522],
                      [76.348, 200.522],
                    ],
                    c: false,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 130, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 2",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 2,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [23.174, 68.261],
                      [0, 102.261],
                      [-23.174, 68.261],
                      [-23.174, -91.304],
                      [-18.268, -102.261],
                      [12.217, -102.261],
                      [23.174, -97.355],
                    ],
                    o: [
                      [23.174, 68.261],
                      [0, 102.261],
                      [-23.174, 68.261],
                      [-23.174, -97.355],
                      [-12.217, -102.261],
                      [18.269, -102.261],
                      [23.174, -91.304],
                    ],
                    v: [
                      [23.174, 68.261],
                      [0, 102.261],
                      [-23.174, 68.261],
                      [-23.174, -91.304],
                      [-12.217, -102.261],
                      [12.217, -102.261],
                      [23.174, -91.304],
                    ],
                    c: true,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 130, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [53.174, 132.261], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 3",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 3,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [30, 86],
                      [76.348, 86],
                    ],
                    o: [
                      [30, 86],
                      [76.348, 86],
                    ],
                    v: [
                      [30, 86],
                      [76.348, 86],
                    ],
                    c: false,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.415686304429, 0.043137254902, 1, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Secondary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 130, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 4",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 4,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [30, 64.479],
                      [76.348, 64.479],
                    ],
                    o: [
                      [30, 64.479],
                      [76.348, 64.479],
                    ],
                    v: [
                      [30, 64.479],
                      [76.348, 64.479],
                    ],
                    c: false,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.415686304429, 0.043137254902, 1, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Secondary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 130, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 5",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 5,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 151,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 5,
        ty: 4,
        nm: "line 2",
        parent: 3,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [114.5, 160.326, 0], ix: 2, l: 2 },
          a: { a: 0, k: [6, 6, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.667, y: 1 },
                      o: { x: 0.333, y: 0 },
                      t: 18,
                      s: [
                        {
                          i: [
                            [6.005, 6.19],
                            [6, 6],
                          ],
                          o: [
                            [6.005, 6.19],
                            [6, 6],
                          ],
                          v: [
                            [6.005, 6.19],
                            [6, 6],
                          ],
                          c: false,
                        },
                      ],
                    },
                    {
                      i: { x: 0.833, y: 1 },
                      o: { x: 0.333, y: 0 },
                      t: 31,
                      s: [
                        {
                          i: [
                            [-161.832, 6.196],
                            [6, 6],
                          ],
                          o: [
                            [-161.832, 6.196],
                            [6, 6],
                          ],
                          v: [
                            [-161.832, 6.196],
                            [6, 6],
                          ],
                          c: false,
                        },
                      ],
                    },
                    {
                      i: { x: 0.833, y: 1 },
                      o: { x: 0.167, y: 0 },
                      t: 36,
                      s: [
                        {
                          i: [
                            [-161.832, 6.196],
                            [6, 6],
                          ],
                          o: [
                            [-161.832, 6.196],
                            [6, 6],
                          ],
                          v: [
                            [-161.832, 6.196],
                            [6, 6],
                          ],
                          c: false,
                        },
                      ],
                    },
                    {
                      t: 45,
                      s: [
                        {
                          i: [
                            [-161.832, 6.196],
                            [-161.692, 6.326],
                          ],
                          o: [
                            [-161.832, 6.196],
                            [-161.692, 6.326],
                          ],
                          v: [
                            [-161.832, 6.196],
                            [-161.692, 6.326],
                          ],
                          c: false,
                        },
                      ],
                    },
                  ],
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 130, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
          {
            ty: "tm",
            s: { a: 0, k: 0, ix: 1 },
            e: { a: 0, k: 100, ix: 2 },
            o: { a: 0, k: 0, ix: 3 },
            m: 1,
            ix: 2,
            nm: "Trim Paths 1",
            mn: "ADBE Vector Filter - Trim",
            hd: false,
            _render: true,
          },
        ],
        ip: 18,
        op: 45,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 6,
        ty: 4,
        nm: "background",
        sr: 1,
        ks: {
          o: {
            a: 0,
            k: 100,
            ix: 11,
            x: "var $bm_rt;\nif (thisComp.layer('Control layer').effect('Bg ON')('Checkbox') > 0) {\n    $bm_rt = 100;\n} else {\n    $bm_rt = 0;\n}",
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [200, 200, 0], ix: 2, l: 2 },
          a: { a: 0, k: [1, -0.5, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [400, 400], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                r: { a: 0, k: 0, ix: 4 },
                nm: "Rectangle Path 1",
                mn: "ADBE Vector Shape - Rect",
                hd: false,
                _render: true,
              },
              {
                ty: "fl",
                c: {
                  a: 0,
                  k: [1, 1, 1, 1],
                  ix: 4,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Bg Color')('Color');",
                },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [1, -0.5], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Rectangle 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 150.15015015015,
        st: 0,
        bm: 0,
        completed: true,
      },
    ],
    markers: [],
    __complete: true,
  },
});
bodymovin.loadAnimation({
  container: document.getElementById("icon__development"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  animationData: {
    v: "5.7.13",
    fr: 30,
    ip: 0,
    op: 31,
    w: 400,
    h: 400,
    nm: "code",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 3,
        nm: "Control layer",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [200, 200, 0], ix: 2, l: 2 },
          a: { a: 0, k: [200, 200, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        ef: [
          {
            ty: 5,
            nm: "Primary color",
            np: 3,
            mn: "ADBE Color Control",
            ix: 1,
            en: 1,
            ef: [
              {
                ty: 2,
                nm: "Color",
                mn: "ADBE Color Control-0001",
                ix: 1,
                v: {
                  a: 0,
                  k: [
                    0.12941176470588237, 0.1843137254901961,
                    0.27058823529411763, 1,
                  ],
                  ix: 1,
                },
              },
            ],
          },
          {
            ty: 5,
            nm: "Secondary color",
            np: 3,
            mn: "ADBE Color Control",
            ix: 2,
            en: 1,
            ef: [
              {
                ty: 2,
                nm: "Color",
                mn: "ADBE Color Control-0001",
                ix: 1,
                v: {
                  a: 0,
                  k: [
                    0.9411764705882353, 0.7843137254901961, 0.3568627450980392,
                    1,
                  ],
                  ix: 1,
                },
              },
            ],
          },
          {
            ty: 5,
            nm: "Position control",
            np: 3,
            mn: "ADBE Point Control",
            ix: 3,
            en: 1,
            ef: [
              {
                ty: 3,
                nm: "Point",
                mn: "ADBE Point Control-0001",
                ix: 1,
                v: { a: 0, k: [200, 200], ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Bg ON",
            np: 3,
            mn: "ADBE Checkbox Control",
            ix: 4,
            en: 1,
            ef: [
              {
                ty: 7,
                nm: "Checkbox",
                mn: "ADBE Checkbox Control-0001",
                ix: 1,
                v: { a: 0, k: 0, ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Bg Color",
            np: 3,
            mn: "ADBE Color Control",
            ix: 5,
            en: 1,
            ef: [
              {
                ty: 2,
                nm: "Color",
                mn: "ADBE Color Control-0001",
                ix: 1,
                v: { a: 0, k: [1, 1, 1, 1], ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Stroke width",
            np: 3,
            mn: "ADBE Slider Control",
            ix: 6,
            en: 1,
            ef: [
              {
                ty: 0,
                nm: "Slider",
                mn: "ADBE Slider Control-0001",
                ix: 1,
                v: { a: 0, k: 12, ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Scale",
            np: 3,
            mn: "ADBE Slider Control",
            ix: 7,
            en: 1,
            ef: [
              {
                ty: 0,
                nm: "Slider",
                mn: "ADBE Slider Control-0001",
                ix: 1,
                v: { a: 0, k: 100, ix: 1 },
              },
            ],
          },
        ],
        ip: 0,
        op: 150.15015015015,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 2,
        ty: 3,
        nm: "fixed null",
        sr: 1,
        ks: {
          o: { a: 0, k: 0, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: {
            a: 0,
            k: [292, 441, 0],
            ix: 2,
            l: 2,
            x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Position control')('Point');",
          },
          a: { a: 0, k: [50, 50, 0], ix: 1, l: 2 },
          s: {
            a: 0,
            k: [57, 57, 100],
            ix: 6,
            l: 2,
            x: "var $bm_rt;\nvar temp;\ntemp = thisComp.layer('Control layer').effect('Scale')('Slider');\n$bm_rt = [\n    temp,\n    temp\n];",
          },
        },
        ao: 0,
        ip: 0,
        op: 150.15015015015,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 3,
        ty: 3,
        nm: "Null 1",
        parent: 2,
        sr: 1,
        ks: {
          o: { a: 0, k: 0, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [50, 50, 0], ix: 2, l: 2 },
          a: { a: 0, k: [50, 50, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        ip: 0,
        op: 150.15015015015,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 4,
        ty: 4,
        nm: "slash",
        parent: 3,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [50, 50, 0], ix: 2, l: 2 },
          a: { a: 0, k: [51.217, 108.885, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [45.217, -102.885],
                      [-45.217, 102.885],
                    ],
                    o: [
                      [45.217, -102.885],
                      [-45.217, 102.885],
                    ],
                    v: [
                      [45.217, -102.885],
                      [-45.217, 102.885],
                    ],
                    c: false,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.415686304429, 0.043137254902, 1, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Secondary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Stroke width')('Slider');",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [51.217, 108.885], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 150,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 5,
        ty: 4,
        nm: "left bracket",
        parent: 3,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: {
            a: 1,
            k: [
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 0,
                s: [-61.031, 50, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 9,
                s: [-76.031, 50, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 18,
                s: [-57.031, 50, 0],
                to: null,
                ti: null,
              },
              { t: 27, s: [-61.031, 50, 0] },
            ],
            ix: 2,
            l: 2,
          },
          a: { a: 0, k: [69.572, 107.88, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [37.045, -77.88],
                      [-39.572, -1.264],
                      [39.572, 77.88],
                    ],
                    o: [
                      [37.045, -77.88],
                      [-39.572, -1.264],
                      [39.572, 77.88],
                    ],
                    v: [
                      [37.045, -77.88],
                      [-39.572, -1.264],
                      [39.572, 77.88],
                    ],
                    c: false,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Stroke width')('Slider');",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [69.571, 107.88], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 150,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 6,
        ty: 4,
        nm: "right bracket",
        parent: 3,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: {
            a: 1,
            k: [
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 0,
                s: [159.825, 50, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 9,
                s: [174.825, 50, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 18,
                s: [155.825, 50, 0],
                to: null,
                ti: null,
              },
              { t: 27, s: [159.825, 50, 0] },
            ],
            ix: 2,
            l: 2,
          },
          a: { a: 0, k: [69.572, 107.88, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [-37.044, -77.88],
                      [39.572, -1.264],
                      [-39.572, 77.88],
                    ],
                    o: [
                      [-37.044, -77.88],
                      [39.572, -1.264],
                      [-39.572, 77.88],
                    ],
                    v: [
                      [-37.044, -77.88],
                      [39.572, -1.264],
                      [-39.572, 77.88],
                    ],
                    c: false,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Stroke width')('Slider');",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [69.571, 107.88], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 150,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 7,
        ty: 4,
        nm: "background",
        sr: 1,
        ks: {
          o: {
            a: 0,
            k: 100,
            ix: 11,
            x: "var $bm_rt;\nif (thisComp.layer('Control layer').effect('Bg ON')('Checkbox') > 0) {\n    $bm_rt = 100;\n} else {\n    $bm_rt = 0;\n}",
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [200, 200, 0], ix: 2, l: 2 },
          a: { a: 0, k: [1, -0.5, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [400, 400], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                r: { a: 0, k: 0, ix: 4 },
                nm: "Rectangle Path 1",
                mn: "ADBE Vector Shape - Rect",
                hd: false,
                _render: true,
              },
              {
                ty: "fl",
                c: {
                  a: 0,
                  k: [1, 1, 1, 1],
                  ix: 4,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Bg Color')('Color');",
                },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [1, -0.5], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Rectangle 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 150.15015015015,
        st: 0,
        bm: 0,
        completed: true,
      },
    ],
    markers: [],
    __complete: true,
  },
});
bodymovin.loadAnimation({
  container: document.getElementById("icon__deploy"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  animationData: {
    v: "5.7.13",
    fr: 30,
    ip: 0,
    op: 73,
    w: 400,
    h: 400,
    nm: "wrench",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 3,
        nm: "Control layer",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [200, 200, 0], ix: 2, l: 2 },
          a: { a: 0, k: [200, 200, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        ef: [
          {
            ty: 5,
            nm: "Primary color",
            np: 3,
            mn: "ADBE Color Control",
            ix: 1,
            en: 1,
            ef: [
              {
                ty: 2,
                nm: "Color",
                mn: "ADBE Color Control-0001",
                ix: 1,
                v: {
                  a: 0,
                  k: [
                    0.12941176470588237, 0.1843137254901961,
                    0.27058823529411763, 1,
                  ],
                  ix: 1,
                },
              },
            ],
          },
          {
            ty: 5,
            nm: "Secondary color",
            np: 3,
            mn: "ADBE Color Control",
            ix: 2,
            en: 1,
            ef: [
              {
                ty: 2,
                nm: "Color",
                mn: "ADBE Color Control-0001",
                ix: 1,
                v: {
                  a: 0,
                  k: [
                    0.9411764705882353, 0.7843137254901961, 0.3568627450980392,
                    1,
                  ],
                  ix: 1,
                },
              },
            ],
          },
          {
            ty: 5,
            nm: "Position control",
            np: 3,
            mn: "ADBE Point Control",
            ix: 3,
            en: 1,
            ef: [
              {
                ty: 3,
                nm: "Point",
                mn: "ADBE Point Control-0001",
                ix: 1,
                v: { a: 0, k: [200, 200], ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Bg ON",
            np: 3,
            mn: "ADBE Checkbox Control",
            ix: 4,
            en: 1,
            ef: [
              {
                ty: 7,
                nm: "Checkbox",
                mn: "ADBE Checkbox Control-0001",
                ix: 1,
                v: { a: 0, k: 0, ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Bg Color",
            np: 3,
            mn: "ADBE Color Control",
            ix: 5,
            en: 1,
            ef: [
              {
                ty: 2,
                nm: "Color",
                mn: "ADBE Color Control-0001",
                ix: 1,
                v: { a: 0, k: [1, 1, 1, 1], ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Stroke width",
            np: 3,
            mn: "ADBE Slider Control",
            ix: 6,
            en: 1,
            ef: [
              {
                ty: 0,
                nm: "Slider",
                mn: "ADBE Slider Control-0001",
                ix: 1,
                v: { a: 0, k: 12, ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Scale",
            np: 3,
            mn: "ADBE Slider Control",
            ix: 7,
            en: 1,
            ef: [
              {
                ty: 0,
                nm: "Slider",
                mn: "ADBE Slider Control-0001",
                ix: 1,
                v: { a: 0, k: 100, ix: 1 },
              },
            ],
          },
        ],
        ip: 0,
        op: 150.15015015015,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 2,
        ty: 3,
        nm: "fixed null",
        sr: 1,
        ks: {
          o: { a: 0, k: 0, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: {
            a: 0,
            k: [292, 441, 0],
            ix: 2,
            l: 2,
            x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Position control')('Point');",
          },
          a: { a: 0, k: [50, 50, 0], ix: 1, l: 2 },
          s: {
            a: 0,
            k: [57, 57, 100],
            ix: 6,
            l: 2,
            x: "var $bm_rt;\nvar temp;\ntemp = thisComp.layer('Control layer').effect('Scale')('Slider');\n$bm_rt = [\n    temp,\n    temp\n];",
          },
        },
        ao: 0,
        ip: 0,
        op: 150.15015015015,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 3,
        ty: 3,
        nm: "Null 1",
        parent: 2,
        sr: 1,
        ks: {
          o: { a: 0, k: 0, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [50, 50, 0], ix: 2, l: 2 },
          a: { a: 0, k: [50, 50, 0], ix: 1, l: 2 },
          s: { a: 0, k: [118, 118, 100], ix: 6, l: 2 },
        },
        ao: 0,
        ip: 0,
        op: 150.15015015015,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 4,
        ty: 4,
        nm: "wrench",
        parent: 3,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: {
            a: 1,
            k: [
              {
                i: { x: [0.486], y: [1] },
                o: { x: [0.333], y: [0] },
                t: 0,
                s: [5],
              },
              {
                i: { x: [0.667], y: [1] },
                o: { x: [0.333], y: [0] },
                t: 9,
                s: [-3],
              },
              {
                i: { x: [0.468], y: [1] },
                o: { x: [0.333], y: [0] },
                t: 17,
                s: [23],
              },
              {
                i: { x: [0.667], y: [1] },
                o: { x: [0.333], y: [0] },
                t: 32,
                s: [-11],
              },
              {
                i: { x: [0.412], y: [1] },
                o: { x: [0.333], y: [0] },
                t: 40,
                s: [23],
              },
              {
                i: { x: [0.403], y: [1] },
                o: { x: [0.167], y: [0] },
                t: 55,
                s: [-3],
              },
              { t: 64, s: [5] },
            ],
            ix: 10,
          },
          p: { a: 0, k: [-38.352, -9.381, 0], ix: 2, l: 2 },
          a: { a: 0, k: [63.246, 75.148, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0.10899999999999999, -5.722],
                      [5.722, 0.1080000000000001],
                      [-0.1080000000000001, 5.721],
                      [-5.722, -0.10999999999999988],
                    ],
                    o: [
                      [4.901, -2.9560000000000004],
                      [2.9550000000000005, 4.9],
                      [-4.9, 2.9539999999999997],
                      [-2.9560000000000004, -4.901],
                    ],
                    v: [
                      [2.505, -4.339],
                      [4.339, 2.504],
                      [-2.504, 4.337],
                      [-4.339, -2.505],
                    ],
                    c: true,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.415686304429, 0.043137254902, 1, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Secondary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 118, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [259.345, 190.167], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [-59.179, -94.148],
                      [-8.854, -48.132999999999996],
                      [114.215, 47.148],
                      [129.246, 67.91900000000001],
                      [102.00999999999999, 94.14800000000001],
                      [-34.903, 15.101],
                      [-78.66199999999999, 31.024],
                      [-128.78900000000002, -11.061],
                      [-90.875, -8.849],
                      [-60.234, -26.547],
                      [-60.229, -61.931],
                      [-98.601, -84.085],
                    ],
                    o: [
                      [-19.589000000000002, -71.291],
                      [-11.501, -25.433],
                      [125.41300000000001, 53.614000000000004],
                      [116.32000000000001, 90.307],
                      [90.812, 87.683],
                      [-52.866, 28.753],
                      [-118.25099999999999, 8.168000000000001],
                      [-129.246, -31.004],
                      [-90.875, -8.849],
                      [-60.234, -26.547],
                      [-60.229, -61.931],
                      [-81.102, -93.66],
                    ],
                    v: [
                      [-40.646, -83.448],
                      [-11.501, -25.433],
                      [114.215, 47.148],
                      [122.781, 79.117],
                      [90.812, 87.683],
                      [-34.903, 15.101],
                      [-99.719, 18.867],
                      [-129.246, -31.004],
                      [-90.875, -8.849],
                      [-60.234, -26.547],
                      [-60.229, -61.931],
                      [-98.601, -84.085],
                    ],
                    c: true,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 118, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [159.246, 124.148], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 2",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 2,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 150,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 5,
        ty: 4,
        nm: "background",
        sr: 1,
        ks: {
          o: {
            a: 0,
            k: 100,
            ix: 11,
            x: "var $bm_rt;\nif (thisComp.layer('Control layer').effect('Bg ON')('Checkbox') > 0) {\n    $bm_rt = 100;\n} else {\n    $bm_rt = 0;\n}",
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [200, 200, 0], ix: 2, l: 2 },
          a: { a: 0, k: [1, -0.5, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [400, 400], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                r: { a: 0, k: 0, ix: 4 },
                nm: "Rectangle Path 1",
                mn: "ADBE Vector Shape - Rect",
                hd: false,
                _render: true,
              },
              {
                ty: "fl",
                c: {
                  a: 0,
                  k: [1, 1, 1, 1],
                  ix: 4,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Bg Color')('Color');",
                },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [1, -0.5], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Rectangle 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 150.15015015015,
        st: 0,
        bm: 0,
        completed: true,
      },
    ],
    markers: [],
    __complete: true,
  },
});
bodymovin.loadAnimation({
  container: document.getElementById("icon__meeting"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  animationData: {
    v: "5.7.13",
    fr: 30,
    ip: 0,
    op: 100,
    w: 400,
    h: 400,
    nm: "smiley",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 3,
        nm: "Control layer",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [200, 200, 0], ix: 2, l: 2 },
          a: { a: 0, k: [200, 200, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        ef: [
          {
            ty: 5,
            nm: "Primary color",
            np: 3,
            mn: "ADBE Color Control",
            ix: 1,
            en: 1,
            ef: [
              {
                ty: 2,
                nm: "Color",
                mn: "ADBE Color Control-0001",
                ix: 1,
                v: {
                  a: 0,
                  k: [
                    0.12941176470588237, 0.1843137254901961,
                    0.27058823529411763, 1,
                  ],
                  ix: 1,
                },
              },
            ],
          },
          {
            ty: 5,
            nm: "Secondary color",
            np: 3,
            mn: "ADBE Color Control",
            ix: 2,
            en: 1,
            ef: [
              {
                ty: 2,
                nm: "Color",
                mn: "ADBE Color Control-0001",
                ix: 1,
                v: {
                  a: 0,
                  k: [
                    0.9411764705882353, 0.7843137254901961, 0.3568627450980392,
                    1,
                  ],
                  ix: 1,
                },
              },
            ],
          },
          {
            ty: 5,
            nm: "Position control",
            np: 3,
            mn: "ADBE Point Control",
            ix: 3,
            en: 1,
            ef: [
              {
                ty: 3,
                nm: "Point",
                mn: "ADBE Point Control-0001",
                ix: 1,
                v: { a: 0, k: [200, 200], ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Bg ON",
            np: 3,
            mn: "ADBE Checkbox Control",
            ix: 4,
            en: 1,
            ef: [
              {
                ty: 7,
                nm: "Checkbox",
                mn: "ADBE Checkbox Control-0001",
                ix: 1,
                v: { a: 0, k: 0, ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Bg Color",
            np: 3,
            mn: "ADBE Color Control",
            ix: 5,
            en: 1,
            ef: [
              {
                ty: 2,
                nm: "Color",
                mn: "ADBE Color Control-0001",
                ix: 1,
                v: { a: 0, k: [1, 1, 1, 1], ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Stroke width",
            np: 3,
            mn: "ADBE Slider Control",
            ix: 6,
            en: 1,
            ef: [
              {
                ty: 0,
                nm: "Slider",
                mn: "ADBE Slider Control-0001",
                ix: 1,
                v: { a: 0, k: 12, ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Scale",
            np: 3,
            mn: "ADBE Slider Control",
            ix: 7,
            en: 1,
            ef: [
              {
                ty: 0,
                nm: "Slider",
                mn: "ADBE Slider Control-0001",
                ix: 1,
                v: { a: 0, k: 100, ix: 1 },
              },
            ],
          },
        ],
        ip: 0,
        op: 151,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 2,
        ty: 3,
        nm: "fixed null",
        sr: 1,
        ks: {
          o: { a: 0, k: 0, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: {
            a: 0,
            k: [292, 441, 0],
            ix: 2,
            l: 2,
            x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Position control')('Point');",
          },
          a: { a: 0, k: [50, 50, 0], ix: 1, l: 2 },
          s: {
            a: 0,
            k: [57, 57, 100],
            ix: 6,
            l: 2,
            x: "var $bm_rt;\nvar temp;\ntemp = thisComp.layer('Control layer').effect('Scale')('Slider');\n$bm_rt = [\n    temp,\n    temp\n];",
          },
        },
        ao: 0,
        ip: 0,
        op: 151,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 3,
        ty: 3,
        nm: "Null 1",
        parent: 2,
        sr: 1,
        ks: {
          o: { a: 0, k: 0, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [50, 50, 0], ix: 2, l: 2 },
          a: { a: 0, k: [50, 50, 0], ix: 1, l: 2 },
          s: { a: 0, k: [128, 128, 100], ix: 6, l: 2 },
        },
        ao: 0,
        ip: 0,
        op: 151,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 4,
        ty: 4,
        nm: "eyes ",
        parent: 8,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [0, -39.074, 0], ix: 2, l: 2 },
          a: { a: 0, k: [49.294, 8.206, 0], ix: 1, l: 2 },
          s: {
            a: 1,
            k: [
              {
                i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                t: 0,
                s: [100, 100, 100],
              },
              {
                i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                t: 2,
                s: [100, 110, 100],
              },
              {
                i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                t: 5,
                s: [100, 14, 100],
              },
              {
                i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                t: 9,
                s: [100, 100, 100],
              },
              {
                i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                t: 41,
                s: [100, 100, 100],
              },
              {
                i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                t: 43,
                s: [100, 110, 100],
              },
              {
                i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                t: 46,
                s: [100, 14, 100],
              },
              {
                i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                o: { x: [0.167, 0.167, 0.167], y: [0, 0, 0] },
                t: 50,
                s: [100, 100, 100],
              },
              {
                i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                t: 70,
                s: [100, 100, 100],
              },
              {
                i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                t: 72,
                s: [100, 110, 100],
              },
              {
                i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                t: 75,
                s: [100, 14, 100],
              },
              { t: 79, s: [100, 100, 100] },
            ],
            ix: 6,
            l: 2,
          },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [4.388, 7.956],
                      [-7.956, 4.388],
                      [-4.387, -7.956],
                      [7.956, -4.387],
                    ],
                    o: [
                      [-4.387, 7.956],
                      [-7.956, -4.387],
                      [4.388, -7.956],
                      [7.956, 4.388],
                    ],
                    v: [
                      [0, 7.956],
                      [-7.956, 0],
                      [0, -7.956],
                      [7.956, 0],
                    ],
                    c: true,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "fl",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 4,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [90.381, 8.206], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [4.388, 7.956],
                      [-7.956, 4.388],
                      [-4.387, -7.956],
                      [7.956, -4.387],
                    ],
                    o: [
                      [-4.387, 7.956],
                      [-7.956, -4.387],
                      [4.388, -7.956],
                      [7.956, 4.388],
                    ],
                    v: [
                      [0.001, 7.956],
                      [-7.956, 0],
                      [0.001, -7.956],
                      [7.956, 0],
                    ],
                    c: true,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "fl",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 4,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [8.206, 8.206], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 2",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 2,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 151,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 5,
        ty: 4,
        nm: "smile ",
        parent: 8,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: {
            a: 1,
            k: [
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 26,
                s: [-0.478, 18.031, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.667, y: 0.667 },
                o: { x: 0.167, y: 0.167 },
                t: 41,
                s: [-0.478, 13.031, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.167, y: 0 },
                t: 70,
                s: [-0.478, 13.031, 0],
                to: null,
                ti: null,
              },
              { t: 84, s: [-0.478, 18.031, 0] },
            ],
            ix: 2,
            l: 2,
          },
          a: { a: 0, k: [86.348, 46.156, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.833, y: 1 },
                      o: { x: 0.333, y: 0 },
                      t: 26,
                      s: [
                        {
                          i: [
                            [-30.598, 3.396],
                            [-21.521, 15.912999999999998],
                            [32.598, 3.542],
                          ],
                          o: [
                            [-30.598, 3.396],
                            [25.478, 16.427],
                            [32.598, 3.542],
                          ],
                          v: [
                            [-30.598, 3.396],
                            [0.695, 16.156],
                            [32.598, 3.542],
                          ],
                          c: false,
                        },
                      ],
                    },
                    {
                      i: { x: 0.833, y: 1 },
                      o: { x: 0.167, y: 0 },
                      t: 41,
                      s: [
                        {
                          i: [
                            [-56.348, -15.354],
                            [-38.435, 16.156],
                            [56.348, -16.156],
                          ],
                          o: [
                            [-56.348, -15.354],
                            [39.826, 16.156],
                            [56.348, -16.156],
                          ],
                          v: [
                            [-56.348, -15.354],
                            [0.695, 16.156],
                            [56.348, -16.156],
                          ],
                          c: false,
                        },
                      ],
                    },
                    {
                      i: { x: 0.833, y: 1 },
                      o: { x: 0.167, y: 0 },
                      t: 70,
                      s: [
                        {
                          i: [
                            [-56.348, -15.354],
                            [-38.435, 16.156],
                            [56.348, -16.156],
                          ],
                          o: [
                            [-56.348, -15.354],
                            [39.826, 16.156],
                            [56.348, -16.156],
                          ],
                          v: [
                            [-56.348, -15.354],
                            [0.695, 16.156],
                            [56.348, -16.156],
                          ],
                          c: false,
                        },
                      ],
                    },
                    {
                      t: 84,
                      s: [
                        {
                          i: [
                            [-30.598, 3.396],
                            [-21.521, 15.912999999999998],
                            [32.598, 3.542],
                          ],
                          o: [
                            [-30.598, 3.396],
                            [25.478, 16.427],
                            [32.598, 3.542],
                          ],
                          v: [
                            [-30.598, 3.396],
                            [0.695, 16.156],
                            [32.598, 3.542],
                          ],
                          c: false,
                        },
                      ],
                    },
                  ],
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 128, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [86.348, 46.156], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 151,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 6,
        ty: 4,
        nm: "eyebrow R ",
        parent: 8,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: {
            a: 1,
            k: [
              {
                i: { x: [0.667], y: [1] },
                o: { x: [0.333], y: [0] },
                t: 26,
                s: [0],
              },
              {
                i: { x: [0.833], y: [1] },
                o: { x: [0.167], y: [0] },
                t: 41,
                s: [15],
              },
              {
                i: { x: [0.833], y: [1] },
                o: { x: [0.167], y: [0] },
                t: 70,
                s: [15],
              },
              { t: 84, s: [0] },
            ],
            ix: 10,
          },
          p: {
            a: 1,
            k: [
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 26,
                s: [46.598, -67.054, 0],
                to: [-0.083, -0.583, 0],
                ti: [0.083, 0.583, 0],
              },
              {
                i: { x: 0.667, y: 0.667 },
                o: { x: 0.167, y: 0.167 },
                t: 41,
                s: [46.098, -70.554, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.833, y: 1 },
                o: { x: 0.167, y: 0 },
                t: 70,
                s: [46.098, -70.554, 0],
                to: [0.083, 0.583, 0],
                ti: [-0.083, -0.583, 0],
              },
              { t: 84, s: [46.598, -67.054, 0] },
            ],
            ix: 2,
            l: 2,
          },
          a: { a: 0, k: [39.271, 33.4, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [-9.271, -2.128],
                      [1.298000000000001, -3.4],
                    ],
                    o: [
                      [-9.271, -2.128],
                      [9.271, 3.4],
                    ],
                    v: [
                      [-9.271, -2.128],
                      [9.271, 3.4],
                    ],
                    c: false,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 128, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [39.271, 33.4], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 151,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 7,
        ty: 4,
        nm: "eyebrow L ",
        parent: 8,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: {
            a: 1,
            k: [
              {
                i: { x: [0.667], y: [1] },
                o: { x: [0.333], y: [0] },
                t: 26,
                s: [0],
              },
              {
                i: { x: [0.833], y: [1] },
                o: { x: [0.167], y: [0] },
                t: 41,
                s: [-15],
              },
              {
                i: { x: [0.833], y: [1] },
                o: { x: [0.167], y: [0] },
                t: 70,
                s: [-15],
              },
              { t: 84, s: [0] },
            ],
            ix: 10,
          },
          p: {
            a: 1,
            k: [
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 26,
                s: [-47.978, -66.465, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.667, y: 0.667 },
                o: { x: 0.167, y: 0.167 },
                t: 41,
                s: [-47.978, -68.965, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.833, y: 1 },
                o: { x: 0.167, y: 0 },
                t: 70,
                s: [-47.978, -68.965, 0],
                to: null,
                ti: null,
              },
              { t: 84, s: [-47.978, -66.465, 0] },
            ],
            ix: 2,
            l: 2,
          },
          a: { a: 0, k: [38.848, 33.913, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [-8.848, 3.913],
                      [-1.6309999999999985, -3.913],
                    ],
                    o: [
                      [-8.848, 3.913],
                      [8.848, -3.913],
                    ],
                    v: [
                      [-8.848, 3.913],
                      [8.848, -3.913],
                    ],
                    c: false,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 128, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [38.848, 33.913], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 151,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 8,
        ty: 3,
        nm: "exp",
        parent: 9,
        sr: 1,
        ks: {
          o: { a: 0, k: 0, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: {
            a: 1,
            k: [
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 26,
                s: [147.392, 150.683, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.667, y: 0.667 },
                o: { x: 0.167, y: 0.167 },
                t: 41,
                s: [147.392, 140.683, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.833, y: 1 },
                o: { x: 0.167, y: 0 },
                t: 70,
                s: [147.392, 140.683, 0],
                to: null,
                ti: null,
              },
              { t: 84, s: [147.392, 150.683, 0] },
            ],
            ix: 2,
            l: 2,
          },
          a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        ip: 0,
        op: 151,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 9,
        ty: 4,
        nm: "face ",
        parent: 3,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: {
            a: 1,
            k: [
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 0,
                s: [50, 50, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.167, y: 0 },
                t: 14,
                s: [50, 36, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 26,
                s: [50, 50, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.167, y: 0 },
                t: 41,
                s: [50, 25, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.167, y: 0 },
                t: 62,
                s: [50, 50, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.167, y: 0 },
                t: 84,
                s: [50, 25, 0],
                to: null,
                ti: null,
              },
              { t: 99, s: [50, 50, 0] },
            ],
            ix: 2,
            l: 2,
          },
          a: { a: 0, k: [147.392, 147.391, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [117.392, -64.833],
                      [64.833, 117.391],
                      [-117.392, 64.833],
                      [-64.834, -117.391],
                    ],
                    o: [
                      [117.392, 64.833],
                      [-64.834, 117.391],
                      [-117.392, -64.833],
                      [64.833, -117.391],
                    ],
                    v: [
                      [117.392, 0],
                      [0, 117.391],
                      [-117.392, 0],
                      [0, -117.391],
                    ],
                    c: true,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 128, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [147.392, 147.391], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 151,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 10,
        ty: 4,
        nm: "background",
        sr: 1,
        ks: {
          o: {
            a: 0,
            k: 100,
            ix: 11,
            x: "var $bm_rt;\nif (thisComp.layer('Control layer').effect('Bg ON')('Checkbox') > 0) {\n    $bm_rt = 100;\n} else {\n    $bm_rt = 0;\n}",
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [200, 200, 0], ix: 2, l: 2 },
          a: { a: 0, k: [1, -0.5, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [400, 400], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                r: { a: 0, k: 0, ix: 4 },
                nm: "Rectangle Path 1",
                mn: "ADBE Vector Shape - Rect",
                hd: false,
                _render: true,
              },
              {
                ty: "fl",
                c: {
                  a: 0,
                  k: [1, 1, 1, 1],
                  ix: 4,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Bg Color')('Color');",
                },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [1, -0.5], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Rectangle 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 151,
        st: 0,
        bm: 0,
        completed: true,
      },
    ],
    markers: [],
    __complete: true,
  },
});
bodymovin.loadAnimation({
  container: document.getElementById("icon__delivery"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  animationData: {
    v: "5.7.13",
    fr: 30,
    ip: 0,
    op: 38,
    w: 400,
    h: 400,
    nm: "confetti",
    ddd: 0,
    assets: [
      {
        id: "comp_0",
        nm: "particles",
        layers: [
          {
            ddd: 0,
            ind: 1,
            ty: 4,
            nm: "c shape2 ",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 22,
                    s: [100],
                  },
                  { t: 25, s: [0] },
                ],
                ix: 11,
              },
              r: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    t: 2,
                    s: [0],
                  },
                  { t: 25, s: [160] },
                ],
                ix: 10,
              },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 2,
                    s: [167.969, 215.593, 0],
                    to: [45.667, -57.5, 0],
                    ti: [-85.667, -13.5, 0],
                  },
                  { t: 25, s: [352.969, 128.593, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [37.03, 42.016, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [7.03, 11.132],
                          [-5.260999999999999, 7.551],
                          [-2.5650000000000004, -11.132],
                        ],
                        o: [
                          [0.6379999999999999, 12.016],
                          [-7.029999999999999, -5.2330000000000005],
                          [3.827, -12.016],
                        ],
                        v: [
                          [7.03, 11.132],
                          [-6.145, 1.159],
                          [3.827, -12.016],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.043137254902, 1, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [37.03, 42.016], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 2,
            op: 147,
            st: 2,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 2,
            ty: 4,
            nm: "c shape1 ",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 25,
                    s: [100],
                  },
                  { t: 28, s: [0] },
                ],
                ix: 11,
              },
              r: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 3,
                    s: [0],
                  },
                  { t: 28, s: [-113] },
                ],
                ix: 10,
              },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 3,
                    s: [157.935, 219.401, 0],
                    to: [69.333, -57.833, 0],
                    ti: [71.667, 7.833, 0],
                  },
                  { t: 28, s: [146.935, 34.401, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [41.651, 39.715, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [8.285, -9.715],
                          [9.918, 2.982],
                          [-8.283999999999999, 7.981999999999999],
                        ],
                        o: [
                          [11.652000000000001, -4.21],
                          [-1.0919999999999996, 9.716000000000001],
                          [-11.651, 2.477],
                        ],
                        v: [
                          [8.285, -9.715],
                          [4.413, 6.349],
                          [-11.651, 2.477],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.043137254902, 1, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [41.651, 39.715], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 3,
            op: 150,
            st: 3,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 3,
            ty: 4,
            nm: "speck 2 2",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 22,
                    s: [100],
                  },
                  { t: 25, s: [0] },
                ],
                ix: 11,
              },
              r: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 8,
                    s: [0],
                  },
                  { t: 25, s: [102] },
                ],
                ix: 10,
              },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 8,
                    s: [158.457, 201.19, 0],
                    to: [35, -32, 0],
                    ti: [-1, 2, 0],
                  },
                  { t: 25, s: [295.457, 42.19, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [12.28, 12.28, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [-6.279, -6.28],
                          [6.279, 6.28],
                        ],
                        o: [
                          [-6.279, -6.28],
                          [6.279, 6.28],
                        ],
                        v: [
                          [-6.279, -6.28],
                          [6.279, 6.28],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Primary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [12.279, 12.28], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [6.28, -6.28],
                          [-6.28, 6.28],
                        ],
                        o: [
                          [6.28, -6.28],
                          [-6.28, 6.28],
                        ],
                        v: [
                          [6.28, -6.28],
                          [-6.28, 6.28],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Primary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [12.28, 12.28], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 2",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 2,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 8,
            op: 158,
            st: 8,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 4,
            ty: 4,
            nm: "speck 2 ",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 14,
                    s: [100],
                  },
                  { t: 17, s: [0] },
                ],
                ix: 11,
              },
              r: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 0,
                    s: [0],
                  },
                  { t: 17, s: [102] },
                ],
                ix: 10,
              },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 0,
                    s: [158.457, 201.19, 0],
                    to: [33, -27, 0],
                    ti: [8, 45, 0],
                  },
                  { t: 17, s: [223.457, 34.19, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [12.28, 12.28, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [-6.279, -6.28],
                          [6.279, 6.28],
                        ],
                        o: [
                          [-6.279, -6.28],
                          [6.279, 6.28],
                        ],
                        v: [
                          [-6.279, -6.28],
                          [6.279, 6.28],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Primary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [12.279, 12.28], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [6.28, -6.28],
                          [-6.28, 6.28],
                        ],
                        o: [
                          [6.28, -6.28],
                          [-6.28, 6.28],
                        ],
                        v: [
                          [6.28, -6.28],
                          [-6.28, 6.28],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Primary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [12.28, 12.28], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 2",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 2,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 0,
            op: 150,
            st: 0,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 5,
            ty: 4,
            nm: "speck 1 ",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 16,
                    s: [100],
                  },
                  { t: 19, s: [0] },
                ],
                ix: 11,
              },
              r: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 3,
                    s: [0],
                  },
                  { t: 19, s: [118] },
                ],
                ix: 10,
              },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 3,
                    s: [205.505, 238.313, 0],
                    to: [39.702, -28.606, 0],
                    ti: [-44.843, -14.455, 0],
                  },
                  { t: 19, s: [365.505, 190.313, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [14.881, 14.881, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [6, 14.881],
                          [23.761, 14.881],
                        ],
                        o: [
                          [6, 14.881],
                          [23.761, 14.881],
                        ],
                        v: [
                          [6, 14.881],
                          [23.761, 14.881],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.043137254902, 1, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [0, 0], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [14.881, 6],
                          [14.881, 23.761],
                        ],
                        o: [
                          [14.881, 6],
                          [14.881, 23.761],
                        ],
                        v: [
                          [14.881, 6],
                          [14.881, 23.761],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.043137254902, 1, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [0, 0], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 2",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 2,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 3,
            op: 150,
            st: 3,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 6,
            ty: 4,
            nm: "dot 5 ",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 14,
                    s: [100],
                  },
                  { t: 17, s: [0] },
                ],
                ix: 11,
              },
              r: { a: 0, k: 0, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 3,
                    s: [204.276, 223.73, 0],
                    to: [37.333, -56, 0],
                    ti: [-37.333, -29, 0],
                  },
                  { t: 17, s: [371.276, 191.73, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [7.135, 7.135, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [6.885, -3.803],
                          [3.802, 6.885],
                          [-6.885, 3.802],
                          [-3.803, -6.885],
                        ],
                        o: [
                          [6.885, 3.802],
                          [-3.803, 6.885],
                          [-6.885, -3.803],
                          [3.802, -6.885],
                        ],
                        v: [
                          [6.885, 0],
                          [0, 6.885],
                          [-6.885, 0],
                          [0, -6.885],
                        ],
                        c: true,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "fl",
                    c: {
                      a: 0,
                      k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                      ix: 4,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Primary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 5 },
                    r: 1,
                    bm: 0,
                    nm: "Fill 1",
                    mn: "ADBE Vector Graphic - Fill",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [7.135, 7.135], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 3,
            op: 153,
            st: 3,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 7,
            ty: 4,
            nm: "dot 4 2",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 23,
                    s: [100],
                  },
                  { t: 26, s: [0] },
                ],
                ix: 11,
              },
              r: { a: 0, k: 0, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 6,
                    s: [185.51, 223.859, 0],
                    to: [12, -9.833, 0],
                    ti: [0, -0.167, 0],
                  },
                  { t: 26, s: [326.51, 105.859, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [8.065, 8.065, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [7.816, -4.316],
                          [4.317, 7.815],
                          [-7.816, 4.316],
                          [-4.316, -7.815],
                        ],
                        o: [
                          [7.816, 4.316],
                          [-4.316, 7.815],
                          [-7.816, -4.316],
                          [4.317, -7.815],
                        ],
                        v: [
                          [7.816, 0],
                          [0.001, 7.815],
                          [-7.816, 0],
                          [0.001, -7.815],
                        ],
                        c: true,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "fl",
                    c: {
                      a: 0,
                      k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                      ix: 4,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Primary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 5 },
                    r: 1,
                    bm: 0,
                    nm: "Fill 1",
                    mn: "ADBE Vector Graphic - Fill",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [8.065, 8.065], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 6,
            op: 153,
            st: 6,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 8,
            ty: 4,
            nm: "dot 4 ",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 20,
                    s: [100],
                  },
                  { t: 23, s: [0] },
                ],
                ix: 11,
              },
              r: { a: 0, k: 0, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 3,
                    s: [159.51, 208.859, 0],
                    to: [34, -46.833, 0],
                    ti: [27, 48.833, 0],
                  },
                  { t: 23, s: [201.51, 11.859, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [8.065, 8.065, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [7.816, -4.316],
                          [4.317, 7.815],
                          [-7.816, 4.316],
                          [-4.316, -7.815],
                        ],
                        o: [
                          [7.816, 4.316],
                          [-4.316, 7.815],
                          [-7.816, -4.316],
                          [4.317, -7.815],
                        ],
                        v: [
                          [7.816, 0],
                          [0.001, 7.815],
                          [-7.816, 0],
                          [0.001, -7.815],
                        ],
                        c: true,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "fl",
                    c: {
                      a: 0,
                      k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                      ix: 4,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Primary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 5 },
                    r: 1,
                    bm: 0,
                    nm: "Fill 1",
                    mn: "ADBE Vector Graphic - Fill",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [8.065, 8.065], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 3,
            op: 150,
            st: 3,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 9,
            ty: 4,
            nm: "dot 3 2",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 25,
                    s: [100],
                  },
                  { t: 28, s: [0] },
                ],
                ix: 11,
              },
              r: { a: 0, k: 0, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 8,
                    s: [147.547, 214.093, 0],
                    to: [38.833, -56.667, 0],
                    ti: [-31.5, 65, 0],
                  },
                  { t: 28, s: [238.547, 37.093, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [11.082, 11.082, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [10.832, -5.982],
                          [5.982, 10.832],
                          [-10.832, 5.982],
                          [-5.982, -10.832],
                        ],
                        o: [
                          [10.832, 5.982],
                          [-5.982, 10.832],
                          [-10.832, -5.982],
                          [5.982, -10.832],
                        ],
                        v: [
                          [10.832, 0],
                          [0, 10.832],
                          [-10.832, 0],
                          [0, -10.832],
                        ],
                        c: true,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "fl",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.043137254902, 1, 1],
                      ix: 4,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 5 },
                    r: 1,
                    bm: 0,
                    nm: "Fill 1",
                    mn: "ADBE Vector Graphic - Fill",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [11.082, 11.082], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 8,
            op: 155,
            st: 8,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 10,
            ty: 4,
            nm: "dot 3 ",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 20,
                    s: [100],
                  },
                  { t: 23, s: [0] },
                ],
                ix: 11,
              },
              r: { a: 0, k: 0, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 3,
                    s: [147.547, 214.093, 0],
                    to: [57.833, -71.667, 0],
                    ti: [49.5, 19, 0],
                  },
                  { t: 23, s: [133.547, 15.093, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [11.082, 11.082, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [10.832, -5.982],
                          [5.982, 10.832],
                          [-10.832, 5.982],
                          [-5.982, -10.832],
                        ],
                        o: [
                          [10.832, 5.982],
                          [-5.982, 10.832],
                          [-10.832, -5.982],
                          [5.982, -10.832],
                        ],
                        v: [
                          [10.832, 0],
                          [0, 10.832],
                          [-10.832, 0],
                          [0, -10.832],
                        ],
                        c: true,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "fl",
                    c: {
                      a: 0,
                      k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                      ix: 4,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Primary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 5 },
                    r: 1,
                    bm: 0,
                    nm: "Fill 1",
                    mn: "ADBE Vector Graphic - Fill",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [11.082, 11.082], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 3,
            op: 150,
            st: 3,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 11,
            ty: 4,
            nm: "dot 2",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 18,
                    s: [100],
                  },
                  { t: 21, s: [0] },
                ],
                ix: 11,
              },
              r: { a: 0, k: 0, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 0,
                    s: [156.72, 186.85, 0],
                    to: [53.333, -47.5, 0],
                    ti: [-10.333, 63.5, 0],
                  },
                  { t: 21, s: [262.72, 19.85, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [11.969, 11.97, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [11.719, -6.473],
                          [6.4719999999999995, 11.72],
                          [-11.719, 6.473],
                          [-6.473000000000001, -11.72],
                        ],
                        o: [
                          [11.719, 6.473],
                          [-6.473000000000001, 11.72],
                          [-11.719, -6.473],
                          [6.4719999999999995, -11.72],
                        ],
                        v: [
                          [11.719, 0],
                          [-0.001, 11.72],
                          [-11.719, 0],
                          [-0.001, -11.72],
                        ],
                        c: true,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "fl",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.074509803922, 1, 1],
                      ix: 4,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 5 },
                    r: 1,
                    bm: 0,
                    nm: "Fill 1",
                    mn: "ADBE Vector Graphic - Fill",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [11.969, 11.97], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 0,
            op: 150,
            st: 0,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 12,
            ty: 4,
            nm: "dot 1 ",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 18,
                    s: [100],
                  },
                  { t: 21, s: [0] },
                ],
                ix: 11,
              },
              r: { a: 0, k: 0, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 0,
                    s: [181.289, 219.798, 0],
                    to: [49.167, -51.667, 0],
                    ti: [-60.167, 2.667, 0],
                  },
                  { t: 21, s: [374.289, 113.798, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [11.353, 11.353, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [11.103, -6.132000000000001],
                          [6.131, 11.103],
                          [-11.103, 6.130999999999999],
                          [-6.132, -11.103],
                        ],
                        o: [
                          [11.103, 6.130999999999999],
                          [-6.132, 11.103],
                          [-11.103, -6.132000000000001],
                          [6.131, -11.103],
                        ],
                        v: [
                          [11.103, -0.001],
                          [0, 11.103],
                          [-11.103, -0.001],
                          [0, -11.103],
                        ],
                        c: true,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "fl",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.074509803922, 1, 1],
                      ix: 4,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 5 },
                    r: 1,
                    bm: 0,
                    nm: "Fill 1",
                    mn: "ADBE Vector Graphic - Fill",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [11.353, 11.353], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 0,
            op: 150,
            st: 0,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 13,
            ty: 4,
            nm: "circle 1 2",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 25,
                    s: [100],
                  },
                  { t: 28, s: [0] },
                ],
                ix: 11,
              },
              r: { a: 0, k: 0, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 5,
                    s: [164.672, 216.253, 0],
                    to: [56.833, -49.5, 0],
                    ti: [-36.833, -59.5, 0],
                  },
                  { t: 28, s: [359.672, 209.253, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [44.259, 44.26, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [14.26, 0.21300000000000008],
                          [-0.2140000000000004, 14.26],
                          [-14.26, -0.2140000000000004],
                          [0.21399999999999952, -14.26],
                        ],
                        o: [
                          [7.414, 12.183],
                          [-12.183, 7.413],
                          [-7.414, -12.183],
                          [12.184000000000001, -7.413],
                        ],
                        v: [
                          [10.837, 6.198],
                          [-6.198, 10.836],
                          [-10.836, -6.198],
                          [6.199, -10.837],
                        ],
                        c: true,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Primary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [44.259, 44.26], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 5,
            op: 152,
            st: 5,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 14,
            ty: 4,
            nm: "circle 1 ",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 22,
                    s: [100],
                  },
                  { t: 25, s: [0] },
                ],
                ix: 11,
              },
              r: { a: 0, k: 0, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 2,
                    s: [164.672, 216.253, 0],
                    to: [56.833, -49.5, 0],
                    ti: [-34.833, 31.5, 0],
                  },
                  { t: 25, s: [335.672, 67.253, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [44.259, 44.26, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [14.26, 0.21300000000000008],
                          [-0.2140000000000004, 14.26],
                          [-14.26, -0.2140000000000004],
                          [0.21399999999999952, -14.26],
                        ],
                        o: [
                          [7.414, 12.183],
                          [-12.183, 7.413],
                          [-7.414, -12.183],
                          [12.184000000000001, -7.413],
                        ],
                        v: [
                          [10.837, 6.198],
                          [-6.198, 10.836],
                          [-10.836, -6.198],
                          [6.199, -10.837],
                        ],
                        c: true,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Primary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [44.259, 44.26], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 2,
            op: 149,
            st: 2,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 15,
            ty: 4,
            nm: "zigzag line1 ",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: -6, ix: 10 },
              p: { a: 0, k: [217.621, 175.077, 0], ix: 2, l: 2 },
              a: { a: 0, k: [32.061, 150.804, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [-78.07, 59.42],
                          [-50.152, 60.67400000000001],
                          [-35.332, 19.39],
                          [6.8320000000000025, 7.300000000000001],
                          [21.653000000000006, -33.984],
                          [63.821999999999996, -46.078],
                        ],
                        o: [
                          [-63.82399999999999, 46.077],
                          [-21.659999999999997, 33.987],
                          [-6.840999999999999, -7.296],
                          [35.326, -19.387999999999998],
                          [50.149, -60.674],
                          [78.07, -59.423],
                        ],
                        v: [
                          [-78.07, 59.42],
                          [-35.906, 47.331],
                          [-21.086, 6.047],
                          [21.077, -6.042],
                          [35.901, -47.329],
                          [78.07, -59.423],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.043137254902, 1, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [108.07, 90.675], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
              {
                ty: "tm",
                s: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.667], y: [1] },
                      o: { x: [0.333], y: [0] },
                      t: 11.454,
                      s: [0],
                    },
                    { t: 20.4541015625, s: [100] },
                  ],
                  ix: 1,
                },
                e: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.667], y: [1] },
                      o: { x: [0.333], y: [0] },
                      t: 6,
                      s: [0],
                    },
                    { t: 15, s: [100] },
                  ],
                  ix: 2,
                },
                o: { a: 0, k: 0, ix: 3 },
                m: 1,
                ix: 2,
                nm: "Trim Paths 1",
                mn: "ADBE Vector Filter - Trim",
                hd: false,
                _render: true,
              },
            ],
            ip: 6,
            op: 155,
            st: 6,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 17,
            ty: 4,
            nm: "line 1 2",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 0, ix: 10 },
              p: { a: 0, k: [309.355, 220.612, 0], ix: 2, l: 2 },
              a: { a: 0, k: [112.688, 70.562, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [-103.688, -10.203],
                          [29.644999999999996, -97.612],
                        ],
                        o: [
                          [-56.356, -69.612],
                          [84.05, -77.05],
                        ],
                        v: [
                          [-103.688, -10.203],
                          [72.851, -81.283],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tm",
                    s: {
                      a: 1,
                      k: [
                        {
                          i: { x: [0.667], y: [1] },
                          o: { x: [0.333], y: [0] },
                          t: 9.454,
                          s: [0],
                        },
                        { t: 17.4541015625, s: [100] },
                      ],
                      ix: 1,
                    },
                    e: {
                      a: 1,
                      k: [
                        {
                          i: { x: [0.667], y: [1] },
                          o: { x: [0.333], y: [0] },
                          t: 6,
                          s: [0],
                        },
                        { t: 14, s: [100] },
                      ],
                      ix: 2,
                    },
                    o: { a: 0, k: 0, ix: 3 },
                    m: 1,
                    ix: 2,
                    nm: "Trim Paths 1",
                    mn: "ADBE Vector Filter - Trim",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.043137254902, 1, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [112.688, 70.562], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 3,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 6,
            op: 154,
            st: 6,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 18,
            ty: 4,
            nm: "line 2 2",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 0, ix: 10 },
              p: { a: 0, k: [129.087, 94.453, 0], ix: 2, l: 2 },
              a: { a: 0, k: [87.913, 105.714, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [47.65, 96.714],
                          [124.913, -17.453000000000003],
                        ],
                        o: [
                          [98.913, 58.547],
                          [105.113, -88.091],
                        ],
                        v: [
                          [47.65, 96.714],
                          [108.887, -74.625],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tm",
                    s: {
                      a: 1,
                      k: [
                        {
                          i: { x: [0.667], y: [1] },
                          o: { x: [0.333], y: [0] },
                          t: 10,
                          s: [0],
                        },
                        { t: 18, s: [100] },
                      ],
                      ix: 1,
                    },
                    e: {
                      a: 1,
                      k: [
                        {
                          i: { x: [0.667], y: [1] },
                          o: { x: [0.333], y: [0] },
                          t: 6,
                          s: [0],
                        },
                        { t: 14, s: [100] },
                      ],
                      ix: 2,
                    },
                    o: { a: 0, k: 0, ix: 3 },
                    m: 1,
                    ix: 2,
                    nm: "Trim Paths 1",
                    mn: "ADBE Vector Filter - Trim",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.043137254902, 1, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [87.913, 105.714], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 3,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 6,
            op: 154,
            st: 6,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 19,
            ty: 4,
            nm: "line 1 ",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 0, ix: 10 },
              p: { a: 0, k: [309.355, 220.612, 0], ix: 2, l: 2 },
              a: { a: 0, k: [112.688, 70.562, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [-96.688, 2.797],
                          [27.228, -39.946],
                        ],
                        o: [
                          [-57.167, -35.118],
                          [73.485, 15.940000000000001],
                        ],
                        v: [
                          [-96.688, 2.797],
                          [65.851, 6.717],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tm",
                    s: {
                      a: 1,
                      k: [
                        {
                          i: { x: [0.667], y: [1] },
                          o: { x: [0.333], y: [0] },
                          t: 9.454,
                          s: [0],
                        },
                        { t: 17.4541015625, s: [100] },
                      ],
                      ix: 1,
                    },
                    e: {
                      a: 1,
                      k: [
                        {
                          i: { x: [0.667], y: [1] },
                          o: { x: [0.333], y: [0] },
                          t: 6,
                          s: [0],
                        },
                        { t: 14, s: [100] },
                      ],
                      ix: 2,
                    },
                    o: { a: 0, k: 0, ix: 3 },
                    m: 1,
                    ix: 2,
                    nm: "Trim Paths 1",
                    mn: "ADBE Vector Filter - Trim",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.043137254902, 1, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [112.688, 70.562], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 3,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 6,
            op: 154,
            st: 6,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 20,
            ty: 4,
            nm: "line 2 ",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 0, ix: 10 },
              p: { a: 0, k: [129.087, 94.453, 0], ix: 2, l: 2 },
              a: { a: 0, k: [87.913, 105.714, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [47.65, 96.714],
                          [71.309, -43.842],
                        ],
                        o: [
                          [75.996, 52.729],
                          [0.6910000000000007, -83.468],
                        ],
                        v: [
                          [47.65, 96.714],
                          [12.887, -76.625],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tm",
                    s: {
                      a: 1,
                      k: [
                        {
                          i: { x: [0.667], y: [1] },
                          o: { x: [0.333], y: [0] },
                          t: 10,
                          s: [0],
                        },
                        { t: 18, s: [100] },
                      ],
                      ix: 1,
                    },
                    e: {
                      a: 1,
                      k: [
                        {
                          i: { x: [0.667], y: [1] },
                          o: { x: [0.333], y: [0] },
                          t: 6,
                          s: [0],
                        },
                        { t: 14, s: [100] },
                      ],
                      ix: 2,
                    },
                    o: { a: 0, k: 0, ix: 3 },
                    m: 1,
                    ix: 2,
                    nm: "Trim Paths 1",
                    mn: "ADBE Vector Filter - Trim",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.043137254902, 1, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [87.913, 105.714], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 3,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 6,
            op: 154,
            st: 6,
            bm: 0,
            completed: true,
          },
        ],
      },
    ],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 3,
        nm: "Control layer",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [200, 200, 0], ix: 2, l: 2 },
          a: { a: 0, k: [200, 200, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        ef: [
          {
            ty: 5,
            nm: "Primary color",
            np: 3,
            mn: "ADBE Color Control",
            ix: 1,
            en: 1,
            ef: [
              {
                ty: 2,
                nm: "Color",
                mn: "ADBE Color Control-0001",
                ix: 1,
                v: {
                  a: 0,
                  k: [
                    0.12941176470588237, 0.1843137254901961,
                    0.27058823529411763, 1,
                  ],
                  ix: 1,
                },
              },
            ],
          },
          {
            ty: 5,
            nm: "Secondary color",
            np: 3,
            mn: "ADBE Color Control",
            ix: 2,
            en: 1,
            ef: [
              {
                ty: 2,
                nm: "Color",
                mn: "ADBE Color Control-0001",
                ix: 1,
                v: {
                  a: 0,
                  k: [
                    0.9411764705882353, 0.7843137254901961, 0.3568627450980392,
                    1,
                  ],
                  ix: 1,
                },
              },
            ],
          },
          {
            ty: 5,
            nm: "Position control",
            np: 3,
            mn: "ADBE Point Control",
            ix: 3,
            en: 1,
            ef: [
              {
                ty: 3,
                nm: "Point",
                mn: "ADBE Point Control-0001",
                ix: 1,
                v: { a: 0, k: [200, 200], ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Bg ON",
            np: 3,
            mn: "ADBE Checkbox Control",
            ix: 4,
            en: 1,
            ef: [
              {
                ty: 7,
                nm: "Checkbox",
                mn: "ADBE Checkbox Control-0001",
                ix: 1,
                v: { a: 0, k: 0, ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Bg Color",
            np: 3,
            mn: "ADBE Color Control",
            ix: 5,
            en: 1,
            ef: [
              {
                ty: 2,
                nm: "Color",
                mn: "ADBE Color Control-0001",
                ix: 1,
                v: { a: 0, k: [1, 1, 1, 1], ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Stroke width",
            np: 3,
            mn: "ADBE Slider Control",
            ix: 6,
            en: 1,
            ef: [
              {
                ty: 0,
                nm: "Slider",
                mn: "ADBE Slider Control-0001",
                ix: 1,
                v: { a: 0, k: 12, ix: 1 },
              },
            ],
          },
          {
            ty: 5,
            nm: "Scale",
            np: 3,
            mn: "ADBE Slider Control",
            ix: 7,
            en: 1,
            ef: [
              {
                ty: 0,
                nm: "Slider",
                mn: "ADBE Slider Control-0001",
                ix: 1,
                v: { a: 0, k: 100, ix: 1 },
              },
            ],
          },
        ],
        ip: 0,
        op: 150.15015015015,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 2,
        ty: 3,
        nm: "fixed null",
        sr: 1,
        ks: {
          o: { a: 0, k: 0, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: {
            a: 0,
            k: [292, 441, 0],
            ix: 2,
            l: 2,
            x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Position control')('Point');",
          },
          a: { a: 0, k: [50, 50, 0], ix: 1, l: 2 },
          s: {
            a: 0,
            k: [57, 57, 100],
            ix: 6,
            l: 2,
            x: "var $bm_rt;\nvar temp;\ntemp = thisComp.layer('Control layer').effect('Scale')('Slider');\n$bm_rt = [\n    temp,\n    temp\n];",
          },
        },
        ao: 0,
        ip: 0,
        op: 150.15015015015,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 3,
        ty: 3,
        nm: "Null 1",
        parent: 2,
        sr: 1,
        ks: {
          o: { a: 0, k: 0, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [50, 50, 0], ix: 2, l: 2 },
          a: { a: 0, k: [50, 50, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        ip: 0,
        op: 150.15015015015,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 4,
        ty: 3,
        nm: "position control",
        parent: 3,
        sr: 1,
        ks: {
          o: { a: 0, k: 0, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: {
            a: 1,
            k: [
              {
                i: { x: 0.833, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 0,
                s: [-60.582, 167.527, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.667, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 7,
                s: [-51.582, 158.527, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.833, y: 1 },
                o: { x: 0.167, y: 0 },
                t: 11,
                s: [-90.582, 192.527, 0],
                to: null,
                ti: null,
              },
              {
                i: { x: 0.833, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 21,
                s: [-51.582, 158.527, 0],
                to: null,
                ti: null,
              },
              { t: 29, s: [-60.582, 167.527, 0] },
            ],
            ix: 2,
            l: 2,
          },
          a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
          s: { a: 0, k: [115, 115, 100], ix: 6, l: 2 },
        },
        ao: 0,
        ip: 0,
        op: 150,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 5,
        ty: 4,
        nm: "cone opening 2",
        parent: 8,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [32, 231, 0], ix: 2, l: 2 },
          a: { a: 0, k: [32, 231, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [68.563, 48.529],
                      [22.997000000000003, 43.462],
                      [-68.564, -48.528],
                    ],
                    o: [
                      [55.978, 62.629],
                      [-45.786, -17.93],
                      [-56.974, -61.514],
                    ],
                    v: [
                      [62.27, 55.579],
                      [-11.395, 12.766],
                      [-62.272, -55.579],
                    ],
                    c: false,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 115, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [157.595, 92.63], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 6",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 150,
        st: 8,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 6,
        ty: 4,
        nm: "cone mask 3",
        parent: 8,
        td: 2,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [32, 231, 0], ix: 2, l: 2 },
          a: { a: 0, k: [32, 231, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [-29.609, -99.268],
                      [-94.933, 99.268],
                      [94.933, 11.891],
                      [83.149, 24.655],
                    ],
                    o: [
                      [-29.609, -99.268],
                      [-94.933, 99.268],
                      [94.933, 11.891],
                      [-26.795, -72.79599999999999],
                    ],
                    v: [
                      [-29.609, -99.268],
                      [-94.933, 99.268],
                      [94.933, 11.891],
                      [17.149, -33.845],
                    ],
                    c: true,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 0, ix: 5 },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [124.933, 136.319], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 5",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
              ix: 4,
              x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
            },
            o: { a: 0, k: 100, ix: 5 },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 150,
        st: 8,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 7,
        ty: 0,
        nm: "particles",
        parent: 3,
        tt: 2,
        refId: "comp_0",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [50, 50, 0], ix: 2, l: 2 },
          a: { a: 0, k: [200, 200, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        w: 400,
        h: 400,
        ip: 6,
        op: 150,
        st: 6,
        bm: 0,
        completed: true,
        layers: [
          {
            ddd: 0,
            ind: 1,
            ty: 4,
            nm: "c shape2 ",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 22,
                    s: [100],
                  },
                  { t: 25, s: [0] },
                ],
                ix: 11,
              },
              r: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    t: 2,
                    s: [0],
                  },
                  { t: 25, s: [160] },
                ],
                ix: 10,
              },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 2,
                    s: [167.969, 215.593, 0],
                    to: [45.667, -57.5, 0],
                    ti: [-85.667, -13.5, 0],
                  },
                  { t: 25, s: [352.969, 128.593, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [37.03, 42.016, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [7.03, 11.132],
                          [-5.260999999999999, 7.551],
                          [-2.5650000000000004, -11.132],
                        ],
                        o: [
                          [0.6379999999999999, 12.016],
                          [-7.029999999999999, -5.2330000000000005],
                          [3.827, -12.016],
                        ],
                        v: [
                          [7.03, 11.132],
                          [-6.145, 1.159],
                          [3.827, -12.016],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.043137254902, 1, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [37.03, 42.016], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 2,
            op: 147,
            st: 2,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 2,
            ty: 4,
            nm: "c shape1 ",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 25,
                    s: [100],
                  },
                  { t: 28, s: [0] },
                ],
                ix: 11,
              },
              r: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 3,
                    s: [0],
                  },
                  { t: 28, s: [-113] },
                ],
                ix: 10,
              },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 3,
                    s: [157.935, 219.401, 0],
                    to: [69.333, -57.833, 0],
                    ti: [71.667, 7.833, 0],
                  },
                  { t: 28, s: [146.935, 34.401, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [41.651, 39.715, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [8.285, -9.715],
                          [9.918, 2.982],
                          [-8.283999999999999, 7.981999999999999],
                        ],
                        o: [
                          [11.652000000000001, -4.21],
                          [-1.0919999999999996, 9.716000000000001],
                          [-11.651, 2.477],
                        ],
                        v: [
                          [8.285, -9.715],
                          [4.413, 6.349],
                          [-11.651, 2.477],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.043137254902, 1, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [41.651, 39.715], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 3,
            op: 150,
            st: 3,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 3,
            ty: 4,
            nm: "speck 2 2",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 22,
                    s: [100],
                  },
                  { t: 25, s: [0] },
                ],
                ix: 11,
              },
              r: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 8,
                    s: [0],
                  },
                  { t: 25, s: [102] },
                ],
                ix: 10,
              },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 8,
                    s: [158.457, 201.19, 0],
                    to: [35, -32, 0],
                    ti: [-1, 2, 0],
                  },
                  { t: 25, s: [295.457, 42.19, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [12.28, 12.28, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [-6.279, -6.28],
                          [6.279, 6.28],
                        ],
                        o: [
                          [-6.279, -6.28],
                          [6.279, 6.28],
                        ],
                        v: [
                          [-6.279, -6.28],
                          [6.279, 6.28],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Primary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [12.279, 12.28], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [6.28, -6.28],
                          [-6.28, 6.28],
                        ],
                        o: [
                          [6.28, -6.28],
                          [-6.28, 6.28],
                        ],
                        v: [
                          [6.28, -6.28],
                          [-6.28, 6.28],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Primary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [12.28, 12.28], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 2",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 2,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 8,
            op: 158,
            st: 8,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 4,
            ty: 4,
            nm: "speck 2 ",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 14,
                    s: [100],
                  },
                  { t: 17, s: [0] },
                ],
                ix: 11,
              },
              r: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 0,
                    s: [0],
                  },
                  { t: 17, s: [102] },
                ],
                ix: 10,
              },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 0,
                    s: [158.457, 201.19, 0],
                    to: [33, -27, 0],
                    ti: [8, 45, 0],
                  },
                  { t: 17, s: [223.457, 34.19, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [12.28, 12.28, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [-6.279, -6.28],
                          [6.279, 6.28],
                        ],
                        o: [
                          [-6.279, -6.28],
                          [6.279, 6.28],
                        ],
                        v: [
                          [-6.279, -6.28],
                          [6.279, 6.28],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Primary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [12.279, 12.28], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [6.28, -6.28],
                          [-6.28, 6.28],
                        ],
                        o: [
                          [6.28, -6.28],
                          [-6.28, 6.28],
                        ],
                        v: [
                          [6.28, -6.28],
                          [-6.28, 6.28],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Primary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [12.28, 12.28], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 2",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 2,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 0,
            op: 150,
            st: 0,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 5,
            ty: 4,
            nm: "speck 1 ",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 16,
                    s: [100],
                  },
                  { t: 19, s: [0] },
                ],
                ix: 11,
              },
              r: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 3,
                    s: [0],
                  },
                  { t: 19, s: [118] },
                ],
                ix: 10,
              },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 3,
                    s: [205.505, 238.313, 0],
                    to: [39.702, -28.606, 0],
                    ti: [-44.843, -14.455, 0],
                  },
                  { t: 19, s: [365.505, 190.313, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [14.881, 14.881, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [6, 14.881],
                          [23.761, 14.881],
                        ],
                        o: [
                          [6, 14.881],
                          [23.761, 14.881],
                        ],
                        v: [
                          [6, 14.881],
                          [23.761, 14.881],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.043137254902, 1, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [0, 0], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [14.881, 6],
                          [14.881, 23.761],
                        ],
                        o: [
                          [14.881, 6],
                          [14.881, 23.761],
                        ],
                        v: [
                          [14.881, 6],
                          [14.881, 23.761],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.043137254902, 1, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [0, 0], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 2",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 2,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 3,
            op: 150,
            st: 3,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 6,
            ty: 4,
            nm: "dot 5 ",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 14,
                    s: [100],
                  },
                  { t: 17, s: [0] },
                ],
                ix: 11,
              },
              r: { a: 0, k: 0, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 3,
                    s: [204.276, 223.73, 0],
                    to: [37.333, -56, 0],
                    ti: [-37.333, -29, 0],
                  },
                  { t: 17, s: [371.276, 191.73, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [7.135, 7.135, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [6.885, -3.803],
                          [3.802, 6.885],
                          [-6.885, 3.802],
                          [-3.803, -6.885],
                        ],
                        o: [
                          [6.885, 3.802],
                          [-3.803, 6.885],
                          [-6.885, -3.803],
                          [3.802, -6.885],
                        ],
                        v: [
                          [6.885, 0],
                          [0, 6.885],
                          [-6.885, 0],
                          [0, -6.885],
                        ],
                        c: true,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "fl",
                    c: {
                      a: 0,
                      k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                      ix: 4,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Primary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 5 },
                    r: 1,
                    bm: 0,
                    nm: "Fill 1",
                    mn: "ADBE Vector Graphic - Fill",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [7.135, 7.135], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 3,
            op: 153,
            st: 3,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 7,
            ty: 4,
            nm: "dot 4 2",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 23,
                    s: [100],
                  },
                  { t: 26, s: [0] },
                ],
                ix: 11,
              },
              r: { a: 0, k: 0, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 6,
                    s: [185.51, 223.859, 0],
                    to: [12, -9.833, 0],
                    ti: [0, -0.167, 0],
                  },
                  { t: 26, s: [326.51, 105.859, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [8.065, 8.065, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [7.816, -4.316],
                          [4.317, 7.815],
                          [-7.816, 4.316],
                          [-4.316, -7.815],
                        ],
                        o: [
                          [7.816, 4.316],
                          [-4.316, 7.815],
                          [-7.816, -4.316],
                          [4.317, -7.815],
                        ],
                        v: [
                          [7.816, 0],
                          [0.001, 7.815],
                          [-7.816, 0],
                          [0.001, -7.815],
                        ],
                        c: true,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "fl",
                    c: {
                      a: 0,
                      k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                      ix: 4,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Primary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 5 },
                    r: 1,
                    bm: 0,
                    nm: "Fill 1",
                    mn: "ADBE Vector Graphic - Fill",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [8.065, 8.065], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 6,
            op: 153,
            st: 6,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 8,
            ty: 4,
            nm: "dot 4 ",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 20,
                    s: [100],
                  },
                  { t: 23, s: [0] },
                ],
                ix: 11,
              },
              r: { a: 0, k: 0, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 3,
                    s: [159.51, 208.859, 0],
                    to: [34, -46.833, 0],
                    ti: [27, 48.833, 0],
                  },
                  { t: 23, s: [201.51, 11.859, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [8.065, 8.065, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [7.816, -4.316],
                          [4.317, 7.815],
                          [-7.816, 4.316],
                          [-4.316, -7.815],
                        ],
                        o: [
                          [7.816, 4.316],
                          [-4.316, 7.815],
                          [-7.816, -4.316],
                          [4.317, -7.815],
                        ],
                        v: [
                          [7.816, 0],
                          [0.001, 7.815],
                          [-7.816, 0],
                          [0.001, -7.815],
                        ],
                        c: true,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "fl",
                    c: {
                      a: 0,
                      k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                      ix: 4,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Primary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 5 },
                    r: 1,
                    bm: 0,
                    nm: "Fill 1",
                    mn: "ADBE Vector Graphic - Fill",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [8.065, 8.065], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 3,
            op: 150,
            st: 3,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 9,
            ty: 4,
            nm: "dot 3 2",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 25,
                    s: [100],
                  },
                  { t: 28, s: [0] },
                ],
                ix: 11,
              },
              r: { a: 0, k: 0, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 8,
                    s: [147.547, 214.093, 0],
                    to: [38.833, -56.667, 0],
                    ti: [-31.5, 65, 0],
                  },
                  { t: 28, s: [238.547, 37.093, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [11.082, 11.082, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [10.832, -5.982],
                          [5.982, 10.832],
                          [-10.832, 5.982],
                          [-5.982, -10.832],
                        ],
                        o: [
                          [10.832, 5.982],
                          [-5.982, 10.832],
                          [-10.832, -5.982],
                          [5.982, -10.832],
                        ],
                        v: [
                          [10.832, 0],
                          [0, 10.832],
                          [-10.832, 0],
                          [0, -10.832],
                        ],
                        c: true,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "fl",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.043137254902, 1, 1],
                      ix: 4,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 5 },
                    r: 1,
                    bm: 0,
                    nm: "Fill 1",
                    mn: "ADBE Vector Graphic - Fill",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [11.082, 11.082], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 8,
            op: 155,
            st: 8,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 10,
            ty: 4,
            nm: "dot 3 ",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 20,
                    s: [100],
                  },
                  { t: 23, s: [0] },
                ],
                ix: 11,
              },
              r: { a: 0, k: 0, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 3,
                    s: [147.547, 214.093, 0],
                    to: [57.833, -71.667, 0],
                    ti: [49.5, 19, 0],
                  },
                  { t: 23, s: [133.547, 15.093, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [11.082, 11.082, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [10.832, -5.982],
                          [5.982, 10.832],
                          [-10.832, 5.982],
                          [-5.982, -10.832],
                        ],
                        o: [
                          [10.832, 5.982],
                          [-5.982, 10.832],
                          [-10.832, -5.982],
                          [5.982, -10.832],
                        ],
                        v: [
                          [10.832, 0],
                          [0, 10.832],
                          [-10.832, 0],
                          [0, -10.832],
                        ],
                        c: true,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "fl",
                    c: {
                      a: 0,
                      k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                      ix: 4,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Primary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 5 },
                    r: 1,
                    bm: 0,
                    nm: "Fill 1",
                    mn: "ADBE Vector Graphic - Fill",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [11.082, 11.082], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 3,
            op: 150,
            st: 3,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 11,
            ty: 4,
            nm: "dot 2",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 18,
                    s: [100],
                  },
                  { t: 21, s: [0] },
                ],
                ix: 11,
              },
              r: { a: 0, k: 0, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 0,
                    s: [156.72, 186.85, 0],
                    to: [53.333, -47.5, 0],
                    ti: [-10.333, 63.5, 0],
                  },
                  { t: 21, s: [262.72, 19.85, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [11.969, 11.97, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [11.719, -6.473],
                          [6.4719999999999995, 11.72],
                          [-11.719, 6.473],
                          [-6.473000000000001, -11.72],
                        ],
                        o: [
                          [11.719, 6.473],
                          [-6.473000000000001, 11.72],
                          [-11.719, -6.473],
                          [6.4719999999999995, -11.72],
                        ],
                        v: [
                          [11.719, 0],
                          [-0.001, 11.72],
                          [-11.719, 0],
                          [-0.001, -11.72],
                        ],
                        c: true,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "fl",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.074509803922, 1, 1],
                      ix: 4,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 5 },
                    r: 1,
                    bm: 0,
                    nm: "Fill 1",
                    mn: "ADBE Vector Graphic - Fill",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [11.969, 11.97], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 0,
            op: 150,
            st: 0,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 12,
            ty: 4,
            nm: "dot 1 ",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 18,
                    s: [100],
                  },
                  { t: 21, s: [0] },
                ],
                ix: 11,
              },
              r: { a: 0, k: 0, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 0,
                    s: [181.289, 219.798, 0],
                    to: [49.167, -51.667, 0],
                    ti: [-60.167, 2.667, 0],
                  },
                  { t: 21, s: [374.289, 113.798, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [11.353, 11.353, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [11.103, -6.132000000000001],
                          [6.131, 11.103],
                          [-11.103, 6.130999999999999],
                          [-6.132, -11.103],
                        ],
                        o: [
                          [11.103, 6.130999999999999],
                          [-6.132, 11.103],
                          [-11.103, -6.132000000000001],
                          [6.131, -11.103],
                        ],
                        v: [
                          [11.103, -0.001],
                          [0, 11.103],
                          [-11.103, -0.001],
                          [0, -11.103],
                        ],
                        c: true,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "fl",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.074509803922, 1, 1],
                      ix: 4,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 5 },
                    r: 1,
                    bm: 0,
                    nm: "Fill 1",
                    mn: "ADBE Vector Graphic - Fill",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [11.353, 11.353], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 0,
            op: 150,
            st: 0,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 13,
            ty: 4,
            nm: "circle 1 2",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 25,
                    s: [100],
                  },
                  { t: 28, s: [0] },
                ],
                ix: 11,
              },
              r: { a: 0, k: 0, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 5,
                    s: [164.672, 216.253, 0],
                    to: [56.833, -49.5, 0],
                    ti: [-36.833, -59.5, 0],
                  },
                  { t: 28, s: [359.672, 209.253, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [44.259, 44.26, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [14.26, 0.21300000000000008],
                          [-0.2140000000000004, 14.26],
                          [-14.26, -0.2140000000000004],
                          [0.21399999999999952, -14.26],
                        ],
                        o: [
                          [7.414, 12.183],
                          [-12.183, 7.413],
                          [-7.414, -12.183],
                          [12.184000000000001, -7.413],
                        ],
                        v: [
                          [10.837, 6.198],
                          [-6.198, 10.836],
                          [-10.836, -6.198],
                          [6.199, -10.837],
                        ],
                        c: true,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Primary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [44.259, 44.26], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 5,
            op: 152,
            st: 5,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 14,
            ty: 4,
            nm: "circle 1 ",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 22,
                    s: [100],
                  },
                  { t: 25, s: [0] },
                ],
                ix: 11,
              },
              r: { a: 0, k: 0, ix: 10 },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 2,
                    s: [164.672, 216.253, 0],
                    to: [56.833, -49.5, 0],
                    ti: [-34.833, 31.5, 0],
                  },
                  { t: 25, s: [335.672, 67.253, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [44.259, 44.26, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [14.26, 0.21300000000000008],
                          [-0.2140000000000004, 14.26],
                          [-14.26, -0.2140000000000004],
                          [0.21399999999999952, -14.26],
                        ],
                        o: [
                          [7.414, 12.183],
                          [-12.183, 7.413],
                          [-7.414, -12.183],
                          [12.184000000000001, -7.413],
                        ],
                        v: [
                          [10.837, 6.198],
                          [-6.198, 10.836],
                          [-10.836, -6.198],
                          [6.199, -10.837],
                        ],
                        c: true,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Primary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [44.259, 44.26], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 2,
            op: 149,
            st: 2,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 15,
            ty: 4,
            nm: "zigzag line1 ",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: -6, ix: 10 },
              p: { a: 0, k: [217.621, 175.077, 0], ix: 2, l: 2 },
              a: { a: 0, k: [32.061, 150.804, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [-78.07, 59.42],
                          [-50.152, 60.67400000000001],
                          [-35.332, 19.39],
                          [6.8320000000000025, 7.300000000000001],
                          [21.653000000000006, -33.984],
                          [63.821999999999996, -46.078],
                        ],
                        o: [
                          [-63.82399999999999, 46.077],
                          [-21.659999999999997, 33.987],
                          [-6.840999999999999, -7.296],
                          [35.326, -19.387999999999998],
                          [50.149, -60.674],
                          [78.07, -59.423],
                        ],
                        v: [
                          [-78.07, 59.42],
                          [-35.906, 47.331],
                          [-21.086, 6.047],
                          [21.077, -6.042],
                          [35.901, -47.329],
                          [78.07, -59.423],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.043137254902, 1, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [108.07, 90.675], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 2,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
              {
                ty: "tm",
                s: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.667], y: [1] },
                      o: { x: [0.333], y: [0] },
                      t: 11.454,
                      s: [0],
                    },
                    { t: 20.4541015625, s: [100] },
                  ],
                  ix: 1,
                },
                e: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.667], y: [1] },
                      o: { x: [0.333], y: [0] },
                      t: 6,
                      s: [0],
                    },
                    { t: 15, s: [100] },
                  ],
                  ix: 2,
                },
                o: { a: 0, k: 0, ix: 3 },
                m: 1,
                ix: 2,
                nm: "Trim Paths 1",
                mn: "ADBE Vector Filter - Trim",
                hd: false,
                _render: true,
              },
            ],
            ip: 6,
            op: 155,
            st: 6,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 17,
            ty: 4,
            nm: "line 1 2",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 0, ix: 10 },
              p: { a: 0, k: [309.355, 220.612, 0], ix: 2, l: 2 },
              a: { a: 0, k: [112.688, 70.562, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [-103.688, -10.203],
                          [29.644999999999996, -97.612],
                        ],
                        o: [
                          [-56.356, -69.612],
                          [84.05, -77.05],
                        ],
                        v: [
                          [-103.688, -10.203],
                          [72.851, -81.283],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tm",
                    s: {
                      a: 1,
                      k: [
                        {
                          i: { x: [0.667], y: [1] },
                          o: { x: [0.333], y: [0] },
                          t: 9.454,
                          s: [0],
                        },
                        { t: 17.4541015625, s: [100] },
                      ],
                      ix: 1,
                    },
                    e: {
                      a: 1,
                      k: [
                        {
                          i: { x: [0.667], y: [1] },
                          o: { x: [0.333], y: [0] },
                          t: 6,
                          s: [0],
                        },
                        { t: 14, s: [100] },
                      ],
                      ix: 2,
                    },
                    o: { a: 0, k: 0, ix: 3 },
                    m: 1,
                    ix: 2,
                    nm: "Trim Paths 1",
                    mn: "ADBE Vector Filter - Trim",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.043137254902, 1, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [112.688, 70.562], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 3,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 6,
            op: 154,
            st: 6,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 18,
            ty: 4,
            nm: "line 2 2",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 0, ix: 10 },
              p: { a: 0, k: [129.087, 94.453, 0], ix: 2, l: 2 },
              a: { a: 0, k: [87.913, 105.714, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [47.65, 96.714],
                          [124.913, -17.453000000000003],
                        ],
                        o: [
                          [98.913, 58.547],
                          [105.113, -88.091],
                        ],
                        v: [
                          [47.65, 96.714],
                          [108.887, -74.625],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tm",
                    s: {
                      a: 1,
                      k: [
                        {
                          i: { x: [0.667], y: [1] },
                          o: { x: [0.333], y: [0] },
                          t: 10,
                          s: [0],
                        },
                        { t: 18, s: [100] },
                      ],
                      ix: 1,
                    },
                    e: {
                      a: 1,
                      k: [
                        {
                          i: { x: [0.667], y: [1] },
                          o: { x: [0.333], y: [0] },
                          t: 6,
                          s: [0],
                        },
                        { t: 14, s: [100] },
                      ],
                      ix: 2,
                    },
                    o: { a: 0, k: 0, ix: 3 },
                    m: 1,
                    ix: 2,
                    nm: "Trim Paths 1",
                    mn: "ADBE Vector Filter - Trim",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.043137254902, 1, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [87.913, 105.714], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 3,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 6,
            op: 154,
            st: 6,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 19,
            ty: 4,
            nm: "line 1 ",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 0, ix: 10 },
              p: { a: 0, k: [309.355, 220.612, 0], ix: 2, l: 2 },
              a: { a: 0, k: [112.688, 70.562, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [-96.688, 2.797],
                          [27.228, -39.946],
                        ],
                        o: [
                          [-57.167, -35.118],
                          [73.485, 15.940000000000001],
                        ],
                        v: [
                          [-96.688, 2.797],
                          [65.851, 6.717],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tm",
                    s: {
                      a: 1,
                      k: [
                        {
                          i: { x: [0.667], y: [1] },
                          o: { x: [0.333], y: [0] },
                          t: 9.454,
                          s: [0],
                        },
                        { t: 17.4541015625, s: [100] },
                      ],
                      ix: 1,
                    },
                    e: {
                      a: 1,
                      k: [
                        {
                          i: { x: [0.667], y: [1] },
                          o: { x: [0.333], y: [0] },
                          t: 6,
                          s: [0],
                        },
                        { t: 14, s: [100] },
                      ],
                      ix: 2,
                    },
                    o: { a: 0, k: 0, ix: 3 },
                    m: 1,
                    ix: 2,
                    nm: "Trim Paths 1",
                    mn: "ADBE Vector Filter - Trim",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.043137254902, 1, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [112.688, 70.562], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 3,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 6,
            op: 154,
            st: 6,
            bm: 0,
            completed: true,
          },
          {
            ddd: 0,
            ind: 20,
            ty: 4,
            nm: "line 2 ",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 0, ix: 10 },
              p: { a: 0, k: [129.087, 94.453, 0], ix: 2, l: 2 },
              a: { a: 0, k: [87.913, 105.714, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ind: 0,
                    ty: "sh",
                    ix: 1,
                    ks: {
                      a: 0,
                      k: {
                        i: [
                          [47.65, 96.714],
                          [71.309, -43.842],
                        ],
                        o: [
                          [75.996, 52.729],
                          [0.6910000000000007, -83.468],
                        ],
                        v: [
                          [47.65, 96.714],
                          [12.887, -76.625],
                        ],
                        c: false,
                      },
                      ix: 2,
                    },
                    nm: "Path 1",
                    mn: "ADBE Vector Shape - Group",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tm",
                    s: {
                      a: 1,
                      k: [
                        {
                          i: { x: [0.667], y: [1] },
                          o: { x: [0.333], y: [0] },
                          t: 10,
                          s: [0],
                        },
                        { t: 18, s: [100] },
                      ],
                      ix: 1,
                    },
                    e: {
                      a: 1,
                      k: [
                        {
                          i: { x: [0.667], y: [1] },
                          o: { x: [0.333], y: [0] },
                          t: 6,
                          s: [0],
                        },
                        { t: 14, s: [100] },
                      ],
                      ix: 2,
                    },
                    o: { a: 0, k: 0, ix: 3 },
                    m: 1,
                    ix: 2,
                    nm: "Trim Paths 1",
                    mn: "ADBE Vector Filter - Trim",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "st",
                    c: {
                      a: 0,
                      k: [0.415686304429, 0.043137254902, 1, 1],
                      ix: 3,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Secondary color')('Color');",
                    },
                    o: { a: 0, k: 100, ix: 4 },
                    w: {
                      a: 0,
                      k: 12,
                      ix: 5,
                      x: "var $bm_rt;\n$bm_rt = comp('confetti').layer('Control layer').effect('Stroke width')('Slider');",
                    },
                    lc: 2,
                    lj: 2,
                    bm: 0,
                    nm: "Stroke 1",
                    mn: "ADBE Vector Graphic - Stroke",
                    hd: false,
                    _render: true,
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [87.913, 105.714], ix: 2 },
                    a: { a: 0, k: [0, 0], ix: 1 },
                    s: { a: 0, k: [100, 100], ix: 3 },
                    r: { a: 0, k: 0, ix: 6 },
                    o: { a: 0, k: 100, ix: 7 },
                    sk: { a: 0, k: 0, ix: 4 },
                    sa: { a: 0, k: 0, ix: 5 },
                    nm: "Transform",
                    _render: true,
                  },
                ],
                nm: "Group 1",
                np: 3,
                cix: 2,
                bm: 0,
                ix: 1,
                mn: "ADBE Vector Group",
                hd: false,
                _render: true,
              },
            ],
            ip: 6,
            op: 154,
            st: 6,
            bm: 0,
            completed: true,
          },
        ],
      },
      {
        ddd: 0,
        ind: 8,
        ty: 4,
        nm: "cone ",
        parent: 4,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [0, 0, 0], ix: 2, l: 2 },
          a: { a: 0, k: [29.5, 236, 0], ix: 1, l: 2 },
          s: {
            a: 1,
            k: [
              {
                i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                t: 0,
                s: [100, 100, 100],
              },
              {
                i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                t: 7,
                s: [104, 104, 100],
              },
              {
                i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                t: 11,
                s: [89.372, 87.035, 100],
              },
              { t: 21, s: [100, 100, 100] },
            ],
            ix: 6,
            l: 2,
          },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [-23.101, -7.372],
                      [-4.558, 7.372999999999999],
                    ],
                    o: [
                      [-23.101, -7.372],
                      [23.101, 5.802],
                    ],
                    v: [
                      [-23.101, -7.372],
                      [23.101, 5.802],
                    ],
                    c: false,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 115, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [66.453, 202.378], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [-60.857, -20.243],
                      [-15.496999999999993, 20.243000000000002],
                    ],
                    o: [
                      [-60.857, -20.243],
                      [60.856, -6.982],
                    ],
                    v: [
                      [-60.857, -20.243],
                      [60.856, -6.982],
                    ],
                    c: false,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 115, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [117.951, 173.483], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 2",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 2,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [-47.071, -14.417],
                      [-9.18, 14.417],
                    ],
                    o: [
                      [-47.071, -14.417],
                      [47.071, -1.641],
                    ],
                    v: [
                      [-47.071, -14.417],
                      [47.071, -1.641],
                    ],
                    c: false,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 115, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [118.206, 124.982], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 3",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 3,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [-18.587, -4.774],
                      [-5.1179999999999986, 4.774],
                    ],
                    o: [
                      [-18.587, -4.774],
                      [18.587, 3.428],
                    ],
                    v: [
                      [-18.587, -4.774],
                      [18.587, 3.428],
                    ],
                    c: false,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 115, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [101.608, 79.216], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 4",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 4,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [94.933, 11.891],
                      [-94.933, 99.268],
                      [-29.609, -99.268],
                    ],
                    o: [
                      [94.933, 11.891],
                      [-94.933, 99.268],
                      [-29.609, -99.268],
                    ],
                    v: [
                      [94.933, 11.891],
                      [-94.933, 99.268],
                      [-29.609, -99.268],
                    ],
                    c: false,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 115, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [124.933, 136.319], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 5",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 5,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [68.563, 48.529],
                      [22.997000000000003, 43.462],
                      [-68.564, -48.528],
                      [-22.997999999999998, -43.462],
                    ],
                    o: [
                      [55.978, 62.629],
                      [-45.786, -17.93],
                      [-55.979, -62.629],
                      [45.784, 17.93],
                    ],
                    v: [
                      [62.27, 55.579],
                      [-11.395, 12.766],
                      [-62.272, -55.579],
                      [11.393, -12.766],
                    ],
                    c: true,
                  },
                  ix: 2,
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false,
                _render: true,
              },
              {
                ty: "st",
                c: {
                  a: 0,
                  k: [0.098039223166, 0.098039223166, 0.098039223166, 1],
                  ix: 3,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Primary color')('Color');",
                },
                o: { a: 0, k: 100, ix: 4 },
                w: {
                  a: 0,
                  k: 12,
                  ix: 5,
                  x: "var $bm_rt;\n$bm_rt = $bm_mul(100 / 115, thisComp.layer('Control layer').effect('Stroke width')('Slider'));",
                },
                lc: 2,
                lj: 2,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [157.595, 92.63], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Group 6",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 6,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 150,
        st: 0,
        bm: 0,
        completed: true,
      },
      {
        ddd: 0,
        ind: 9,
        ty: 4,
        nm: "background",
        sr: 1,
        ks: {
          o: {
            a: 0,
            k: 100,
            ix: 11,
            x: "var $bm_rt;\nif (thisComp.layer('Control layer').effect('Bg ON')('Checkbox') > 0) {\n    $bm_rt = 100;\n} else {\n    $bm_rt = 0;\n}",
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [200, 200, 0], ix: 2, l: 2 },
          a: { a: 0, k: [1, -0.5, 0], ix: 1, l: 2 },
          s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [400, 400], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                r: { a: 0, k: 0, ix: 4 },
                nm: "Rectangle Path 1",
                mn: "ADBE Vector Shape - Rect",
                hd: false,
                _render: true,
              },
              {
                ty: "fl",
                c: {
                  a: 0,
                  k: [1, 1, 1, 1],
                  ix: 4,
                  x: "var $bm_rt;\n$bm_rt = thisComp.layer('Control layer').effect('Bg Color')('Color');",
                },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false,
                _render: true,
              },
              {
                ty: "tr",
                p: { a: 0, k: [1, -0.5], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform",
                _render: true,
              },
            ],
            nm: "Rectangle 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false,
            _render: true,
          },
        ],
        ip: 0,
        op: 150.15015015015,
        st: 0,
        bm: 0,
        completed: true,
      },
    ],
    markers: [],
    __complete: true,
  },
});

/* ====================================================
   Managing Splides 
  ===================================================== */
// new Splide('.splide__projects', {
//   pagination: false,
//   arrows: false,
//   gap: 40,
//   perPage: 2,
//   breakpoints: {
//     430: {
//       perPage: 1,
//       gap: 0
//     }
//   }
// }).mount();
new Splide(".splide__types_app", {
  pagination: false,
  arrows: false,
  perPage: 1,
  gap: "50px",
  focus: "left",
  padding: {
    right: "20rem",
  },
  breakpoints: {
    430: {
      gap: "30px",
      padding: {
        right: "8rem",
      },
      type: "loop",
      autoplay: true,
    },
  },
}).mount();

/* ====================================================
   CTA Color Change By Placing In Each Section
  ===================================================== */
const contactLinks = document.querySelectorAll(".contact__info_link");
const typesApp = document.querySelector(".types__app_section");
const cta = document.querySelector(".cta__section");
window.onscroll = () => {
  const topTypesAppSection = typesApp.getBoundingClientRect().top;
  const bottomTypesAppSection = typesApp.getBoundingClientRect().bottom;
  const topCtaSection = cta.getBoundingClientRect().top;
  const bottomCtaSection = cta.getBoundingClientRect().bottom;
  contactLinks.forEach((contact) => {
    const topContactLink = contact.getBoundingClientRect().top;
    if (
      (topTypesAppSection < topContactLink + 10 &&
        bottomTypesAppSection > topContactLink) ||
      (topCtaSection < topContactLink + 10 && bottomCtaSection > topContactLink)
    ) {
      contact.classList.add("white");
    } else {
      contact.classList.remove("white");
    }
  });
};

/* ====================================================
   Change App Type Items 
  ===================================================== */
const typeAppBtns = document.querySelectorAll(".type__app_btn");
const typesAppContent = document.querySelectorAll(".item__wrapper");
typeAppBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetEl = btn.getAttribute("data-target");
    hideAllTypesApp();
    document.getElementById(targetEl).classList.add("active");
    disableTypesAppButtons();
    btn.classList.add("active");
  });
});
function hideAllTypesApp() {
  typesAppContent.forEach((type) => {
    type.classList.remove("active");
  });
}
function disableTypesAppButtons() {
  typeAppBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
}

/* ====================================================
   AOS 
  ===================================================== */
// AOS.init();
document.addEventListener("lazybeforeunveil", function () {
  // AOS Refresh
  // AOS.init();
});

/* ====================================================
   Mega Menu Management
  ===================================================== */
const navItems = document.querySelectorAll(".nav__item");
const headerContainer = document.querySelector(".header__container");
const megaLinks = document.querySelectorAll(".mega__menu_bottom .left a");
const megaImag = document.querySelector(".mega__menu_bottom .right img");
navItems.forEach((nav) => {
  nav.addEventListener("mouseenter", () => {
    const targetMenu = nav.getAttribute("data-target");
    headerContainer.querySelector(`#${targetMenu}`).classList.add("show");
  });
  nav.addEventListener("mouseleave", () => {
    const targetMenu = nav.getAttribute("data-target");
    headerContainer.querySelector(`#${targetMenu}`).classList.remove("show");
  });
});
megaLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    const img = link.getAttribute("data-img");
    megaImag.src = img;
  });
  link.addEventListener("mouseleave", () => {
    megaImag.src = megaImag.getAttribute("data-default");
  });
});

/* ====================================================
   Changing The Cursor When Hovering Over The Service Items In The Mega Menu
  ===================================================== */
const servicesMegaLinks = document.querySelectorAll(".mega__link_service");
servicesMegaLinks.forEach((link) => {
  link.addEventListener("mousemove", (e) => {
    const bound = link.getBoundingClientRect();
    const mouseY = (e.clientY - bound.top).toFixed();
    const mouseX = (e.clientX - bound.left).toFixed();
    const cursorCustome = link.querySelector(".mega__menu_view");
    cursorCustome.classList.add("active");
    document.body.style.cursor = "none";
    cursorCustome.style.top = `${mouseY}px`;
    cursorCustome.style.left = `${mouseX}px`;
  });
  link.addEventListener("mouseout", () => {
    const courserCustome = link.querySelector(".mega__menu_view");
    courserCustome.classList.remove("active");
    document.body.style.cursor = "auto";
  });
});

/* ====================================================
   Managing The Toggle Of The Menu On Tablets And Mobiles
  ===================================================== */
// const btnOpenMenu = document.querySelector(".open__menu_mobile");
// const btnCloseMenu = document.querySelector(".close__menu_mobile");
// const mobileMenu = document.querySelector(".responsive__navbar");
// btnOpenMenu.addEventListener("click", () => {
//   mobileMenu.classList.add("show");
// });
// btnCloseMenu.addEventListener("click", () => {
//   mobileMenu.classList.remove("show");
// });

/* ====================================================
    Managing The Toggle Of The Products Submenu On Tablets And Mobiles 
  ===================================================== */
// const productsNavLink = document.querySelector(".nav__products");
// const btnCloseProductsSubMenu = document.querySelector(
//   ".close__products_submenu"
// );
// productsNavLink.addEventListener("click", () => {
//   const target = productsNavLink.getAttribute("data-target");
//   document.querySelector(`.${target}`).classList.add("show");
// });
// btnCloseProductsSubMenu.addEventListener("click", () => {
//   const target = productsNavLink.getAttribute("data-target");
//   document.querySelector(`.${target}`).classList.remove("show");
// });

/* ====================================================
   Managing The Toggle Of The Services Submenu On Tablets And Mobiles
  ===================================================== */
// const servicesNavLink = document.querySelector(".nav__services");
// const btnCloseServicesSubMenu = document.querySelector(
//   ".close__services_submenu"
// );
// servicesNavLink.addEventListener("click", () => {
//   const target = servicesNavLink.getAttribute("data-target");
//   document.querySelector(`.${target}`).classList.add("show");
// });
// btnCloseServicesSubMenu.addEventListener("click", () => {
//   const target = servicesNavLink.getAttribute("data-target");
//   document.querySelector(`.${target}`).classList.remove("show");
// });

// Clients wrapper cursor
// const preprojectsWrapper = document.querySelector(".splide__projects");
// preprojectsWrapper.addEventListener("mousemove", (e) => {
//   const bound = preprojectsWrapper.getBoundingClientRect();
//   const mouseY = (e.clientY - bound.top).toFixed();
//   const mouseX = (e.clientX - bound.left).toFixed();
//   const cursorCustome = preprojectsWrapper.querySelector(".splide__cursor");
//   cursorCustome.classList.add("active");
//   document.body.style.cursor = "none";
//   cursorCustome.style.top = `${mouseY}px`;
//   cursorCustome.style.left = `${mouseX}px`;
// });
// preprojectsWrapper.addEventListener("mouseout", () => {
//   const cursorCustome = preprojectsWrapper.querySelector(".splide__cursor");
//   cursorCustome.classList.remove("active");
//   document.body.style.cursor = "auto";
// });

/* ====================================================
   Search Box Management In Navbar
  ===================================================== */
// const searchBtn = document.querySelector(".open__search");
// const searchBox = document.querySelector(".search__box");
// const navItemsEffect = document.querySelectorAll(".nav__effect");
// const btnBars = document.querySelector(".btn__bars");
// const btnTimes = document.querySelector(".close__search");
// searchBtn.addEventListener("click", () => {
//   searchBox.classList.add("active");
//   if (searchBtn.getAttribute("data-search") === "true") {
//     searchItemHandler("true", searchBox.querySelector("input"));
//   }
//   searchBtn.setAttribute("data-search", "true");
//   btnBars.classList.add("active");
//   btnTimes.classList.add("active");
//   searchBtn.classList.add("active");
//   navItemsEffect.forEach((nav) => nav.classList.add("animate"));
// });
// btnBars.addEventListener("click", () => {
//   disableSearchBoxHandler();
// });
// btnTimes.addEventListener("click", () => {
//   disableSearchBoxHandler();
// });
// function disableSearchBoxHandler() {
//   btnBars.classList.remove("active");
//   btnTimes.classList.remove("active");
//   searchBox.classList.remove("active");
//   searchBtn.setAttribute("data-search", "false");
//   searchItemHandler("false");
//   searchBox.querySelector("input").value = "";
//   searchBtn.classList.remove("active");
//   navItemsEffect.forEach((nav) => nav.classList.remove("animate"));
// }

/* ====================================================
   Search Box Management In Mobile
  ===================================================== */
// const searchBoxMobile = document.querySelector(".search__box_mobile");
// const btnSearchMobile = document.querySelector(".btn__search_mobile");
// btnSearchMobile.addEventListener("click", () => {
//   searchItemHandler("true", searchBoxMobile.querySelector("input"));
// });

/* ====================================================
   Search Item Handler 
  ===================================================== */
const suggestionSearch = document.querySelector(".search__suggestion");
const suggestionSearchItems = document.querySelectorAll(".suggestion__item");
const sections = document.querySelectorAll("section");
function searchItemHandler(state, input) {
  if (state === "true") {
    let sectionClasses = [];
    const title = input.value;
    sections.forEach((section) => {
      if (
        section.textContent.toLowerCase().includes(title.toLowerCase()) &&
        !!title
      ) {
        sectionClasses.push(section.className);
        sections.forEach((section) => {
          section.style.display = "none";
        });
        if (sectionClasses.length > 0) {
          sectionClasses.forEach(
            (sec) => (document.querySelector(`.${sec}`).style.display = "block")
          );
          headerContainer.style.marginBottom = "90px";
          mobileMenu.classList.contains("show")
            ? mobileMenu.classList.remove("show")
            : null;
        }
      }
      if (title === "") {
        sections.forEach((section) => (section.style.display = "block"));
        headerContainer.style.marginBottom = "0";
      }
    });
  } else {
    sections.forEach((section) => (section.style.display = "block"));
    headerContainer.style.marginBottom = "0";
    suggestionSearch.classList.remove("show");
  }
}
window.onkeyup = (e) => {
  if (e.keyCode === 13)
    searchItemHandler("true", searchBox.querySelector("input"));
};
// **** input handler ****
function inputHandler(e) {
  if (e.value === "") {
    sections.forEach((section) => (section.style.display = "block"));
    headerContainer.style.marginBottom = "0";
    suggestionSearch.classList.remove("show");
  } else {
    suggestionSearch.classList.add("show");
    const inputValue = e.value;
    suggestionSearchItems.forEach((suggestion) => {
      if (
        suggestion
          .getAttribute("data-search")
          .toLowerCase()
          .includes(inputValue.toLowerCase())
      ) {
        suggestion.classList.add("show");
      } else {
        suggestion.classList.remove("show");
      }
    });
  }
}

/* ====================================================
   Managing Request Form
  ===================================================== */
const requestForm = document.querySelector(".request__form");
const selectTitle = document.getElementById("select__title");
const selectTitleMobile = document.getElementById("select__title_mobile");
const selectTitleService = document.getElementById("select__title_service");
const selectTitleDesign = document.getElementById("select__title_design");
const selectListMobile = document.querySelector(".select__options_mobile");
const selectListService = document.querySelector(".select__options_service");
const selectListDesign = document.querySelector(".select__options_design");
const modular = document.getElementById("modular");
const mobileCheck = document.getElementById("mobile__app_check");
const serviceCheck = document.getElementById("web__service_check");
const designCheck = document.getElementById("web__design_check");
const tabBtns = document.querySelectorAll(".btn__tab");
const requestForms = document.querySelectorAll(".form__wrapper");
const selectMobileTabs = document.querySelectorAll(".select__mobile_tab");
const selectProjectOne = document.getElementById("select_project_one");
const selectProjectTwo = document.getElementById("select_project_two");
const btnCloseForm = document.querySelector(".close__form");

(function () {
  if (requestForm.classList.contains("show")) {
    if (!selectProjectOne.checked) {
      selectProjectOne.parentElement.nextElementSibling.classList.add(
        "disabled"
      );
    }
    if (!selectProjectTwo.checked) {
      selectProjectTwo.parentElement.nextElementSibling.classList.add(
        "disabled"
      );
    }
  }
})();

let requestFormData = {
  product: "",
  message: "",
  name: "",
  brandName: "",
  activity: "",
  phoneNumber: "",
  landlinePhoneNumber: "",
  email: "",
  website: "",
  country: "",
  city: "",
};

const nextPageBtn = document.querySelector(".next_page");
function counterCharacters(event) {
  const counterElm = event.parentNode.querySelector(".counter__text");
  const valueLength = event.value.length;
  counterElm.innerHTML = `${valueLength}/1000`;
  requestFormData = { ...requestFormData, message: event.value };
  if (validateFormRequest(valueLength)) {
    nextPageBtn.classList.remove("disable");
  } else {
    nextPageBtn.classList.add("disable");
  }
}
function validateFormRequest(areaLength) {
  if (
    areaLength >= 1 &&
    areaLength <= 1000 &&
    !!requestFormData.product &&
    !!requestFormData.message
  )
    return true;
  return false;
}
btnCloseForm.addEventListener("click", () => {
  requestForm.classList.remove("show");
  document.body.style.overflowY = "auto";
});

const checks = document.querySelectorAll(".check_box");
checks.forEach((check) => {
  check.addEventListener("click", () => {
    const valueLength =
      document.querySelector(".textarea textarea").value.length;
    document.getElementById("select__modular").style.display = "none";
    requestFormData = { ...requestFormData, product: check.value };
    if (validateFormRequest(valueLength)) {
      nextPageBtn.classList.remove("disable");
    } else {
      nextPageBtn.classList.add("disable");
    }
  });
});

selectProjectOne.addEventListener("change", () => {
  if (selectProjectOne.checked) {
    selectProjectOne.parentElement.nextElementSibling.classList.remove(
      "disabled"
    );
    selectProjectTwo.style.opacity = "0.4";
    selectProjectOne.style.opacity = "1";
    selectProjectTwo.nextElementSibling.style.opacity = "0.4";
    selectProjectOne.nextElementSibling.style.opacity = "1";
    selectProjectTwo.parentElement.nextElementSibling.classList.add("disabled");
  }
});
selectProjectTwo.addEventListener("change", () => {
  if (selectProjectTwo.checked) {
    selectProjectTwo.parentElement.nextElementSibling.classList.remove(
      "disabled"
    );
    selectProjectOne.style.opacity = "0.4";
    selectProjectTwo.style.opacity = "1";
    selectProjectOne.nextElementSibling.style.opacity = "0.4";
    selectProjectTwo.nextElementSibling.style.opacity = "1";
    selectProjectOne.parentElement.nextElementSibling.classList.add("disabled");
  }
});

selectTitle.addEventListener("click", () => {
  selectTitle.parentNode
    .querySelector(".select__options")
    .classList.toggle("active");
});
selectTitleMobile.addEventListener("click", () => {
  selectListMobile.classList.toggle("active");
});
selectTitleService.addEventListener("click", () => {
  selectListService.classList.toggle("active");
});
selectTitleDesign.addEventListener("click", () => {
  selectListDesign.classList.toggle("active");
});

function selectHandler(event) {
  selectTitle.innerHTML = event.textContent;
  selectTitle.parentNode
    .querySelector(".select__options")
    .classList.toggle("active");
  requestFormData = { ...requestFormData, product: selectTitle.textContent };
}
function selectMobileProduct(event) {
  selectTitleMobile.innerHTML = event.textContent;
  selectListMobile.classList.toggle("active");
}
function selectServiceProduct(event) {
  selectTitleService.innerHTML = event.textContent;
  selectListService.classList.toggle("active");
}
function selectDesignProduct(event) {
  selectTitleDesign.innerHTML = event.textContent;
  selectListDesign.classList.toggle("active");
}
modular.addEventListener("click", () => {
  disableAllSelectService();
  if (modular.checked) {
    document.getElementById("select__modular").style.display = "block";
  } else {
    document.getElementById("select__modular").style.display = "none";
  }
});
mobileCheck.addEventListener("click", () => {
  disableAllSelectService();
  if (mobileCheck.checked) {
    document.getElementById("select__mobile").style.display = "block";
  } else {
    document.getElementById("select__mobile").style.display = "none";
  }
});
serviceCheck.addEventListener("click", () => {
  disableAllSelectService();
  if (serviceCheck.checked) {
    document.getElementById("select__service").style.display = "block";
  } else {
    document.getElementById("select__service").style.display = "none";
  }
});
designCheck.addEventListener("click", () => {
  disableAllSelectService();
  if (designCheck.checked) {
    document.getElementById("select__design").style.display = "block";
  } else {
    document.getElementById("select__design").style.display = "none";
  }
});
function disableAllSelectService() {
  document.getElementById("select__mobile").style.display = "none";
  document.getElementById("select__design").style.display = "none";
  document.getElementById("select__service").style.display = "none";
}
tabBtns.forEach((tab) => {
  tab.addEventListener("click", () => {
    const formTarget = tab.getAttribute("data-target");
    disableForms();
    document.getElementById(`${formTarget}`).classList.add("active");
    disableTabs();
    tab.classList.add("active");
  });
});
function disableForms() {
  requestForms.forEach((form) => form.classList.remove("active"));
}
function disableTabs() {
  tabBtns.forEach((tab) => tab.classList.remove("active"));
}
selectMobileTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tab.classList.toggle("selected");
  });
});
const pagesForm = document.querySelectorAll(".page__form");
function goToPage(page) {
  pagesForm.forEach((page) => page.classList.remove("active"));
  document.querySelector(`.page__${page}`).classList.add("active");
}

const inputElems = document.querySelectorAll(".input__el");
const nextPageTwoBtn = document.querySelector(
  ".page__2 .page__buttons .next_page"
);
inputElems.forEach((input) => {
  input.addEventListener("keyup", () => {
    requestFormData = { ...requestFormData, [input.name]: input.value };
    if (validateFormRequestInputs()) {
      nextPageTwoBtn.classList.remove("disable");
    }
  });
});
function selectBoxHandler(e) {
  requestFormData = { ...requestFormData, [e.name]: e.value };
  if (validateFormRequestInputs()) {
    nextPageTwoBtn.classList.remove("disable");
  }
}
function validateFormRequestInputs() {
  if (
    !!requestFormData.name &&
    !!requestFormData.brandName &&
    !!requestFormData.activity &&
    !!requestFormData.phoneNumber &&
    !!requestFormData.landlinePhoneNumber &&
    !!requestFormData.email &&
    !!requestFormData.website &&
    !!requestFormData.country &&
    !!requestFormData.city
  ) {
    return true;
  }
  return false;
}

// ===== form success =====
const formSuccess = document.querySelector(".request__success");
const btnCreateAccount = document.querySelector(".btn__create_account");
const closeSuccessForm = document.querySelector(".close__success_form");
btnCreateAccount.addEventListener("click", () => {
  formSuccess.classList.add("active");
});
closeSuccessForm.addEventListener("click", () => {
  formSuccess.classList.remove("active");
});

/* ====================================================
   Managing Contact Form
  ===================================================== */
const contactForm = document.querySelector(".contact__container");
const btnSubmitContact = document.querySelector(".submit__contact");
const contactFormSuccess = document.querySelector(".contact__success");
const btnCloseContactForm = document.querySelector(".close__contact_form");
btnSubmitContact.addEventListener("click", () => {
  contactFormSuccess.classList.add("show");
});
btnCloseContactForm.addEventListener("click", () => {
  contactForm.classList.remove("show");
  document.body.style.overflowY = "auto";
});

function openRequestFormHandler() {
  requestForm.classList.add("show");
  document.body.style.overflowY = "hidden";
}

/* ====================================================
   Managing The Display/non-display Of The Request Form
  ===================================================== */
const btnStartPorject = document.querySelector(".btn__start_project");
function requestFormToggleHandler() {
  requestForm.classList.add("show");
  document.body.style.overflowY = "hidden";
}
btnStartPorject.addEventListener("click", requestFormToggleHandler);

/* ====================================================
     Managing The Display/non-display Of The Contact Form
    ===================================================== */
const btnGetContact = document.querySelector(".btn__get_contact");
const contactContainer = document.querySelector(".contact__container");
btnGetContact.addEventListener("click", openContactFormHandler);
function openContactFormHandler() {
  contactContainer.classList.add("show");
}

/* ====================================================
   Manage The Button To Go To The Top Of The Page
  ===================================================== */
const gotoTopButton = document.querySelector(".goto__top_button");
gotoTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

/* ====================================================
   Responsive Image Description
  ===================================================== */
function descriptionImgResponsive() {
  const imgWrapper = document.querySelector(".image__wrapper");
  const imgElem = imgWrapper.querySelector("img");
  const imgHeight = imgElem.height;
  imgWrapper.querySelector(".container").style.height = `${imgHeight}px`;
}
descriptionImgResponsive();
window.onresize = () => {
  descriptionImgResponsive();
};

/* ====================================================
   Manage The Language Change
  ===================================================== */
const languageTitle = document.querySelectorAll(".language__title");
const languages = document.querySelectorAll(".languages__list span");
languageTitle.forEach((lang) => {
  lang.addEventListener("click", () => {
    lang.nextElementSibling.classList.toggle("show");
  });
});
languages.forEach((lang) => {
  lang.addEventListener("click", () => {
    lang.parentNode.parentNode.querySelector(".language__title").innerHTML =
      lang.innerHTML;
    lang.parentNode.classList.remove("show");
  });
});


var waves = new SineWaves({
  // Canvas Element
  el: document.getElementById('waves'),

  // General speed of entire wave system
  speed: 1,

  // How many degress should we rotate all of the waves
  rotate: 0,

  // Ease function from left to right
  ease: 'Linear',

  // Specific how much the width of the canvas the waves should be
  // This can either be a number or a percent
  

  // An array of wave options
  waves: [
    {
      timeModifier: 1,   // This is multiplied againse `speed`
      lineWidth: 3,      // Stroke width
      amplitude: 150,    // How tall is the wave
      wavelength: 200,   // How long is the wave
      segmentLength: 20, // How smooth should the line be
      strokeStyle: 'rgba(255, 255, 255, 0.5)', // Stroke color and opacity
      type: 'sine'       // Wave type
    },
    {
      timeModifier: 1,
      lineWidth: 2,
      amplitude: 110,
      wavelength: 100,
      strokeStyle: 'rgba(255, 255, 255, 0.3)'
    },
    {
      timeModifier: 1,   // This is multiplied againse `speed`
      lineWidth: 2,      // Stroke width
      amplitude: 110,    // How tall is the wave
      wavelength: 220,   // How long is the wave
      segmentLength: 20, // How smooth should the line be
      strokeStyle: 'rgba(255, 255, 255, 0.5)', // Stroke color and opacity
      type: 'sine'       // Wave type
    },
    {
      timeModifier: 1,
      lineWidth: 2,
      amplitude: 150,
      wavelength: 120,
      strokeStyle: 'rgba(255, 255, 255, 0.3)'
    },
    {
      timeModifier: 1,   // This is multiplied againse `speed`
      lineWidth: 3,      // Stroke width
      amplitude: 200,    // How tall is the wave
      wavelength: 100,   // How long is the wave
      segmentLength: 20, // How smooth should the line be
      strokeStyle: 'rgba(255, 255, 255, 0.5)', // Stroke color and opacity
      type: 'sine'       // Wave type
    },
    {
      timeModifier: 1,
      lineWidth: 3,
      amplitude: 110,
      wavelength: 80,
      strokeStyle: 'rgba(255, 255, 255, 0.3)'
    }
  ],

  // Perform any additional initializations here
  initialize: function (){},

  // This function is called whenver the window is resized
  resizeEvent: function() {

    // Here is an example on how to create a gradient stroke
    var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
    gradient.addColorStop(0,"rgba(0, 0, 0, 0)");
    gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.2)");
    gradient.addColorStop(1,"rgba(0, 0, 0, 0)");

    var index = -1;
    var length = this.waves.length;
      while(++index < length){
      this.waves[index].strokeStyle = gradient;
    }
  }
});