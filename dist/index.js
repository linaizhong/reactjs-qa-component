'use strict';

var React = require('react');

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return _regeneratorDefine(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = false,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function (t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = true, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), true), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
    return this;
  }), _regeneratorDefine(u, "toString", function () {
    return "[object Generator]";
  }), (_regenerator = function () {
    return {
      w: i,
      m: f
    };
  })();
}
function _regeneratorDefine(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  _regeneratorDefine = function (e, r, n, t) {
    function o(r, n) {
      _regeneratorDefine(e, r, function (e) {
        return this._invoke(r, n, e);
      });
    }
    r ? i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, _regeneratorDefine(e, r, n, t);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

/**
 * lucide-react v0.0.1 - ISC
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/**
 * lucide-react v0.0.1 - ISC
 */


const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const createLucideIcon = (iconName, iconNode) => {
  const Component = React.forwardRef(
    ({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, children, ...rest }, ref) => React.createElement(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: `lucide lucide-${toKebabCase(iconName)}`,
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => React.createElement(tag, attrs)),
        ...(Array.isArray(children) ? children : [children]) || []
      ]
    )
  );
  Component.displayName = `${iconName}`;
  return Component;
};
var createLucideIcon$1 = createLucideIcon;

/**
 * lucide-react v0.0.1 - ISC
 */


const Check = createLucideIcon$1("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const ChevronDown = createLucideIcon$1("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const ChevronUp = createLucideIcon$1("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const Code = createLucideIcon$1("Code", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const Eye = createLucideIcon$1("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const FileCode = createLucideIcon$1("FileCode", [
  [
    "path",
    {
      d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
      key: "1nnpy2"
    }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "m10 13-2 2 2 2", key: "17smn8" }],
  ["path", { d: "m14 17 2-2-2-2", key: "14mezr" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const FileText = createLucideIcon$1("FileText", [
  [
    "path",
    {
      d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
      key: "1nnpy2"
    }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["line", { x1: "16", x2: "8", y1: "13", y2: "13", key: "14keom" }],
  ["line", { x1: "16", x2: "8", y1: "17", y2: "17", key: "17nazh" }],
  ["line", { x1: "10", x2: "8", y1: "9", y2: "9", key: "1a5vjj" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const MessageCircle = createLucideIcon$1("MessageCircle", [
  ["path", { d: "m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z", key: "v2veuj" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const Mic = createLucideIcon$1("Mic", [
  [
    "path",
    {
      d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",
      key: "131961"
    }
  ],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const Music = createLucideIcon$1("Music", [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const Pause = createLucideIcon$1("Pause", [
  ["rect", { width: "4", height: "16", x: "6", y: "4", key: "iffhe4" }],
  ["rect", { width: "4", height: "16", x: "14", y: "4", key: "sjin7j" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const Play = createLucideIcon$1("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const Plus = createLucideIcon$1("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const Save = createLucideIcon$1("Save", [
  [
    "path",
    {
      d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
      key: "1owoqh"
    }
  ],
  ["polyline", { points: "17 21 17 13 7 13 7 21", key: "1md35c" }],
  ["polyline", { points: "7 3 7 8 15 8", key: "8nz8an" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const Square = createLucideIcon$1("Square", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }
  ]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const Trash2 = createLucideIcon$1("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const Upload = createLucideIcon$1("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const Video = createLucideIcon$1("Video", [
  ["path", { d: "m22 8-6 4 6 4V8Z", key: "50v9me" }],
  [
    "rect",
    {
      width: "14",
      height: "12",
      x: "2",
      y: "6",
      rx: "2",
      ry: "2",
      key: "1rqjg6"
    }
  ]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const X = createLucideIcon$1("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);

function MarkdownPlayer(_ref) {
  var content = _ref.content;
    _ref.mediaUrl;
  // Simple markdown renderer - you can replace with a library like react-markdown
  var renderMarkdown = function renderMarkdown(text) {
    if (!text) return '';
    var html = text;

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

    // Links
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    // Line breaks
    html = html.replace(/\n/gim, '<br />');
    return html;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "markdown-player-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "markdown-player-content",
    dangerouslySetInnerHTML: {
      __html: renderMarkdown(content)
    }
  }));
}

function MarkdownEditor(_ref) {
  var onSubmit = _ref.onSubmit,
    onCancel = _ref.onCancel,
    _ref$initialContent = _ref.initialContent,
    initialContent = _ref$initialContent === void 0 ? '' : _ref$initialContent;
  var _useState = React.useState(initialContent),
    _useState2 = _slicedToArray(_useState, 2),
    content = _useState2[0],
    setContent = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    previewMode = _useState4[0],
    setPreviewMode = _useState4[1];
  var handleSubmit = function handleSubmit() {
    if (!content.trim()) {
      alert('Please enter some markdown content');
      return;
    }
    if (onSubmit) {
      onSubmit(content);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "markdown-editor-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "markdown-editor-header"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "markdown-editor-title"
  }, "Markdown Editor"), /*#__PURE__*/React.createElement("div", {
    className: "markdown-editor-actions"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setPreviewMode(!previewMode);
    },
    className: "markdown-btn ".concat(previewMode ? 'markdown-btn-secondary' : 'markdown-btn-outline')
  }, previewMode ? /*#__PURE__*/React.createElement(Code, {
    size: 16
  }) : /*#__PURE__*/React.createElement(Eye, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, previewMode ? 'Edit' : 'Preview')))), /*#__PURE__*/React.createElement("div", {
    className: "markdown-editor-body"
  }, previewMode ? /*#__PURE__*/React.createElement("div", {
    className: "markdown-preview"
  }, /*#__PURE__*/React.createElement(MarkdownPlayer, {
    content: content
  })) : /*#__PURE__*/React.createElement("textarea", {
    value: content,
    onChange: function onChange(e) {
      return setContent(e.target.value);
    },
    placeholder: "Enter your markdown content here...",
    className: "markdown-textarea"
  })), /*#__PURE__*/React.createElement("div", {
    className: "markdown-editor-footer"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleSubmit,
    className: "markdown-btn markdown-btn-primary"
  }, /*#__PURE__*/React.createElement(Save, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, "Submit Markdown")), onCancel && /*#__PURE__*/React.createElement("button", {
    onClick: onCancel,
    className: "markdown-btn markdown-btn-secondary"
  }, /*#__PURE__*/React.createElement(X, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, "Cancel"))));
}

function AudioRecorder(_ref) {
  var onSubmit = _ref.onSubmit,
    onCancel = _ref.onCancel;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isRecording = _useState2[0],
    setIsRecording = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isPaused = _useState4[0],
    setIsPaused = _useState4[1];
  var _useState5 = React.useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    audioURL = _useState6[0],
    setAudioURL = _useState6[1];
  var _useState7 = React.useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    audioBlob = _useState8[0],
    setAudioBlob = _useState8[1];
  var _useState9 = React.useState(0),
    _useState0 = _slicedToArray(_useState9, 2),
    recordingTime = _useState0[0],
    setRecordingTime = _useState0[1];
  var mediaRecorderRef = React.useRef(null);
  var chunksRef = React.useRef([]);
  var timerRef = React.useRef(null);
  var audioRef = React.useRef(null);
  var startRecording = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var stream, mediaRecorder, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return navigator.mediaDevices.getUserMedia({
              audio: true
            });
          case 1:
            stream = _context.v;
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            chunksRef.current = [];
            mediaRecorder.ondataavailable = function (e) {
              if (e.data.size > 0) {
                chunksRef.current.push(e.data);
              }
            };
            mediaRecorder.onstop = function () {
              var blob = new Blob(chunksRef.current, {
                type: 'audio/webm'
              });
              var url = URL.createObjectURL(blob);
              setAudioURL(url);
              setAudioBlob(blob);
              stream.getTracks().forEach(function (track) {
                return track.stop();
              });
            };
            mediaRecorder.start();
            setIsRecording(true);
            setRecordingTime(0);
            timerRef.current = setInterval(function () {
              setRecordingTime(function (prev) {
                return prev + 1;
              });
            }, 1000);
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error('Error accessing microphone:', _t);
            alert('Could not access microphone. Please check permissions.');
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function startRecording() {
      return _ref2.apply(this, arguments);
    };
  }();
  var stopRecording = function stopRecording() {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
      clearInterval(timerRef.current);
    }
  };
  var pauseRecording = function pauseRecording() {
    if (mediaRecorderRef.current && isRecording) {
      if (isPaused) {
        mediaRecorderRef.current.resume();
        timerRef.current = setInterval(function () {
          setRecordingTime(function (prev) {
            return prev + 1;
          });
        }, 1000);
      } else {
        mediaRecorderRef.current.pause();
        clearInterval(timerRef.current);
      }
      setIsPaused(!isPaused);
    }
  };
  var handleSubmit = function handleSubmit() {
    if (!audioBlob) {
      alert('Please record audio first');
      return;
    }
    var audioFile = new File([audioBlob], "audio-".concat(Date.now(), ".webm"), {
      type: 'audio/webm'
    });
    if (onSubmit) {
      onSubmit(audioFile);
    }
  };
  var formatTime = function formatTime(seconds) {
    var mins = Math.floor(seconds / 60);
    var secs = seconds % 60;
    return "".concat(mins.toString().padStart(2, '0'), ":").concat(secs.toString().padStart(2, '0'));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "audio-recorder-container"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "audio-recorder-title"
  }, "Audio Recorder"), /*#__PURE__*/React.createElement("div", {
    className: "audio-recorder-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "audio-recorder-controls"
  }, !isRecording && !audioURL && /*#__PURE__*/React.createElement("button", {
    onClick: startRecording,
    className: "audio-btn audio-btn-danger audio-btn-lg"
  }, /*#__PURE__*/React.createElement(Mic, {
    size: 24
  }), /*#__PURE__*/React.createElement("span", null, "Start Recording")), isRecording && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "audio-recording-indicator"
  }, /*#__PURE__*/React.createElement("div", {
    className: "audio-pulse"
  }), /*#__PURE__*/React.createElement("span", null, "Recording: ", formatTime(recordingTime))), /*#__PURE__*/React.createElement("div", {
    className: "audio-button-group"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: pauseRecording,
    className: "audio-btn audio-btn-warning"
  }, isPaused ? /*#__PURE__*/React.createElement(Play, {
    size: 20
  }) : /*#__PURE__*/React.createElement(Pause, {
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, isPaused ? 'Resume' : 'Pause')), /*#__PURE__*/React.createElement("button", {
    onClick: stopRecording,
    className: "audio-btn audio-btn-danger"
  }, /*#__PURE__*/React.createElement(Square, {
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, "Stop")))), audioURL && !isRecording && /*#__PURE__*/React.createElement("div", {
    className: "audio-preview"
  }, /*#__PURE__*/React.createElement("audio", {
    ref: audioRef,
    controls: true,
    src: audioURL,
    className: "audio-player"
  }), /*#__PURE__*/React.createElement("div", {
    className: "audio-button-group"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleSubmit,
    className: "audio-btn audio-btn-success"
  }, /*#__PURE__*/React.createElement(Upload, {
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, "Submit Audio")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setAudioURL(null);
      setAudioBlob(null);
      setRecordingTime(0);
    },
    className: "audio-btn audio-btn-secondary"
  }, "Record Again"))))), onCancel && /*#__PURE__*/React.createElement("div", {
    className: "audio-recorder-footer"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onCancel,
    className: "audio-btn audio-btn-secondary"
  }, /*#__PURE__*/React.createElement(X, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, "Cancel"))));
}

function VideoRecorder(_ref) {
  var onSubmit = _ref.onSubmit,
    onCancel = _ref.onCancel;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isRecording = _useState2[0],
    setIsRecording = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isPaused = _useState4[0],
    setIsPaused = _useState4[1];
  var _useState5 = React.useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    videoURL = _useState6[0],
    setVideoURL = _useState6[1];
  var _useState7 = React.useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    videoBlob = _useState8[0],
    setVideoBlob = _useState8[1];
  var _useState9 = React.useState(0),
    _useState0 = _slicedToArray(_useState9, 2),
    recordingTime = _useState0[0],
    setRecordingTime = _useState0[1];
  var _useState1 = React.useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    isCameraReady = _useState10[0],
    setIsCameraReady = _useState10[1];
  var mediaRecorderRef = React.useRef(null);
  var chunksRef = React.useRef([]);
  var timerRef = React.useRef(null);
  var videoRef = React.useRef(null);
  var streamRef = React.useRef(null);
  var startCamera = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var stream, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return navigator.mediaDevices.getUserMedia({
              video: true,
              audio: true
            });
          case 1:
            stream = _context.v;
            streamRef.current = stream;
            if (videoRef.current) {
              videoRef.current.srcObject = stream;
              setIsCameraReady(true);
            }
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error('Error accessing camera:', _t);
            alert('Could not access camera/microphone. Please check permissions.');
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function startCamera() {
      return _ref2.apply(this, arguments);
    };
  }();
  var stopCamera = function stopCamera() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(function (track) {
        return track.stop();
      });
      streamRef.current = null;
      setIsCameraReady(false);
    }
  };
  var startRecording = function startRecording() {
    if (!streamRef.current) return;
    var mediaRecorder = new MediaRecorder(streamRef.current);
    mediaRecorderRef.current = mediaRecorder;
    chunksRef.current = [];
    mediaRecorder.ondataavailable = function (e) {
      if (e.data.size > 0) {
        chunksRef.current.push(e.data);
      }
    };
    mediaRecorder.onstop = function () {
      var blob = new Blob(chunksRef.current, {
        type: 'video/webm'
      });
      var url = URL.createObjectURL(blob);
      setVideoURL(url);
      setVideoBlob(blob);
      stopCamera();
    };
    mediaRecorder.start();
    setIsRecording(true);
    setRecordingTime(0);
    timerRef.current = setInterval(function () {
      setRecordingTime(function (prev) {
        return prev + 1;
      });
    }, 1000);
  };
  var stopRecording = function stopRecording() {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
      clearInterval(timerRef.current);
    }
  };
  var pauseRecording = function pauseRecording() {
    if (mediaRecorderRef.current && isRecording) {
      if (isPaused) {
        mediaRecorderRef.current.resume();
        timerRef.current = setInterval(function () {
          setRecordingTime(function (prev) {
            return prev + 1;
          });
        }, 1000);
      } else {
        mediaRecorderRef.current.pause();
        clearInterval(timerRef.current);
      }
      setIsPaused(!isPaused);
    }
  };
  var handleSubmit = function handleSubmit() {
    if (!videoBlob) {
      alert('Please record video first');
      return;
    }
    var videoFile = new File([videoBlob], "video-".concat(Date.now(), ".webm"), {
      type: 'video/webm'
    });
    if (onSubmit) {
      onSubmit(videoFile);
    }
  };
  var formatTime = function formatTime(seconds) {
    var mins = Math.floor(seconds / 60);
    var secs = seconds % 60;
    return "".concat(mins.toString().padStart(2, '0'), ":").concat(secs.toString().padStart(2, '0'));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "video-recorder-container"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "video-recorder-title"
  }, "Video Recorder"), /*#__PURE__*/React.createElement("div", {
    className: "video-recorder-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-preview-area"
  }, !videoURL ? /*#__PURE__*/React.createElement("video", {
    ref: videoRef,
    autoPlay: true,
    muted: true,
    playsInline: true,
    className: "video-preview"
  }) : /*#__PURE__*/React.createElement("video", {
    controls: true,
    src: videoURL,
    className: "video-preview"
  })), /*#__PURE__*/React.createElement("div", {
    className: "video-recorder-controls"
  }, !isCameraReady && !videoURL && /*#__PURE__*/React.createElement("button", {
    onClick: startCamera,
    className: "video-btn video-btn-primary video-btn-lg"
  }, /*#__PURE__*/React.createElement(Video, {
    size: 24
  }), /*#__PURE__*/React.createElement("span", null, "Start Camera")), isCameraReady && !isRecording && !videoURL && /*#__PURE__*/React.createElement("button", {
    onClick: startRecording,
    className: "video-btn video-btn-danger video-btn-lg"
  }, /*#__PURE__*/React.createElement(Video, {
    size: 24
  }), /*#__PURE__*/React.createElement("span", null, "Start Recording")), isRecording && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "video-recording-indicator"
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-pulse"
  }), /*#__PURE__*/React.createElement("span", null, "Recording: ", formatTime(recordingTime))), /*#__PURE__*/React.createElement("div", {
    className: "video-button-group"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: pauseRecording,
    className: "video-btn video-btn-warning"
  }, isPaused ? /*#__PURE__*/React.createElement(Play, {
    size: 20
  }) : /*#__PURE__*/React.createElement(Pause, {
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, isPaused ? 'Resume' : 'Pause')), /*#__PURE__*/React.createElement("button", {
    onClick: stopRecording,
    className: "video-btn video-btn-danger"
  }, /*#__PURE__*/React.createElement(Square, {
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, "Stop")))), videoURL && /*#__PURE__*/React.createElement("div", {
    className: "video-button-group"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleSubmit,
    className: "video-btn video-btn-success"
  }, /*#__PURE__*/React.createElement(Upload, {
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, "Submit Video")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setVideoURL(null);
      setVideoBlob(null);
      setRecordingTime(0);
      startCamera();
    },
    className: "video-btn video-btn-secondary"
  }, "Record Again")))), onCancel && /*#__PURE__*/React.createElement("div", {
    className: "video-recorder-footer"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      stopCamera();
      onCancel();
    },
    className: "video-btn video-btn-secondary"
  }, /*#__PURE__*/React.createElement(X, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, "Cancel"))));
}

var MEDIA_TYPES = {
  TEXT: 'TEXT',
  MARKDOWN: 'MARKDOWN',
  AUDIO: 'AUDIO',
  VIDEO: 'VIDEO'
};

function MultimediaEditor(_ref) {
  var onSubmit = _ref.onSubmit,
    onCancel = _ref.onCancel,
    _ref$initialType = _ref.initialType,
    initialType = _ref$initialType === void 0 ? 'TEXT' : _ref$initialType;
  var _useState = React.useState(initialType),
    _useState2 = _slicedToArray(_useState, 2),
    selectedType = _useState2[0],
    setSelectedType = _useState2[1];
  var _useState3 = React.useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    textContent = _useState4[0],
    setTextContent = _useState4[1];
  var _useState5 = React.useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showEditor = _useState6[0],
    setShowEditor = _useState6[1];
  var handleTextSubmit = function handleTextSubmit() {
    if (!textContent.trim()) {
      alert('Please enter some text');
      return;
    }
    if (onSubmit) {
      onSubmit({
        type: MEDIA_TYPES.TEXT,
        content: textContent
      });
    }
  };
  var handleMarkdownSubmit = function handleMarkdownSubmit(content) {
    if (onSubmit) {
      onSubmit({
        type: MEDIA_TYPES.MARKDOWN,
        content: content
      });
    }
    setShowEditor(false);
  };
  var handleAudioSubmit = function handleAudioSubmit(audioFile) {
    if (onSubmit) {
      onSubmit({
        type: MEDIA_TYPES.AUDIO,
        file: audioFile
      });
    }
    setShowEditor(false);
  };
  var handleVideoSubmit = function handleVideoSubmit(videoFile) {
    if (onSubmit) {
      onSubmit({
        type: MEDIA_TYPES.VIDEO,
        file: videoFile
      });
    }
    setShowEditor(false);
  };
  var renderEditor = function renderEditor() {
    switch (selectedType) {
      case MEDIA_TYPES.TEXT:
        return /*#__PURE__*/React.createElement("div", {
          className: "multimedia-editor-section"
        }, /*#__PURE__*/React.createElement("label", {
          className: "multimedia-label"
        }, "Enter your text:"), /*#__PURE__*/React.createElement("textarea", {
          value: textContent,
          onChange: function onChange(e) {
            return setTextContent(e.target.value);
          },
          placeholder: "Type your text here...",
          className: "multimedia-textarea"
        }), /*#__PURE__*/React.createElement("div", {
          className: "multimedia-button-group"
        }, /*#__PURE__*/React.createElement("button", {
          onClick: handleTextSubmit,
          className: "multimedia-btn multimedia-btn-primary"
        }, "Submit Text"), onCancel && /*#__PURE__*/React.createElement("button", {
          onClick: onCancel,
          className: "multimedia-btn multimedia-btn-secondary"
        }, "Cancel")));
      case MEDIA_TYPES.MARKDOWN:
        return showEditor ? /*#__PURE__*/React.createElement(MarkdownEditor, {
          onSubmit: handleMarkdownSubmit,
          onCancel: function onCancel() {
            return setShowEditor(false);
          }
        }) : /*#__PURE__*/React.createElement("div", {
          className: "multimedia-editor-section"
        }, /*#__PURE__*/React.createElement("p", {
          className: "multimedia-hint"
        }, "Click the button below to open the Markdown editor."), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            return setShowEditor(true);
          },
          className: "multimedia-btn multimedia-btn-primary"
        }, "Open Markdown Editor"), onCancel && /*#__PURE__*/React.createElement("button", {
          onClick: onCancel,
          className: "multimedia-btn multimedia-btn-secondary"
        }, "Cancel"));
      case MEDIA_TYPES.AUDIO:
        return showEditor ? /*#__PURE__*/React.createElement(AudioRecorder, {
          onSubmit: handleAudioSubmit,
          onCancel: function onCancel() {
            return setShowEditor(false);
          }
        }) : /*#__PURE__*/React.createElement("div", {
          className: "multimedia-editor-section"
        }, /*#__PURE__*/React.createElement("p", {
          className: "multimedia-hint"
        }, "Click the button below to open the Audio recorder."), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            return setShowEditor(true);
          },
          className: "multimedia-btn multimedia-btn-danger"
        }, "Open Audio Recorder"), onCancel && /*#__PURE__*/React.createElement("button", {
          onClick: onCancel,
          className: "multimedia-btn multimedia-btn-secondary"
        }, "Cancel"));
      case MEDIA_TYPES.VIDEO:
        return showEditor ? /*#__PURE__*/React.createElement(VideoRecorder, {
          onSubmit: handleVideoSubmit,
          onCancel: function onCancel() {
            return setShowEditor(false);
          }
        }) : /*#__PURE__*/React.createElement("div", {
          className: "multimedia-editor-section"
        }, /*#__PURE__*/React.createElement("p", {
          className: "multimedia-hint"
        }, "Click the button below to open the Video recorder."), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            return setShowEditor(true);
          },
          className: "multimedia-btn multimedia-btn-purple"
        }, "Open Video Recorder"), onCancel && /*#__PURE__*/React.createElement("button", {
          onClick: onCancel,
          className: "multimedia-btn multimedia-btn-secondary"
        }, "Cancel"));
      default:
        return null;
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "multimedia-editor-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "multimedia-editor-header"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "multimedia-editor-title"
  }, "Select Content Type"), /*#__PURE__*/React.createElement("div", {
    className: "multimedia-type-buttons"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setSelectedType(MEDIA_TYPES.TEXT);
      setShowEditor(false);
    },
    className: "multimedia-type-btn ".concat(selectedType === MEDIA_TYPES.TEXT ? 'active' : ''),
    title: "Text"
  }, /*#__PURE__*/React.createElement(FileText, {
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setSelectedType(MEDIA_TYPES.MARKDOWN);
      setShowEditor(false);
    },
    className: "multimedia-type-btn ".concat(selectedType === MEDIA_TYPES.MARKDOWN ? 'active' : ''),
    title: "Markdown"
  }, /*#__PURE__*/React.createElement(FileCode, {
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setSelectedType(MEDIA_TYPES.AUDIO);
      setShowEditor(false);
    },
    className: "multimedia-type-btn ".concat(selectedType === MEDIA_TYPES.AUDIO ? 'active' : ''),
    title: "Audio"
  }, /*#__PURE__*/React.createElement(Mic, {
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setSelectedType(MEDIA_TYPES.VIDEO);
      setShowEditor(false);
    },
    className: "multimedia-type-btn ".concat(selectedType === MEDIA_TYPES.VIDEO ? 'active' : ''),
    title: "Video"
  }, /*#__PURE__*/React.createElement(Video, {
    size: 20
  })))), /*#__PURE__*/React.createElement("div", {
    className: "multimedia-editor-body"
  }, renderEditor()));
}

function QAEditor(_ref) {
  var onSave = _ref.onSave,
    onCancel = _ref.onCancel,
    _ref$initialData = _ref.initialData,
    initialData = _ref$initialData === void 0 ? null : _ref$initialData;
  var _useState = React.useState((initialData === null || initialData === void 0 ? void 0 : initialData.question) || {
      type: MEDIA_TYPES.TEXT,
      content: '',
      file: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    question = _useState2[0],
    setQuestion = _useState2[1];
  var _useState3 = React.useState((initialData === null || initialData === void 0 ? void 0 : initialData.answers) || [{
      id: 1,
      type: MEDIA_TYPES.TEXT,
      content: '',
      file: null,
      isCorrect: false
    }]),
    _useState4 = _slicedToArray(_useState3, 2),
    answers = _useState4[0],
    setAnswers = _useState4[1];
  var _useState5 = React.useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    currentEditingQuestion = _useState6[0],
    setCurrentEditingQuestion = _useState6[1];
  var _useState7 = React.useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    currentEditingAnswer = _useState8[0],
    setCurrentEditingAnswer = _useState8[1];
  var _useState9 = React.useState(2),
    _useState0 = _slicedToArray(_useState9, 2),
    nextAnswerId = _useState0[0],
    setNextAnswerId = _useState0[1];

  // Handle question submission from MultimediaEditor
  var handleQuestionSubmit = function handleQuestionSubmit(data) {
    setQuestion({
      type: data.type,
      content: data.content || '',
      file: data.file || null
    });
    setCurrentEditingQuestion(false);
  };

  // Handle answer submission from MultimediaEditor
  var handleAnswerSubmit = function handleAnswerSubmit(answerId, data) {
    setAnswers(function (prevAnswers) {
      return prevAnswers.map(function (answer) {
        return answer.id === answerId ? _objectSpread2(_objectSpread2({}, answer), {}, {
          type: data.type,
          content: data.content || '',
          file: data.file || null
        }) : answer;
      });
    });
    setCurrentEditingAnswer(null);
  };

  // Add new answer
  var handleAddAnswer = function handleAddAnswer() {
    var newAnswer = {
      id: nextAnswerId,
      type: MEDIA_TYPES.TEXT,
      content: '',
      file: null,
      isCorrect: false
    };
    setAnswers([].concat(_toConsumableArray(answers), [newAnswer]));
    setNextAnswerId(nextAnswerId + 1);
  };

  // Remove answer
  var handleRemoveAnswer = function handleRemoveAnswer(answerId) {
    if (answers.length <= 1) {
      alert('At least one answer is required');
      return;
    }
    setAnswers(answers.filter(function (answer) {
      return answer.id !== answerId;
    }));
  };

  // Toggle correct answer
  var handleToggleCorrect = function handleToggleCorrect(answerId) {
    setAnswers(function (prevAnswers) {
      return prevAnswers.map(function (answer) {
        return answer.id === answerId ? _objectSpread2(_objectSpread2({}, answer), {}, {
          isCorrect: !answer.isCorrect
        }) : answer;
      });
    });
  };

  // Validate and save QA
  var handleSaveQA = function handleSaveQA() {
    // Validate question
    if (!question.content && !question.file) {
      alert('Please add question content');
      return;
    }

    // Validate answers
    var emptyAnswers = answers.filter(function (answer) {
      return !answer.content && !answer.file;
    });
    if (emptyAnswers.length > 0) {
      alert('All answers must have content');
      return;
    }

    // Check if at least one answer is marked as correct
    var hasCorrectAnswer = answers.some(function (answer) {
      return answer.isCorrect;
    });
    if (!hasCorrectAnswer) {
      var confirmSave = window.confirm('No answer is marked as correct. Do you want to save anyway?');
      if (!confirmSave) {
        return;
      }
    }

    // Prepare data for parent
    var qaData = {
      question: {
        type: question.type,
        content: question.content,
        file: question.file
      },
      answers: answers.map(function (answer) {
        return {
          id: answer.id,
          type: answer.type,
          content: answer.content,
          file: answer.file,
          isCorrect: answer.isCorrect || false
        };
      })
    };
    if (onSave) {
      onSave(qaData);
    }
  };

  // Get display preview for media
  var getMediaPreview = function getMediaPreview(media) {
    if (media.file) {
      return "File: ".concat(media.file.name);
    }
    if (media.content) {
      return media.content.length > 100 ? "".concat(media.content.substring(0, 100), "...") : media.content;
    }
    return 'No content';
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "qa-editor-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qa-editor-header"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "qa-editor-title"
  }, "Question & Answer Editor"), /*#__PURE__*/React.createElement("div", {
    className: "qa-editor-actions"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleSaveQA,
    className: "qa-btn qa-btn-primary"
  }, /*#__PURE__*/React.createElement(Save, {
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, "Save Q&A")), onCancel && /*#__PURE__*/React.createElement("button", {
    onClick: onCancel,
    className: "qa-btn qa-btn-secondary"
  }, /*#__PURE__*/React.createElement(X, {
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, "Cancel")))), /*#__PURE__*/React.createElement("div", {
    className: "qa-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qa-section-header"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "qa-section-title"
  }, "Question"), /*#__PURE__*/React.createElement("span", {
    className: "qa-badge qa-badge-blue"
  }, question.type)), currentEditingQuestion ? /*#__PURE__*/React.createElement("div", {
    className: "qa-editor-box"
  }, /*#__PURE__*/React.createElement(MultimediaEditor, {
    onSubmit: handleQuestionSubmit,
    onCancel: function onCancel() {
      return setCurrentEditingQuestion(false);
    },
    initialType: question.type
  })) : /*#__PURE__*/React.createElement("div", {
    className: "qa-preview-box"
  }, question.content || question.file ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "qa-preview-content"
  }, getMediaPreview(question)), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setCurrentEditingQuestion(true);
    },
    className: "qa-btn qa-btn-outline"
  }, "Edit Question")) : /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setCurrentEditingQuestion(true);
    },
    className: "qa-btn qa-btn-primary"
  }, "Add Question"))), /*#__PURE__*/React.createElement("div", {
    className: "qa-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qa-section-header"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "qa-section-title"
  }, "Answers (", answers.length, ")"), /*#__PURE__*/React.createElement("button", {
    onClick: handleAddAnswer,
    className: "qa-btn qa-btn-success qa-btn-sm"
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, "Add Answer"))), /*#__PURE__*/React.createElement("div", {
    className: "qa-answers-list"
  }, answers.map(function (answer, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: answer.id,
      className: "qa-answer-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "qa-answer-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "qa-answer-label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "qa-answer-number"
    }, "Answer ", index + 1), /*#__PURE__*/React.createElement("span", {
      className: "qa-badge qa-badge-purple"
    }, answer.type), answer.isCorrect && /*#__PURE__*/React.createElement("span", {
      className: "qa-badge qa-badge-success",
      style: {
        backgroundColor: '#10b981',
        color: 'white',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px'
      }
    }, /*#__PURE__*/React.createElement(Check, {
      size: 14
    }), " Correct")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
        color: answer.isCorrect ? '#10b981' : '#6b7280'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: answer.isCorrect || false,
      onChange: function onChange() {
        return handleToggleCorrect(answer.id);
      },
      style: {
        width: '18px',
        height: '18px',
        cursor: 'pointer',
        accentColor: '#10b981'
      }
    }), /*#__PURE__*/React.createElement("span", null, "Correct Answer")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return handleRemoveAnswer(answer.id);
      },
      className: "qa-btn qa-btn-danger qa-btn-icon",
      disabled: answers.length === 1,
      title: "Remove answer"
    }, /*#__PURE__*/React.createElement(Trash2, {
      size: 16
    })))), currentEditingAnswer === answer.id ? /*#__PURE__*/React.createElement("div", {
      className: "qa-editor-box"
    }, /*#__PURE__*/React.createElement(MultimediaEditor, {
      onSubmit: function onSubmit(data) {
        return handleAnswerSubmit(answer.id, data);
      },
      onCancel: function onCancel() {
        return setCurrentEditingAnswer(null);
      },
      initialType: answer.type
    })) : /*#__PURE__*/React.createElement("div", {
      className: "qa-preview-box"
    }, answer.content || answer.file ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "qa-preview-content"
    }, getMediaPreview(answer)), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setCurrentEditingAnswer(answer.id);
      },
      className: "qa-btn qa-btn-outline qa-btn-sm"
    }, "Edit Answer")) : /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setCurrentEditingAnswer(answer.id);
      },
      className: "qa-btn qa-btn-primary qa-btn-sm"
    }, "Add Answer Content")));
  }))));
}

function AudioPlayer(_ref) {
  var src = _ref.src,
    title = _ref.title;
  if (!src) {
    return /*#__PURE__*/React.createElement("div", {
      className: "audio-player-error"
    }, /*#__PURE__*/React.createElement("p", null, "No audio source available"));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "audio-player-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "audio-player-header"
  }, /*#__PURE__*/React.createElement(Music, {
    size: 20
  }), title && /*#__PURE__*/React.createElement("span", {
    className: "audio-player-title"
  }, title)), /*#__PURE__*/React.createElement("audio", {
    controls: true,
    src: src,
    className: "audio-player-element"
  }));
}

function VideoPlayer(_ref) {
  var src = _ref.src;
    _ref.type;
  if (!src) {
    return /*#__PURE__*/React.createElement("div", {
      className: "video-player-error"
    }, /*#__PURE__*/React.createElement("p", null, "No video source available"));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "video-player-container"
  }, /*#__PURE__*/React.createElement("video", {
    controls: true,
    className: "video-player-element"
  }, /*#__PURE__*/React.createElement("source", {
    src: src,
    type: "video/webm"
  }), /*#__PURE__*/React.createElement("source", {
    src: src,
    type: "video/mp4"
  }), "Your browser does not support the video tag."));
}

function MultimediaPlayer(_ref) {
  var mediaType = _ref.mediaType,
    content = _ref.content,
    mediaUrl = _ref.mediaUrl,
    file = _ref.file;
  var renderPlayer = function renderPlayer() {
    switch (mediaType) {
      case MEDIA_TYPES.TEXT:
        return /*#__PURE__*/React.createElement("div", {
          className: "multimedia-player-text"
        }, /*#__PURE__*/React.createElement("div", {
          className: "multimedia-player-text-content"
        }, content));
      case MEDIA_TYPES.MARKDOWN:
        return /*#__PURE__*/React.createElement(MarkdownPlayer, {
          content: content,
          mediaUrl: mediaUrl
        });
      case MEDIA_TYPES.AUDIO:
        return /*#__PURE__*/React.createElement(AudioPlayer, {
          src: mediaUrl || (file ? URL.createObjectURL(file) : null)
        });
      case MEDIA_TYPES.VIDEO:
        return /*#__PURE__*/React.createElement(VideoPlayer, {
          src: mediaUrl || (file ? URL.createObjectURL(file) : null),
          type: "video"
        });
      default:
        return /*#__PURE__*/React.createElement("div", {
          className: "multimedia-player-error"
        }, /*#__PURE__*/React.createElement("p", null, "Unknown media type: ", mediaType));
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "multimedia-player-container"
  }, renderPlayer());
}

function QAPlayer(_ref) {
  var qaData = _ref.qaData,
    _ref$showAnswersIniti = _ref.showAnswersInitially,
    showAnswersInitially = _ref$showAnswersIniti === void 0 ? false : _ref$showAnswersIniti,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? null : _ref$title;
  var _useState = React.useState(showAnswersInitially),
    _useState2 = _slicedToArray(_useState, 2),
    showAnswers = _useState2[0],
    setShowAnswers = _useState2[1];
  if (!qaData || !qaData.question) {
    return /*#__PURE__*/React.createElement("div", {
      className: "qa-player-error"
    }, /*#__PURE__*/React.createElement("p", null, "No Q&A data available"));
  }
  var question = qaData.question,
    _qaData$answers = qaData.answers,
    answers = _qaData$answers === void 0 ? [] : _qaData$answers;
  return /*#__PURE__*/React.createElement("div", {
    className: "qa-player-container"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "qa-player-title-bar"
  }, /*#__PURE__*/React.createElement(MessageCircle, {
    size: 24
  }), /*#__PURE__*/React.createElement("h2", {
    className: "qa-player-main-title"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "qa-player-question"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qa-player-section-header"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "qa-player-section-title"
  }, "Question"), /*#__PURE__*/React.createElement("span", {
    className: "qa-player-badge qa-player-badge-blue"
  }, question.type)), /*#__PURE__*/React.createElement("div", {
    className: "qa-player-content"
  }, /*#__PURE__*/React.createElement(MultimediaPlayer, {
    mediaType: question.type,
    content: question.content,
    mediaUrl: question.mediaUrl,
    file: question.file
  }))), answers && answers.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "qa-player-answers"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowAnswers(!showAnswers);
    },
    className: "qa-player-toggle-btn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qa-player-toggle-content"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "qa-player-section-title"
  }, "Answers (", answers.length, ")"), showAnswers ? /*#__PURE__*/React.createElement(ChevronUp, {
    size: 20
  }) : /*#__PURE__*/React.createElement(ChevronDown, {
    size: 20
  }))), showAnswers && /*#__PURE__*/React.createElement("div", {
    className: "qa-player-answers-list"
  }, answers.map(function (answer, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: answer.id || index,
      className: "qa-player-answer-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "qa-player-answer-header"
    }, /*#__PURE__*/React.createElement("span", {
      className: "qa-player-answer-number"
    }, "Answer ", index + 1), /*#__PURE__*/React.createElement("span", {
      className: "qa-player-badge qa-player-badge-purple"
    }, answer.type)), /*#__PURE__*/React.createElement("div", {
      className: "qa-player-content"
    }, /*#__PURE__*/React.createElement(MultimediaPlayer, {
      mediaType: answer.type,
      content: answer.content,
      mediaUrl: answer.mediaUrl,
      file: answer.file
    })));
  }))));
}

exports.MEDIA_TYPES = MEDIA_TYPES;
exports.QAEditor = QAEditor;
exports.QAPlayer = QAPlayer;
//# sourceMappingURL=index.js.map
