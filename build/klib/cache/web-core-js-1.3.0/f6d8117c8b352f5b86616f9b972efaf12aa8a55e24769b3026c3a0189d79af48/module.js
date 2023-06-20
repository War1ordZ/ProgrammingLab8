(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './web-internal-web-core-runtime.js', './androidx-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./web-internal-web-core-runtime.js'), require('./androidx-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'web-web-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'web-web-core'.");
    }
    if (typeof this['web-internal-web-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'web-web-core'. Its dependency 'web-internal-web-core-runtime' was not found. Please, check whether 'web-internal-web-core-runtime' is loaded prior to 'web-web-core'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'web-web-core'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'web-web-core'.");
    }
    root['web-web-core'] = factory(typeof this['web-web-core'] === 'undefined' ? {} : this['web-web-core'], this['kotlin-kotlin-stdlib-js-ir'], this['web-internal-web-core-runtime'], this['androidx-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_web_internal_web_core_runtime, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$_$.v9;
  var Annotation = kotlin_kotlin.$_$.i9;
  var classMeta = kotlin_kotlin.$_$.i7;
  var setMetadataFor = kotlin_kotlin.$_$.i8;
  var Unit_getInstance = kotlin_kotlin.$_$.c3;
  var objectMeta = kotlin_kotlin.$_$.h8;
  var asList = kotlin_kotlin.$_$.e4;
  var interfaceMeta = kotlin_kotlin.$_$.r7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var addAll = kotlin_kotlin.$_$.b4;
  var to = kotlin_kotlin.$_$.ma;
  var Pair = kotlin_kotlin.$_$.t9;
  var THROW_ISE = kotlin_kotlin.$_$.w9;
  var Enum = kotlin_kotlin.$_$.m9;
  var NamedEventListener = kotlin_org_jetbrains_compose_web_internal_web_core_runtime.$_$.d;
  var charSequenceLength = kotlin_kotlin.$_$.h7;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.y;
  var ensureNotNull = kotlin_kotlin.$_$.da;
  var toString = kotlin_kotlin.$_$.k8;
  var isInterface = kotlin_kotlin.$_$.a8;
  var getStringHashCode = kotlin_kotlin.$_$.o7;
  var hashCode = kotlin_kotlin.$_$.p7;
  var equals = kotlin_kotlin.$_$.k7;
  var Collection = kotlin_kotlin.$_$.k3;
  var toMutableList = kotlin_kotlin.$_$.d6;
  var toList = kotlin_kotlin.$_$.z5;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var listOf = kotlin_kotlin.$_$.i5;
  var listOf_0 = kotlin_kotlin.$_$.h5;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var isObject = kotlin_kotlin.$_$.c8;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var _SkippableUpdater___get_composer__impl__6t7yne = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var DomNodeWrapper = kotlin_org_jetbrains_compose_web_internal_web_core_runtime.$_$.c;
  var emptyList = kotlin_kotlin.$_$.v4;
  var copyToArray = kotlin_kotlin.$_$.t4;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var DOMScope = kotlin_org_jetbrains_compose_web_internal_web_core_runtime.$_$.a;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ka;
  var SideEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var DomApplier = kotlin_org_jetbrains_compose_web_internal_web_core_runtime.$_$.b;
  var lazy = kotlin_kotlin.$_$.fa;
  var KProperty1 = kotlin_kotlin.$_$.u8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.n7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var compositionLocalOf$default = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var mapOf = kotlin_kotlin.$_$.k5;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ExperimentalComposeWebApi, 'ExperimentalComposeWebApi', classMeta, undefined, [Annotation], undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  function onContextMenu(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseEventListener('contextmenu', listener));
  }
  function onClick(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseEventListener('click', listener));
  }
  function onDoubleClick(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseEventListener('dblclick', listener));
  }
  function onMouseDown(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseEventListener('mousedown', listener));
  }
  function onMouseUp(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseEventListener('mouseup', listener));
  }
  function onMouseEnter(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseEventListener('mouseenter', listener));
  }
  function onMouseLeave(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseEventListener('mouseleave', listener));
  }
  function onMouseMove(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseEventListener('mousemove', listener));
  }
  function onMouseOut(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseEventListener('mouseout', listener));
  }
  function onMouseOver(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseEventListener('mouseover', listener));
  }
  function onWheel(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new MouseWheelEventListener('wheel', listener));
  }
  function onDrag(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new DragEventListener('drag', listener));
  }
  function onDrop(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new DragEventListener('drop', listener));
  }
  function onDragStart(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new DragEventListener('dragstart', listener));
  }
  function onDragEnd(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new DragEventListener('dragend', listener));
  }
  function onDragOver(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new DragEventListener('dragover', listener));
  }
  function onDragEnter(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new DragEventListener('dragenter', listener));
  }
  function onDragLeave(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new DragEventListener('dragleave', listener));
  }
  function onCopy(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new ClipboardEventListener('copy', listener));
  }
  function onCut(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new ClipboardEventListener('cut', listener));
  }
  function onPaste(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new ClipboardEventListener('paste', listener));
  }
  function onKeyDown(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new KeyboardEventListener('keydown', listener));
  }
  function onKeyUp(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new KeyboardEventListener('keyup', listener));
  }
  function onFocus(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new FocusEventListener('focus', listener));
  }
  function onBlur(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new FocusEventListener('blur', listener));
  }
  function onFocusIn(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new FocusEventListener('focusin', listener));
  }
  function onFocusOut(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new FocusEventListener('focusout', listener));
  }
  function onTouchCancel(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new TouchEventListener('touchcancel', listener));
  }
  function onTouchMove(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new TouchEventListener('touchmove', listener));
  }
  function onTouchEnd(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new TouchEventListener('touchend', listener));
  }
  function onTouchStart(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new TouchEventListener('touchstart', listener));
  }
  function onAnimationEnd(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new AnimationEventListener('animationend', listener));
  }
  function onAnimationIteration(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new AnimationEventListener('animationiteration', listener));
  }
  function onAnimationStart(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new AnimationEventListener('animationstart', listener));
  }
  function onScroll(listener) {
    Companion_getInstance_1();
    this.registerEventListener_wc34s5_k$(new SyntheticEventListener('scroll', listener));
  }
  function addEventListener(eventName, listener) {
    this.registerEventListener_wc34s5_k$(new SyntheticEventListener(eventName, listener));
  }
  function addEventListener_0(eventName, listener) {
    this.registerEventListener_wc34s5_k$(new SyntheticEventListener(eventName, listener));
  }
  setMetadataFor(EventsListenerScope, 'EventsListenerScope', interfaceMeta, undefined, undefined, undefined, undefined, []);
  function classes(classes) {
    return this.classes_m2xsyo_k$(asList(classes));
  }
  function id(value) {
    Companion_getInstance_0();
    return this.attr_z3nk29_k$('id', value);
  }
  function hidden() {
    Companion_getInstance_0();
    return this.attr_z3nk29_k$('hidden', 'true');
  }
  function title(value) {
    Companion_getInstance_0();
    return this.attr_z3nk29_k$('title', value);
  }
  function dir(value) {
    Companion_getInstance_0();
    return this.attr_z3nk29_k$('dir', value.get_dirStr_cdza7h_k$());
  }
  function draggable(value) {
    Companion_getInstance_0();
    return this.attr_z3nk29_k$('draggable', value.get_str_18ivy0_k$());
  }
  function contentEditable(value) {
    Companion_getInstance_0();
    return this.attr_z3nk29_k$('contenteditable', value.toString());
  }
  function lang(value) {
    Companion_getInstance_0();
    return this.attr_z3nk29_k$('lang', value);
  }
  function tabIndex(value) {
    Companion_getInstance_0();
    return this.attr_z3nk29_k$('tabindex', value.toString());
  }
  function spellCheck(value) {
    Companion_getInstance_0();
    return this.attr_z3nk29_k$('spellcheck', value.toString());
  }
  function inputMode(value) {
    return this.attr_z3nk29_k$('inputmode', value);
  }
  function inputMode_0(value) {
    return this.attr_z3nk29_k$('inputmode', value.get_str_18ivy0_k$());
  }
  setMetadataFor(AttrsScope, 'AttrsScope', interfaceMeta, undefined, [EventsListenerScope], undefined, undefined, []);
  setMetadataFor(AttrsScopeBuilder, 'AttrsScopeBuilder', classMeta, undefined, [AttrsScope, EventsListenerScope], undefined, undefined, []);
  setMetadataFor(EventsListenerScopeBuilder, 'EventsListenerScopeBuilder', classMeta, undefined, [EventsListenerScope], undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HtmlAttrMarker, 'HtmlAttrMarker', classMeta, undefined, [Annotation], undefined, undefined, []);
  setMetadataFor(DirType, 'DirType', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Ltr, 'Ltr', objectMeta, DirType, undefined, undefined, undefined, []);
  setMetadataFor(Rtl, 'Rtl', objectMeta, DirType, undefined, undefined, undefined, []);
  setMetadataFor(Auto, 'Auto', objectMeta, DirType, undefined, undefined, undefined, []);
  setMetadataFor(InputMode, 'InputMode', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Draggable, 'Draggable', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(SyntheticEventListener, 'SyntheticEventListener', classMeta, undefined, [NamedEventListener], undefined, undefined, []);
  setMetadataFor(TouchEventListener, 'TouchEventListener', classMeta, SyntheticEventListener, undefined, undefined, undefined, []);
  setMetadataFor(AnimationEventListener, 'AnimationEventListener', classMeta, SyntheticEventListener, undefined, undefined, undefined, []);
  setMetadataFor(FocusEventListener, 'FocusEventListener', classMeta, SyntheticEventListener, undefined, undefined, undefined, []);
  setMetadataFor(MouseEventListener, 'MouseEventListener', classMeta, SyntheticEventListener, undefined, undefined, undefined, []);
  setMetadataFor(DragEventListener, 'DragEventListener', classMeta, SyntheticEventListener, undefined, undefined, undefined, []);
  setMetadataFor(MouseWheelEventListener, 'MouseWheelEventListener', classMeta, SyntheticEventListener, undefined, undefined, undefined, []);
  setMetadataFor(KeyboardEventListener, 'KeyboardEventListener', classMeta, SyntheticEventListener, undefined, undefined, undefined, []);
  setMetadataFor(ClipboardEventListener, 'ClipboardEventListener', classMeta, SyntheticEventListener, undefined, undefined, undefined, []);
  function property(propertyName, value) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return this.property_lwhspk_k$(propertyName, tmp$ret$2);
  }
  function property_0(propertyName, value) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return this.property_lwhspk_k$(propertyName, tmp$ret$2);
  }
  function variable(variableName, value) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return this.variable_3743rz_k$(variableName, tmp$ret$2);
  }
  function variable_0(variableName, value) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return this.variable_3743rz_k$(variableName, tmp$ret$2);
  }
  function invoke(_this__u8e3s4, value) {
    this.variable_d7dn6f_k$(_this__u8e3s4.name_1, toString(value));
  }
  function invoke_0(_this__u8e3s4, value) {
    this.variable_d7dn6f_k$(_this__u8e3s4.name_1, value);
  }
  function invoke_1(_this__u8e3s4, value) {
    this.variable_pbiwyn_k$(_this__u8e3s4.name_1, value);
  }
  setMetadataFor(StyleScope, 'StyleScope', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StyleHolder, 'StyleHolder', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StyleScopeBuilder, 'StyleScopeBuilder', classMeta, undefined, [StyleScope, StyleHolder], undefined, undefined, []);
  setMetadataFor(StylePropertyDeclaration, 'StylePropertyDeclaration', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CSSVariable, 'CSSVariable', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CSSStyleVariable, 'CSSStyleVariable', classMeta, undefined, [CSSVariable], undefined, undefined, []);
  setMetadataFor(CSSSelector, 'CSSSelector', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RawSelector, 'RawSelector', classMeta, CSSSelector, undefined, undefined, undefined, []);
  function selector(selector) {
    return new RawSelector(selector);
  }
  function combine(selectors) {
    return new Combine(toMutableList(selectors));
  }
  function plus(_this__u8e3s4, selector) {
    var tmp;
    if (_this__u8e3s4 instanceof Combine) {
      _this__u8e3s4.selectors_1.add_1j60pz_k$(selector);
      tmp = _this__u8e3s4;
    } else {
      if (selector instanceof Combine) {
        selector.selectors_1.add_ydlf05_k$(0, _this__u8e3s4);
        tmp = selector;
      } else {
        tmp = this.combine_75bnet_k$([_this__u8e3s4, selector]);
      }
    }
    return tmp;
  }
  function plus_0(_this__u8e3s4, selector) {
    var tmp;
    if (_this__u8e3s4 instanceof Combine) {
      _this__u8e3s4.selectors_1.add_1j60pz_k$(this.selector_vsua3m_k$(selector));
      tmp = _this__u8e3s4;
    } else {
      tmp = this.combine_75bnet_k$([_this__u8e3s4, this.selector_vsua3m_k$(selector)]);
    }
    return tmp;
  }
  function returnUniversalSelector() {
    return get_Universal();
  }
  function get_universal() {
    return get_Universal();
  }
  function type(type) {
    return new RawSelector(type);
  }
  function className(className) {
    return new RawSelector('.' + className);
  }
  function id_0(id) {
    return new RawSelector('#' + id);
  }
  function attr(name, value, operator, caseSensitive) {
    return new Attribute(name, value, operator, caseSensitive);
  }
  function attr$default(name, value, operator, caseSensitive, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      value = null;
    if (!(($mask0 & 4) === 0))
      operator = Operator_Equals_getInstance();
    if (!(($mask0 & 8) === 0))
      caseSensitive = true;
    return $handler == null ? this.attr_8c4xcm_k$(name, value, operator, caseSensitive) : $handler(name, value, operator, caseSensitive);
  }
  function attrEquals(name, value, caseSensitive) {
    return this.attr_8c4xcm_k$(name, value, Operator_Equals_getInstance(), caseSensitive);
  }
  function attrEquals$default(name, value, caseSensitive, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      value = null;
    if (!(($mask0 & 4) === 0))
      caseSensitive = true;
    return $handler == null ? this.attrEquals_ekinah_k$(name, value, caseSensitive) : $handler(name, value, caseSensitive);
  }
  function attrListContains(name, value, caseSensitive) {
    return this.attr_8c4xcm_k$(name, value, Operator_ListContains_getInstance(), caseSensitive);
  }
  function attrListContains$default(name, value, caseSensitive, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      value = null;
    if (!(($mask0 & 4) === 0))
      caseSensitive = true;
    return $handler == null ? this.attrListContains_xb78l5_k$(name, value, caseSensitive) : $handler(name, value, caseSensitive);
  }
  function attrHyphened(name, value, caseSensitive) {
    return this.attr_8c4xcm_k$(name, value, Operator_Hyphened_getInstance(), caseSensitive);
  }
  function attrHyphened$default(name, value, caseSensitive, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      value = null;
    if (!(($mask0 & 4) === 0))
      caseSensitive = true;
    return $handler == null ? this.attrHyphened_1nnzy3_k$(name, value, caseSensitive) : $handler(name, value, caseSensitive);
  }
  function attrPrefixed(name, value, caseSensitive) {
    return this.attr_8c4xcm_k$(name, value, Operator_Prefixed_getInstance(), caseSensitive);
  }
  function attrPrefixed$default(name, value, caseSensitive, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      value = null;
    if (!(($mask0 & 4) === 0))
      caseSensitive = true;
    return $handler == null ? this.attrPrefixed_ju2x2d_k$(name, value, caseSensitive) : $handler(name, value, caseSensitive);
  }
  function attrSuffixed(name, value, caseSensitive) {
    return this.attr_8c4xcm_k$(name, value, Operator_Suffixed_getInstance(), caseSensitive);
  }
  function attrSuffixed$default(name, value, caseSensitive, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      value = null;
    if (!(($mask0 & 4) === 0))
      caseSensitive = true;
    return $handler == null ? this.attrSuffixed_gk0h2_k$(name, value, caseSensitive) : $handler(name, value, caseSensitive);
  }
  function attrContains(name, value, caseSensitive) {
    return this.attr_8c4xcm_k$(name, value, Operator_Contains_getInstance(), caseSensitive);
  }
  function attrContains$default(name, value, caseSensitive, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      value = null;
    if (!(($mask0 & 4) === 0))
      caseSensitive = true;
    return $handler == null ? this.attrContains_2muovr_k$(name, value, caseSensitive) : $handler(name, value, caseSensitive);
  }
  function group(selectors) {
    return new Group(toList(selectors));
  }
  function descendant(parent, selected) {
    return this.desc_ej3sir_k$(parent, selected);
  }
  function desc(parent, selected) {
    return new Descendant(parent, selected);
  }
  function desc_0(parent, selected) {
    return this.desc_ej3sir_k$(parent, this.selector_vsua3m_k$(selected));
  }
  function desc_1(parent, selected) {
    return this.desc_ej3sir_k$(this.selector_vsua3m_k$(parent), selected);
  }
  function desc_2(parent, selected) {
    return this.desc_ej3sir_k$(this.selector_vsua3m_k$(parent), this.selector_vsua3m_k$(selected));
  }
  function child(parent, selected) {
    return new Child(parent, selected);
  }
  function sibling(sibling, selected) {
    return new Sibling(sibling, selected);
  }
  function adjacent(sibling, selected) {
    return new Adjacent(sibling, selected);
  }
  function returnHoverSelector() {
    return this.get_hover_islez7_k$();
  }
  function hover(selector) {
    return this.plus_nlz2mk_k$(selector, this.get_hover_islez7_k$());
  }
  function get_anyLink() {
    return new PseudoClassInternal('any-link');
  }
  function get_link() {
    return new PseudoClassInternal('link');
  }
  function get_visited() {
    return new PseudoClassInternal('visited');
  }
  function get_localLink() {
    return new PseudoClassInternal('local-link');
  }
  function get_target() {
    return new PseudoClassInternal('target');
  }
  function get_targetWithin() {
    return new PseudoClassInternal('target-within');
  }
  function get_scope() {
    return new PseudoClassInternal('scope');
  }
  function get_hover() {
    return new PseudoClassInternal('hover');
  }
  function get_active() {
    return new PseudoClassInternal('active');
  }
  function get_focus() {
    return new PseudoClassInternal('focus');
  }
  function get_focusVisible() {
    return new PseudoClassInternal('focus-visible');
  }
  function get_playing() {
    return new PseudoClassInternal('playing');
  }
  function get_paused() {
    return new PseudoClassInternal('paused');
  }
  function get_autofill() {
    return new PseudoClassInternal('autofill');
  }
  function get_enabled() {
    return new PseudoClassInternal('enabled');
  }
  function get_disabled() {
    return new PseudoClassInternal('disabled');
  }
  function get_readOnly() {
    return new PseudoClassInternal('read-only');
  }
  function get_readWrite() {
    return new PseudoClassInternal('read-write');
  }
  function get_placeholderShown() {
    return new PseudoClassInternal('placeholder-shown');
  }
  function get_default() {
    return new PseudoClassInternal('default');
  }
  function get_checked() {
    return new PseudoClassInternal('checked');
  }
  function get_indeterminate() {
    return new PseudoClassInternal('indeterminate');
  }
  function get_blank() {
    return new PseudoClassInternal('blank');
  }
  function get_valid() {
    return new PseudoClassInternal('valid');
  }
  function get_invalid() {
    return new PseudoClassInternal('invalid');
  }
  function get_inRange() {
    return new PseudoClassInternal('in-range');
  }
  function get_outOfRange() {
    return new PseudoClassInternal('out-of-range');
  }
  function get_required() {
    return new PseudoClassInternal('required');
  }
  function get_optional() {
    return new PseudoClassInternal('optional');
  }
  function get_userInvalid() {
    return new PseudoClassInternal('user-invalid');
  }
  function get_root() {
    return new PseudoClassInternal('root');
  }
  function get_empty() {
    return new PseudoClassInternal('empty');
  }
  function get_first() {
    return new PseudoClassInternal('first');
  }
  function get_firstChild() {
    return new PseudoClassInternal('first-child');
  }
  function get_lastChild() {
    return new PseudoClassInternal('last-child');
  }
  function get_onlyChild() {
    return new PseudoClassInternal('only-child');
  }
  function get_firstOfType() {
    return new PseudoClassInternal('first-of-type');
  }
  function get_lastOfType() {
    return new PseudoClassInternal('last-of-type');
  }
  function get_onlyOfType() {
    return new PseudoClassInternal('only-of-type');
  }
  function get_host() {
    return new PseudoClassInternal('host');
  }
  function get_defined() {
    return new PseudoClassInternal('defined');
  }
  function get_left() {
    return new PseudoClassInternal('left');
  }
  function get_right() {
    return new PseudoClassInternal('right');
  }
  function lang_0(langCode) {
    return new Lang(langCode);
  }
  function nthChild(nth) {
    return new NthChild(nth);
  }
  function nthLastChild(nth) {
    return new NthLastChild(nth);
  }
  function nthOfType(nth) {
    return new NthOfType(nth);
  }
  function nthLastOfType(nth) {
    return new NthLastOfType(nth);
  }
  function host(selector) {
    return new Host(selector);
  }
  function not(selector) {
    return new Not(selector);
  }
  function get_after() {
    return new PseudoElementInternal('after');
  }
  function get_before() {
    return new PseudoElementInternal('before');
  }
  function get_cue() {
    return new PseudoElementInternal('cue');
  }
  function get_cueRegion() {
    return new PseudoElementInternal('cue-region');
  }
  function get_firstLetter() {
    return new PseudoElementInternal('first-letter');
  }
  function get_firstLine() {
    return new PseudoElementInternal('first-line');
  }
  function get_fileSelectorButton() {
    return new PseudoElementInternal('file-selector-button');
  }
  function get_selection() {
    return new PseudoElementInternal('selection');
  }
  function slotted(selector) {
    return new Slotted(selector);
  }
  setMetadataFor(SelectorsScope, 'SelectorsScope', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Combine, 'Combine', classMeta, CSSSelector, undefined, undefined, undefined, []);
  setMetadataFor(Attribute, 'Attribute', classMeta, CSSSelector, undefined, undefined, undefined, []);
  setMetadataFor(Group, 'Group', classMeta, CSSSelector, undefined, undefined, undefined, []);
  setMetadataFor(Descendant, 'Descendant', classMeta, CSSSelector, undefined, undefined, undefined, []);
  setMetadataFor(Child, 'Child', classMeta, CSSSelector, undefined, undefined, undefined, []);
  setMetadataFor(Sibling, 'Sibling', classMeta, CSSSelector, undefined, undefined, undefined, []);
  setMetadataFor(Adjacent, 'Adjacent', classMeta, CSSSelector, undefined, undefined, undefined, []);
  setMetadataFor(PseudoClassInternal, 'PseudoClassInternal', classMeta, CSSSelector, undefined, undefined, undefined, []);
  setMetadataFor(Lang, 'Lang', classMeta, PseudoClassInternal, undefined, undefined, undefined, []);
  setMetadataFor(NthChild, 'NthChild', classMeta, PseudoClassInternal, undefined, undefined, undefined, []);
  setMetadataFor(NthLastChild, 'NthLastChild', classMeta, PseudoClassInternal, undefined, undefined, undefined, []);
  setMetadataFor(NthOfType, 'NthOfType', classMeta, PseudoClassInternal, undefined, undefined, undefined, []);
  setMetadataFor(NthLastOfType, 'NthLastOfType', classMeta, PseudoClassInternal, undefined, undefined, undefined, []);
  setMetadataFor(Host, 'Host', classMeta, PseudoClassInternal, undefined, undefined, undefined, []);
  setMetadataFor(Not, 'Not', classMeta, PseudoClassInternal, undefined, undefined, undefined, []);
  setMetadataFor(PseudoElementInternal, 'PseudoElementInternal', classMeta, CSSSelector, undefined, undefined, undefined, []);
  setMetadataFor(Slotted, 'Slotted', classMeta, PseudoElementInternal, undefined, undefined, undefined, []);
  setMetadataFor(Operator, 'Operator', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Attribute_0, 'Attribute', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PseudoClass, 'PseudoClass', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PseudoElement, 'PseudoElement', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Nth, 'Nth', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(FunctionalImpl, 'FunctionalImpl', classMeta, undefined, [Nth], undefined, undefined, []);
  setMetadataFor(OddImpl, 'OddImpl', objectMeta, undefined, [Nth], undefined, undefined, []);
  setMetadataFor(EvenImpl, 'EvenImpl', objectMeta, undefined, [Nth], undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(selectorScope$1, undefined, classMeta, undefined, [SelectorsScope], undefined, undefined, []);
  setMetadataFor(DomElementWrapper, 'DomElementWrapper', classMeta, DomNodeWrapper, undefined, undefined, undefined, []);
  function DisposableRefEffect(effect) {
    illegalDecoyCallException('DisposableRefEffect');
  }
  function DisposableRefEffect$composable(effect, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-912649705);
    sourceInformation($composer_0, 'C(DisposableRefEffect$composable)');
    if (isTraceInProgress()) {
      traceEventStart(-912649705, $changed, -1, 'org.jetbrains.compose.web.dom.ElementScope.DisposableRefEffect$composable (ElementScope.kt:55)');
    }
    this.DisposableRefEffect$composable_921rlw_k$(null, effect, $composer_0, 6 | 112 & $changed << 3 | 896 & $changed << 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  }
  setMetadataFor(ElementScope, 'ElementScope', interfaceMeta, undefined, [DOMScope], undefined, undefined, []);
  setMetadataFor(DomEffectScope, 'DomEffectScope', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ElementScopeBase, 'ElementScopeBase', classMeta, undefined, [ElementScope], undefined, undefined, []);
  setMetadataFor(ElementScopeImpl, 'ElementScopeImpl', classMeta, ElementScopeBase, undefined, undefined, undefined, []);
  setMetadataFor(DomDisposableEffectHolder, 'DomDisposableEffectHolder', classMeta, undefined, [RememberObserver, DomEffectScope], undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ElementBuilder, 'ElementBuilder', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ElementBuilderImplementation, 'ElementBuilderImplementation', classMeta, undefined, [ElementBuilder], undefined, undefined, []);
  setMetadataFor(RadioGroupScope, 'RadioGroupScope', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SyntheticEvent, 'SyntheticEvent', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SyntheticAnimationEvent, 'SyntheticAnimationEvent', classMeta, SyntheticEvent, undefined, undefined, undefined, []);
  setMetadataFor(SyntheticClipboardEvent, 'SyntheticClipboardEvent', classMeta, SyntheticEvent, undefined, undefined, undefined, []);
  setMetadataFor(SyntheticFocusEvent, 'SyntheticFocusEvent', classMeta, SyntheticEvent, undefined, undefined, undefined, []);
  setMetadataFor(SyntheticKeyboardEvent, 'SyntheticKeyboardEvent', classMeta, SyntheticEvent, undefined, undefined, undefined, []);
  setMetadataFor(SyntheticMouseEvent, 'SyntheticMouseEvent', classMeta, SyntheticEvent, undefined, undefined, undefined, []);
  setMetadataFor(SyntheticDragEvent, 'SyntheticDragEvent', classMeta, SyntheticMouseEvent, undefined, undefined, undefined, []);
  setMetadataFor(SyntheticWheelEvent, 'SyntheticWheelEvent', classMeta, SyntheticMouseEvent, undefined, undefined, undefined, []);
  setMetadataFor(SyntheticTouchEvent, 'SyntheticTouchEvent', classMeta, SyntheticEvent, undefined, undefined, undefined, []);
  //endregion
  function ExperimentalComposeWebApi() {
  }
  ExperimentalComposeWebApi.prototype.equals = function (other) {
    if (!(other instanceof ExperimentalComposeWebApi))
      return false;
    var tmp0_other_with_cast = other instanceof ExperimentalComposeWebApi ? other : THROW_CCE();
    return true;
  };
  ExperimentalComposeWebApi.prototype.hashCode = function () {
    return 0;
  };
  ExperimentalComposeWebApi.prototype.toString = function () {
    return '@org.jetbrains.compose.web.ExperimentalComposeWebApi()';
  };
  function get_setInputValue() {
    init_properties_Attrs_kt_mv9v1q();
    return setInputValue;
  }
  var setInputValue;
  function get_setTextAreaDefaultValue() {
    init_properties_Attrs_kt_mv9v1q();
    return setTextAreaDefaultValue;
  }
  var setTextAreaDefaultValue;
  function get_setCheckedValue() {
    init_properties_Attrs_kt_mv9v1q();
    return setCheckedValue;
  }
  var setCheckedValue;
  function href(_this__u8e3s4, value) {
    init_properties_Attrs_kt_mv9v1q();
    return _this__u8e3s4.attr_z3nk29_k$('href', value);
  }
  function setInputValue$lambda(e, v) {
    init_properties_Attrs_kt_mv9v1q();
    if (!(v === e.value)) {
      e.value = v;
    }
    saveControlledInputState(e, v);
    return Unit_getInstance();
  }
  function setTextAreaDefaultValue$lambda(e, v) {
    init_properties_Attrs_kt_mv9v1q();
    e.innerText = v;
    return Unit_getInstance();
  }
  function setCheckedValue$lambda(e, v) {
    init_properties_Attrs_kt_mv9v1q();
    e.checked = v;
    saveControlledInputState(e, v);
    return Unit_getInstance();
  }
  var properties_initialized_Attrs_kt_uypsku;
  function init_properties_Attrs_kt_mv9v1q() {
    if (properties_initialized_Attrs_kt_uypsku) {
    } else {
      properties_initialized_Attrs_kt_uypsku = true;
      setInputValue = setInputValue$lambda;
      setTextAreaDefaultValue = setTextAreaDefaultValue$lambda;
      setCheckedValue = setCheckedValue$lambda;
    }
  }
  function get_setClassList() {
    init_properties_AttrsScope_kt_3vv7zs();
    return setClassList;
  }
  var setClassList;
  function Companion() {
    Companion_instance = this;
    this.CLASS_1 = 'class';
    this.ID_1 = 'id';
    this.HIDDEN_1 = 'hidden';
    this.TITLE_1 = 'title';
    this.DIR_1 = 'dir';
    this.DRAGGABLE_1 = 'draggable';
    this.CONTENT_EDITABLE_1 = 'contenteditable';
    this.LANG_1 = 'lang';
    this.TAB_INDEX_1 = 'tabindex';
    this.SPELLCHECK_1 = 'spellcheck';
  }
  Companion.prototype.get_CLASS_i7lkq7_k$ = function () {
    return this.CLASS_1;
  };
  Companion.prototype.get_ID_kntopo_k$ = function () {
    return this.ID_1;
  };
  Companion.prototype.get_HIDDEN_1dp9hp_k$ = function () {
    return this.HIDDEN_1;
  };
  Companion.prototype.get_TITLE_igwjrj_k$ = function () {
    return this.TITLE_1;
  };
  Companion.prototype.get_DIR_18jvuk_k$ = function () {
    return this.DIR_1;
  };
  Companion.prototype.get_DRAGGABLE_lgsxfg_k$ = function () {
    return this.DRAGGABLE_1;
  };
  Companion.prototype.get_CONTENT_EDITABLE_pkf1hv_k$ = function () {
    return this.CONTENT_EDITABLE_1;
  };
  Companion.prototype.get_LANG_wo4kl3_k$ = function () {
    return this.LANG_1;
  };
  Companion.prototype.get_TAB_INDEX_us6klb_k$ = function () {
    return this.TAB_INDEX_1;
  };
  Companion.prototype.get_SPELLCHECK_xv0ui1_k$ = function () {
    return this.SPELLCHECK_1;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function AttrsScope() {
    Companion_getInstance_0();
  }
  function AttrsScopeBuilder_init_$Init$(eventsListenerScopeBuilder, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      eventsListenerScopeBuilder = new EventsListenerScopeBuilder();
    AttrsScopeBuilder.call($this, eventsListenerScopeBuilder);
    return $this;
  }
  function AttrsScopeBuilder_init_$Create$(eventsListenerScopeBuilder, $mask0, $marker) {
    return AttrsScopeBuilder_init_$Init$(eventsListenerScopeBuilder, $mask0, $marker, Object.create(AttrsScopeBuilder.prototype));
  }
  function get_$stableprop() {
    return 8;
  }
  function AttrsScopeBuilder(eventsListenerScopeBuilder) {
    this.eventsListenerScopeBuilder_1 = eventsListenerScopeBuilder;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.attributesMap_1 = tmp$ret$0;
    this.styleScope_1 = new StyleScopeBuilder();
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.propertyUpdates_1 = tmp$ret$1;
    this.refEffect_1 = null;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_1.classes_1 = tmp$ret$2;
    this.$stable_1 = 8;
  }
  AttrsScopeBuilder.prototype.get_eventsListenerScopeBuilder_j7bhoj_k$ = function () {
    return this.eventsListenerScopeBuilder_1;
  };
  AttrsScopeBuilder.prototype.addEventListener_rnhydf_k$ = function (eventName, listener) {
    this.eventsListenerScopeBuilder_1.addEventListener_rnhydf_k$(eventName, listener);
  };
  AttrsScopeBuilder.prototype.addEventListener_y3hr2r_k$ = function (eventName, listener) {
    this.eventsListenerScopeBuilder_1.addEventListener_y3hr2r_k$(eventName, listener);
  };
  AttrsScopeBuilder.prototype.onAnimationEnd_35pssj_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onAnimationEnd_35pssj_k$(listener);
  };
  AttrsScopeBuilder.prototype.onAnimationIteration_qwyfwf_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onAnimationIteration_qwyfwf_k$(listener);
  };
  AttrsScopeBuilder.prototype.onAnimationStart_jojejg_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onAnimationStart_jojejg_k$(listener);
  };
  AttrsScopeBuilder.prototype.onBlur_jks72x_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onBlur_jks72x_k$(listener);
  };
  AttrsScopeBuilder.prototype.onClick_3adsri_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onClick_3adsri_k$(listener);
  };
  AttrsScopeBuilder.prototype.onContextMenu_rqaeiw_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onContextMenu_rqaeiw_k$(listener);
  };
  AttrsScopeBuilder.prototype.onCopy_takkx5_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onCopy_takkx5_k$(listener);
  };
  AttrsScopeBuilder.prototype.onCut_ol4js_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onCut_ol4js_k$(listener);
  };
  AttrsScopeBuilder.prototype.onDoubleClick_o3ltf3_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDoubleClick_o3ltf3_k$(listener);
  };
  AttrsScopeBuilder.prototype.onDrag_vg0lyh_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDrag_vg0lyh_k$(listener);
  };
  AttrsScopeBuilder.prototype.onDragEnd_y7ewx8_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDragEnd_y7ewx8_k$(listener);
  };
  AttrsScopeBuilder.prototype.onDragEnter_uyubsn_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDragEnter_uyubsn_k$(listener);
  };
  AttrsScopeBuilder.prototype.onDragLeave_nnon60_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDragLeave_nnon60_k$(listener);
  };
  AttrsScopeBuilder.prototype.onDragOver_ti99sb_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDragOver_ti99sb_k$(listener);
  };
  AttrsScopeBuilder.prototype.onDragStart_w5ys4t_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDragStart_w5ys4t_k$(listener);
  };
  AttrsScopeBuilder.prototype.onDrop_3mkg4y_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onDrop_3mkg4y_k$(listener);
  };
  AttrsScopeBuilder.prototype.onFocus_f0s6pg_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onFocus_f0s6pg_k$(listener);
  };
  AttrsScopeBuilder.prototype.onFocusIn_o8fbjl_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onFocusIn_o8fbjl_k$(listener);
  };
  AttrsScopeBuilder.prototype.onFocusOut_pmzsfc_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onFocusOut_pmzsfc_k$(listener);
  };
  AttrsScopeBuilder.prototype.onKeyDown_xycn2o_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onKeyDown_xycn2o_k$(listener);
  };
  AttrsScopeBuilder.prototype.onKeyUp_u3a7vt_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onKeyUp_u3a7vt_k$(listener);
  };
  AttrsScopeBuilder.prototype.onMouseDown_em11hd_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseDown_em11hd_k$(listener);
  };
  AttrsScopeBuilder.prototype.onMouseEnter_g3bz11_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseEnter_g3bz11_k$(listener);
  };
  AttrsScopeBuilder.prototype.onMouseLeave_4qyrg6_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseLeave_4qyrg6_k$(listener);
  };
  AttrsScopeBuilder.prototype.onMouseMove_609snk_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseMove_609snk_k$(listener);
  };
  AttrsScopeBuilder.prototype.onMouseOut_alj067_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseOut_alj067_k$(listener);
  };
  AttrsScopeBuilder.prototype.onMouseOver_66zdzh_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseOver_66zdzh_k$(listener);
  };
  AttrsScopeBuilder.prototype.onMouseUp_qybdyy_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onMouseUp_qybdyy_k$(listener);
  };
  AttrsScopeBuilder.prototype.onPaste_rubsh5_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onPaste_rubsh5_k$(listener);
  };
  AttrsScopeBuilder.prototype.onScroll_3uphub_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onScroll_3uphub_k$(listener);
  };
  AttrsScopeBuilder.prototype.onTouchCancel_ufddza_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onTouchCancel_ufddza_k$(listener);
  };
  AttrsScopeBuilder.prototype.onTouchEnd_u7mt1j_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onTouchEnd_u7mt1j_k$(listener);
  };
  AttrsScopeBuilder.prototype.onTouchMove_f4qr3x_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onTouchMove_f4qr3x_k$(listener);
  };
  AttrsScopeBuilder.prototype.onTouchStart_sporrm_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onTouchStart_sporrm_k$(listener);
  };
  AttrsScopeBuilder.prototype.onWheel_cg2j2t_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.onWheel_cg2j2t_k$(listener);
  };
  AttrsScopeBuilder.prototype.registerEventListener_wc34s5_k$ = function (listener) {
    this.eventsListenerScopeBuilder_1.registerEventListener_wc34s5_k$(listener);
  };
  AttrsScopeBuilder.prototype.get_attributesMap_p5yisk_k$ = function () {
    return this.attributesMap_1;
  };
  AttrsScopeBuilder.prototype.get_styleScope_i1qedw_k$ = function () {
    return this.styleScope_1;
  };
  AttrsScopeBuilder.prototype.get_propertyUpdates_qy3v4c_k$ = function () {
    return this.propertyUpdates_1;
  };
  AttrsScopeBuilder.prototype.set_refEffect_4u0az6_k$ = function (_set____db54di) {
    this.refEffect_1 = _set____db54di;
  };
  AttrsScopeBuilder.prototype.get_refEffect_m4bgrp_k$ = function () {
    return this.refEffect_1;
  };
  AttrsScopeBuilder.prototype.get_classes_fds01p_k$ = function () {
    return this.classes_1;
  };
  AttrsScopeBuilder.prototype.classes_m2xsyo_k$ = function (classes) {
    this.classes_1.addAll_oxxjjk_k$(classes);
  };
  AttrsScopeBuilder.prototype.classes_mog12g_k$ = function (classes) {
    addAll(this.classes_1, classes);
  };
  AttrsScopeBuilder.prototype.style_sa2yps_k$ = function (builder) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.styleScope_1;
    // Inline function 'kotlin.contracts.contract' call
    builder(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
  };
  AttrsScopeBuilder.prototype.ref_6wvjf3_k$ = function (effect) {
    this.refEffect_1 = effect;
  };
  AttrsScopeBuilder.prototype.attr_z3nk29_k$ = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.attributesMap_1;
    tmp0_set.put_3mhbri_k$(attr, value);
    return this;
  };
  AttrsScopeBuilder.prototype.prop_mo7bqj_k$ = function (update, value) {
    var tmp = to(update, value);
    this.propertyUpdates_1.add_1j60pz_k$(tmp instanceof Pair ? tmp : THROW_CCE());
  };
  AttrsScopeBuilder.prototype.collect_fp9wdm_k$ = function () {
    return this.attributesMap_1;
  };
  AttrsScopeBuilder.prototype.copyFrom_5fvenn_k$ = function (attrsScope) {
    this.refEffect_1 = attrsScope.refEffect_1;
    this.styleScope_1.copyFrom_j2fwtz_k$(attrsScope.styleScope_1);
    this.attributesMap_1.putAll_mee1c3_k$(attrsScope.attributesMap_1);
    this.propertyUpdates_1.addAll_oxxjjk_k$(attrsScope.propertyUpdates_1);
    this.eventsListenerScopeBuilder_1.copyListenersFrom_jbuovr_k$(attrsScope.eventsListenerScopeBuilder_1);
  };
  function setClassList$lambda(e, classList) {
    init_properties_AttrsScope_kt_3vv7zs();
    (function () {
      var $externalVarargReceiverTmp = e.classList;
      return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].slice.call(classList.slice()));
    }.call(this));
    return Unit_getInstance();
  }
  var properties_initialized_AttrsScope_kt_jxswks;
  function init_properties_AttrsScope_kt_3vv7zs() {
    if (properties_initialized_AttrsScope_kt_jxswks) {
    } else {
      properties_initialized_AttrsScope_kt_jxswks = true;
      setClassList = setClassList$lambda;
    }
  }
  function _get_listeners__760gzy($this) {
    return $this.listeners_1;
  }
  function get_$stableprop_0() {
    return 8;
  }
  function EventsListenerScopeBuilder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.listeners_1 = tmp$ret$0;
    this.$stable_1 = 8;
  }
  EventsListenerScopeBuilder.prototype.registerEventListener_wc34s5_k$ = function (listener) {
    this.listeners_1.add_1j60pz_k$(listener);
  };
  EventsListenerScopeBuilder.prototype.copyListenersFrom_jbuovr_k$ = function (from) {
    this.listeners_1.addAll_oxxjjk_k$(from.listeners_1);
  };
  EventsListenerScopeBuilder.prototype.collectListeners_sutf4b_k$ = function () {
    return this.listeners_1;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.COPY_1 = 'copy';
    this.CUT_1 = 'cut';
    this.PASTE_1 = 'paste';
    this.CONTEXTMENU_1 = 'contextmenu';
    this.CLICK_1 = 'click';
    this.DBLCLICK_1 = 'dblclick';
    this.FOCUS_1 = 'focus';
    this.BLUR_1 = 'blur';
    this.FOCUSIN_1 = 'focusin';
    this.FOCUSOUT_1 = 'focusout';
    this.KEYDOWN_1 = 'keydown';
    this.KEYUP_1 = 'keyup';
    this.MOUSEDOWN_1 = 'mousedown';
    this.MOUSEUP_1 = 'mouseup';
    this.MOUSEENTER_1 = 'mouseenter';
    this.MOUSELEAVE_1 = 'mouseleave';
    this.MOUSEMOVE_1 = 'mousemove';
    this.MOUSEOUT_1 = 'mouseout';
    this.MOUSEOVER_1 = 'mouseover';
    this.WHEEL_1 = 'wheel';
    this.SCROLL_1 = 'scroll';
    this.SELECT_1 = 'select';
    this.TOUCHCANCEL_1 = 'touchcancel';
    this.TOUCHEND_1 = 'touchend';
    this.TOUCHMOVE_1 = 'touchmove';
    this.TOUCHSTART_1 = 'touchstart';
    this.ANIMATIONCANCEL_1 = 'animationcancel';
    this.ANIMATIONEND_1 = 'animationend';
    this.ANIMATIONITERATION_1 = 'animationiteration';
    this.ANIMATIONSTART_1 = 'animationstart';
    this.BEFOREINPUT_1 = 'beforeinput';
    this.INPUT_1 = 'input';
    this.CHANGE_1 = 'change';
    this.INVALID_1 = 'invalid';
    this.DRAG_1 = 'drag';
    this.DROP_1 = 'drop';
    this.DRAGSTART_1 = 'dragstart';
    this.DRAGEND_1 = 'dragend';
    this.DRAGOVER_1 = 'dragover';
    this.DRAGENTER_1 = 'dragenter';
    this.DRAGLEAVE_1 = 'dragleave';
    this.SUBMIT_1 = 'submit';
    this.RESET_1 = 'reset';
  }
  Companion_0.prototype.get_COPY_wnz45a_k$ = function () {
    return this.COPY_1;
  };
  Companion_0.prototype.get_CUT_18jwav_k$ = function () {
    return this.CUT_1;
  };
  Companion_0.prototype.get_PASTE_iek8y2_k$ = function () {
    return this.PASTE_1;
  };
  Companion_0.prototype.get_CONTEXTMENU_n7w1rv_k$ = function () {
    return this.CONTEXTMENU_1;
  };
  Companion_0.prototype.get_CLICK_i7lq9r_k$ = function () {
    return this.CLICK_1;
  };
  Companion_0.prototype.get_DBLCLICK_lnqjqb_k$ = function () {
    return this.DBLCLICK_1;
  };
  Companion_0.prototype.get_FOCUS_i9awzz_k$ = function () {
    return this.FOCUS_1;
  };
  Companion_0.prototype.get_BLUR_wnyf1s_k$ = function () {
    return this.BLUR_1;
  };
  Companion_0.prototype.get_FOCUSIN_1ple5w_k$ = function () {
    return this.FOCUSIN_1;
  };
  Companion_0.prototype.get_FOCUSOUT_hzoq81_k$ = function () {
    return this.FOCUSOUT_1;
  };
  Companion_0.prototype.get_KEYDOWN_c6wzs_k$ = function () {
    return this.KEYDOWN_1;
  };
  Companion_0.prototype.get_KEYUP_ibvyep_k$ = function () {
    return this.KEYUP_1;
  };
  Companion_0.prototype.get_MOUSEDOWN_6q4qv6_k$ = function () {
    return this.MOUSEDOWN_1;
  };
  Companion_0.prototype.get_MOUSEUP_xp42d3_k$ = function () {
    return this.MOUSEUP_1;
  };
  Companion_0.prototype.get_MOUSEENTER_4ls4bg_k$ = function () {
    return this.MOUSEENTER_1;
  };
  Companion_0.prototype.get_MOUSELEAVE_4pgjwb_k$ = function () {
    return this.MOUSELEAVE_1;
  };
  Companion_0.prototype.get_MOUSEMOVE_6pz00j_k$ = function () {
    return this.MOUSEMOVE_1;
  };
  Companion_0.prototype.get_MOUSEOUT_ku6wmm_k$ = function () {
    return this.MOUSEOUT_1;
  };
  Companion_0.prototype.get_MOUSEOVER_6pxl8w_k$ = function () {
    return this.MOUSEOVER_1;
  };
  Companion_0.prototype.get_WHEEL_iiiz9u_k$ = function () {
    return this.WHEEL_1;
  };
  Companion_0.prototype.get_SCROLL_3qqzfa_k$ = function () {
    return this.SCROLL_1;
  };
  Companion_0.prototype.get_SELECT_3rqj2d_k$ = function () {
    return this.SELECT_1;
  };
  Companion_0.prototype.get_TOUCHCANCEL_dnulf4_k$ = function () {
    return this.TOUCHCANCEL_1;
  };
  Companion_0.prototype.get_TOUCHEND_wewr97_k$ = function () {
    return this.TOUCHEND_1;
  };
  Companion_0.prototype.get_TOUCHMOVE_aehk55_k$ = function () {
    return this.TOUCHMOVE_1;
  };
  Companion_0.prototype.get_TOUCHSTART_wrtgr0_k$ = function () {
    return this.TOUCHSTART_1;
  };
  Companion_0.prototype.get_ANIMATIONCANCEL_s7fx11_k$ = function () {
    return this.ANIMATIONCANCEL_1;
  };
  Companion_0.prototype.get_ANIMATIONEND_8qz940_k$ = function () {
    return this.ANIMATIONEND_1;
  };
  Companion_0.prototype.get_ANIMATIONITERATION_txi5cu_k$ = function () {
    return this.ANIMATIONITERATION_1;
  };
  Companion_0.prototype.get_ANIMATIONSTART_qbysnt_k$ = function () {
    return this.ANIMATIONSTART_1;
  };
  Companion_0.prototype.get_BEFOREINPUT_vjk3z6_k$ = function () {
    return this.BEFOREINPUT_1;
  };
  Companion_0.prototype.get_INPUT_iaxxfl_k$ = function () {
    return this.INPUT_1;
  };
  Companion_0.prototype.get_CHANGE_3rivk7_k$ = function () {
    return this.CHANGE_1;
  };
  Companion_0.prototype.get_INVALID_pha976_k$ = function () {
    return this.INVALID_1;
  };
  Companion_0.prototype.get_DRAG_wnzszh_k$ = function () {
    return this.DRAG_1;
  };
  Companion_0.prototype.get_DROP_wnztbs_k$ = function () {
    return this.DROP_1;
  };
  Companion_0.prototype.get_DRAGSTART_l9va57_k$ = function () {
    return this.DRAGSTART_1;
  };
  Companion_0.prototype.get_DRAGEND_q9f4de_k$ = function () {
    return this.DRAGEND_1;
  };
  Companion_0.prototype.get_DRAGOVER_wrllwv_k$ = function () {
    return this.DRAGOVER_1;
  };
  Companion_0.prototype.get_DRAGENTER_lhnulh_k$ = function () {
    return this.DRAGENTER_1;
  };
  Companion_0.prototype.get_DRAGLEAVE_ldzf0m_k$ = function () {
    return this.DRAGLEAVE_1;
  };
  Companion_0.prototype.get_SUBMIT_40d0rl_k$ = function () {
    return this.SUBMIT_1;
  };
  Companion_0.prototype.get_RESET_ifqdqe_k$ = function () {
    return this.RESET_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function EventsListenerScope() {
    Companion_getInstance_1();
  }
  function HtmlAttrMarker() {
  }
  HtmlAttrMarker.prototype.equals = function (other) {
    if (!(other instanceof HtmlAttrMarker))
      return false;
    var tmp0_other_with_cast = other instanceof HtmlAttrMarker ? other : THROW_CCE();
    return true;
  };
  HtmlAttrMarker.prototype.hashCode = function () {
    return 0;
  };
  HtmlAttrMarker.prototype.toString = function () {
    return '@org.jetbrains.compose.web.attributes.HtmlAttrMarker()';
  };
  function get_$stableprop_1() {
    return 0;
  }
  function get_$stableprop_2() {
    return 0;
  }
  function get_$stableprop_3() {
    return 0;
  }
  function Ltr() {
    Ltr_instance = this;
    DirType.call(this, 'ltr');
    this.$stable_2 = 0;
  }
  var Ltr_instance;
  function Ltr_getInstance() {
    if (Ltr_instance == null)
      new Ltr();
    return Ltr_instance;
  }
  function Rtl() {
    Rtl_instance = this;
    DirType.call(this, 'rtl');
    this.$stable_2 = 0;
  }
  var Rtl_instance;
  function Rtl_getInstance() {
    if (Rtl_instance == null)
      new Rtl();
    return Rtl_instance;
  }
  function Auto() {
    Auto_instance = this;
    DirType.call(this, 'auto');
    this.$stable_2 = 0;
  }
  var Auto_instance;
  function Auto_getInstance() {
    if (Auto_instance == null)
      new Auto();
    return Auto_instance;
  }
  function get_$stableprop_4() {
    return 0;
  }
  function DirType(dirStr) {
    this.dirStr_1 = dirStr;
    this.$stable_1 = 0;
  }
  DirType.prototype.get_dirStr_cdza7h_k$ = function () {
    return this.dirStr_1;
  };
  var InputMode_None_instance;
  var InputMode_Text_instance;
  var InputMode_Decimal_instance;
  var InputMode_Numeric_instance;
  var InputMode_Tel_instance;
  var InputMode_Search_instance;
  var InputMode_Email_instance;
  var InputMode_Url_instance;
  function values() {
    return [InputMode_None_getInstance(), InputMode_Text_getInstance(), InputMode_Decimal_getInstance(), InputMode_Numeric_getInstance(), InputMode_Tel_getInstance(), InputMode_Search_getInstance(), InputMode_Email_getInstance(), InputMode_Url_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'None':
        return InputMode_None_getInstance();
      case 'Text':
        return InputMode_Text_getInstance();
      case 'Decimal':
        return InputMode_Decimal_getInstance();
      case 'Numeric':
        return InputMode_Numeric_getInstance();
      case 'Tel':
        return InputMode_Tel_getInstance();
      case 'Search':
        return InputMode_Search_getInstance();
      case 'Email':
        return InputMode_Email_getInstance();
      case 'Url':
        return InputMode_Url_getInstance();
      default:
        InputMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  var InputMode_entriesInitialized;
  function InputMode_initEntries() {
    if (InputMode_entriesInitialized)
      return Unit_getInstance();
    InputMode_entriesInitialized = true;
    InputMode_None_instance = new InputMode('None', 0, 'none');
    InputMode_Text_instance = new InputMode('Text', 1, 'text');
    InputMode_Decimal_instance = new InputMode('Decimal', 2, 'decimal');
    InputMode_Numeric_instance = new InputMode('Numeric', 3, 'numeric');
    InputMode_Tel_instance = new InputMode('Tel', 4, 'tel');
    InputMode_Search_instance = new InputMode('Search', 5, 'search');
    InputMode_Email_instance = new InputMode('Email', 6, 'email');
    InputMode_Url_instance = new InputMode('Url', 7, 'url');
  }
  function InputMode(name, ordinal, str) {
    Enum.call(this, name, ordinal);
    this.str_1 = str;
  }
  InputMode.prototype.get_str_18ivy0_k$ = function () {
    return this.str_1;
  };
  var Draggable_True_instance;
  var Draggable_False_instance;
  var Draggable_Auto_instance;
  function values_0() {
    return [Draggable_True_getInstance(), Draggable_False_getInstance(), Draggable_Auto_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'True':
        return Draggable_True_getInstance();
      case 'False':
        return Draggable_False_getInstance();
      case 'Auto':
        return Draggable_Auto_getInstance();
      default:
        Draggable_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Draggable_entriesInitialized;
  function Draggable_initEntries() {
    if (Draggable_entriesInitialized)
      return Unit_getInstance();
    Draggable_entriesInitialized = true;
    Draggable_True_instance = new Draggable('True', 0, 'true');
    Draggable_False_instance = new Draggable('False', 1, 'false');
    Draggable_Auto_instance = new Draggable('Auto', 2, 'auto');
  }
  function Draggable(name, ordinal, str) {
    Enum.call(this, name, ordinal);
    this.str_1 = str;
  }
  Draggable.prototype.get_str_18ivy0_k$ = function () {
    return this.str_1;
  };
  function InputMode_None_getInstance() {
    InputMode_initEntries();
    return InputMode_None_instance;
  }
  function InputMode_Text_getInstance() {
    InputMode_initEntries();
    return InputMode_Text_instance;
  }
  function InputMode_Decimal_getInstance() {
    InputMode_initEntries();
    return InputMode_Decimal_instance;
  }
  function InputMode_Numeric_getInstance() {
    InputMode_initEntries();
    return InputMode_Numeric_instance;
  }
  function InputMode_Tel_getInstance() {
    InputMode_initEntries();
    return InputMode_Tel_instance;
  }
  function InputMode_Search_getInstance() {
    InputMode_initEntries();
    return InputMode_Search_instance;
  }
  function InputMode_Email_getInstance() {
    InputMode_initEntries();
    return InputMode_Email_instance;
  }
  function InputMode_Url_getInstance() {
    InputMode_initEntries();
    return InputMode_Url_instance;
  }
  function Draggable_True_getInstance() {
    Draggable_initEntries();
    return Draggable_True_instance;
  }
  function Draggable_False_getInstance() {
    Draggable_initEntries();
    return Draggable_False_instance;
  }
  function Draggable_Auto_getInstance() {
    Draggable_initEntries();
    return Draggable_Auto_instance;
  }
  function get_$stableprop_5() {
    return 0;
  }
  function SyntheticEventListener(event, listener) {
    this.event_1 = event;
    this.listener_1 = listener;
    this.name_1 = this.event_1;
    this.$stable_1 = 0;
  }
  SyntheticEventListener.prototype.get_event_ir25pt_k$ = function () {
    return this.event_1;
  };
  SyntheticEventListener.prototype.get_listener_9jgv43_k$ = function () {
    return this.listener_1;
  };
  SyntheticEventListener.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  SyntheticEventListener.prototype.handleEvent_78xx5q_k$ = function (event) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = new SyntheticEvent(event);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    this.listener_1(tmp$ret$1);
  };
  SyntheticEventListener.prototype.handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  function TouchEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  TouchEventListener.prototype.handleEvent_78xx5q_k$ = function (event) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = event;
    tmp$ret$1 = tmp$ret$0;
    this.listener_1(new SyntheticTouchEvent(tmp$ret$1));
  };
  TouchEventListener.prototype.handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  function AnimationEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  AnimationEventListener.prototype.handleEvent_78xx5q_k$ = function (event) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = event;
    tmp$ret$1 = tmp$ret$0;
    this.listener_1(new SyntheticAnimationEvent(event, tmp$ret$1));
  };
  AnimationEventListener.prototype.handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  function FocusEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  FocusEventListener.prototype.handleEvent_78xx5q_k$ = function (event) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = event;
    tmp$ret$1 = tmp$ret$0;
    this.listener_1(new SyntheticFocusEvent(tmp$ret$1));
  };
  FocusEventListener.prototype.handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  function MouseEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  MouseEventListener.prototype.handleEvent_78xx5q_k$ = function (event) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = event;
    tmp$ret$1 = tmp$ret$0;
    this.listener_1(new SyntheticMouseEvent(tmp$ret$1));
  };
  MouseEventListener.prototype.handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  function DragEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  DragEventListener.prototype.handleEvent_78xx5q_k$ = function (event) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = event;
    tmp$ret$1 = tmp$ret$0;
    this.listener_1(new SyntheticDragEvent(tmp$ret$1));
  };
  DragEventListener.prototype.handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  function MouseWheelEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  MouseWheelEventListener.prototype.handleEvent_78xx5q_k$ = function (event) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = event;
    tmp$ret$1 = tmp$ret$0;
    this.listener_1(new SyntheticWheelEvent(tmp$ret$1));
  };
  MouseWheelEventListener.prototype.handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  function KeyboardEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  KeyboardEventListener.prototype.handleEvent_78xx5q_k$ = function (event) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = event;
    tmp$ret$1 = tmp$ret$0;
    this.listener_1(new SyntheticKeyboardEvent(tmp$ret$1));
  };
  KeyboardEventListener.prototype.handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  function ClipboardEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  ClipboardEventListener.prototype.handleEvent_78xx5q_k$ = function (event) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = event;
    tmp$ret$1 = tmp$ret$0;
    this.listener_1(new SyntheticClipboardEvent(tmp$ret$1));
  };
  ClipboardEventListener.prototype.handleEvent = function (event) {
    return this.handleEvent_78xx5q_k$(event);
  };
  function get_controlledInputsValuesWeakMap() {
    init_properties_InternalControlledInputUtils_kt_yo4x4o();
    return controlledInputsValuesWeakMap;
  }
  var controlledInputsValuesWeakMap;
  function get_controlledRadioGroups() {
    init_properties_InternalControlledInputUtils_kt_yo4x4o();
    return controlledRadioGroups;
  }
  var controlledRadioGroups;
  function saveControlledInputState(element, value) {
    init_properties_InternalControlledInputUtils_kt_yo4x4o();
    get_controlledInputsValuesWeakMap().set(element, value);
    if (element instanceof HTMLInputElement) {
      updateRadioGroupIfNeeded(element);
    }
  }
  function updateRadioGroupIfNeeded(element) {
    init_properties_InternalControlledInputUtils_kt_yo4x4o();
    var tmp;
    if (element.type === 'radio') {
      var tmp$ret$0;
      // Inline function 'kotlin.text.isNotEmpty' call
      var tmp0_isNotEmpty = element.name;
      tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
      tmp = tmp$ret$0;
    } else {
      tmp = false;
    }
    if (tmp) {
      if (!get_controlledRadioGroups().containsKey_wgk31w_k$(element.name)) {
        // Inline function 'kotlin.collections.set' call
        var tmp1_set = get_controlledRadioGroups();
        var tmp2_set = element.name;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mutableSetOf' call
        tmp$ret$1 = LinkedHashSet_init_$Create$();
        var tmp3_set = tmp$ret$1;
        tmp1_set.put_3mhbri_k$(tmp2_set, tmp3_set);
      }
      ensureNotNull(get_controlledRadioGroups().get_1mhr4y_k$(element.name)).add_1j60pz_k$(element);
    }
  }
  var properties_initialized_InternalControlledInputUtils_kt_dwq2r0;
  function init_properties_InternalControlledInputUtils_kt_yo4x4o() {
    if (properties_initialized_InternalControlledInputUtils_kt_dwq2r0) {
    } else {
      properties_initialized_InternalControlledInputUtils_kt_dwq2r0 = true;
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = new WeakMap();
      tmp$ret$0 = tmp0_unsafeCast;
      controlledInputsValuesWeakMap = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$0_0 = LinkedHashMap_init_$Create$();
      controlledRadioGroups = tmp$ret$0_0;
    }
  }
  function StylePropertyValue(value) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function StylePropertyValue_0(value) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function StyleScope() {
  }
  function get_$stableprop_6() {
    return 0;
  }
  function StyleScopeBuilder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.properties_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.variables_1 = tmp$ret$1;
    this.$stable_1 = 0;
  }
  StyleScopeBuilder.prototype.get_properties_zhllqc_k$ = function () {
    return this.properties_1;
  };
  StyleScopeBuilder.prototype.get_variables_75f0zy_k$ = function () {
    return this.variables_1;
  };
  StyleScopeBuilder.prototype.property_lwhspk_k$ = function (propertyName, value) {
    this.get_properties_zhllqc_k$().add_1j60pz_k$(new StylePropertyDeclaration(propertyName, value));
  };
  StyleScopeBuilder.prototype.variable_3743rz_k$ = function (variableName, value) {
    this.get_variables_75f0zy_k$().add_1j60pz_k$(new StylePropertyDeclaration(variableName, value));
  };
  StyleScopeBuilder.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, StyleHolder) : false) {
      tmp = nativeEquals(this.get_properties_zhllqc_k$(), other.get_properties_zhllqc_k$()) ? nativeEquals(this.get_variables_75f0zy_k$(), other.get_variables_75f0zy_k$()) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  StyleScopeBuilder.prototype.copyFrom_j2fwtz_k$ = function (sb) {
    this.get_properties_zhllqc_k$().addAll_oxxjjk_k$(sb.get_properties_zhllqc_k$());
    this.get_variables_75f0zy_k$().addAll_oxxjjk_k$(sb.get_variables_75f0zy_k$());
  };
  function StyleHolder() {
  }
  function StylePropertyDeclaration_init_$Init$(name, value, $this) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    StylePropertyDeclaration.call($this, name, tmp$ret$1);
    return $this;
  }
  function StylePropertyDeclaration_init_$Create$(name, value) {
    return StylePropertyDeclaration_init_$Init$(name, value, Object.create(StylePropertyDeclaration.prototype));
  }
  function StylePropertyDeclaration_init_$Init$_0(name, value, $this) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    StylePropertyDeclaration.call($this, name, tmp$ret$1);
    return $this;
  }
  function StylePropertyDeclaration_init_$Create$_0(name, value) {
    return StylePropertyDeclaration_init_$Init$_0(name, value, Object.create(StylePropertyDeclaration.prototype));
  }
  function get_$stableprop_7() {
    return 8;
  }
  function StylePropertyDeclaration(name, value) {
    this.name_1 = name;
    this.value_1 = value;
    this.$stable_1 = 8;
  }
  StylePropertyDeclaration.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  StylePropertyDeclaration.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  StylePropertyDeclaration.prototype.component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  StylePropertyDeclaration.prototype.component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  StylePropertyDeclaration.prototype.copy_5fgnvr_k$ = function (name, value) {
    return new StylePropertyDeclaration(name, value);
  };
  StylePropertyDeclaration.prototype.copy$default_ejkbtq_k$ = function (name, value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.name_1;
    if (!(($mask0 & 2) === 0))
      value = this.value_1;
    return this.copy_5fgnvr_k$(name, value);
  };
  StylePropertyDeclaration.prototype.toString = function () {
    return 'StylePropertyDeclaration(name=' + this.name_1 + ', value=' + this.value_1 + ')';
  };
  StylePropertyDeclaration.prototype.hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + hashCode(this.value_1) | 0;
    return result;
  };
  StylePropertyDeclaration.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StylePropertyDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof StylePropertyDeclaration ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function get_$stableprop_8() {
    return 0;
  }
  function CSSStyleVariable(name) {
    this.name_1 = name;
    this.$stable_1 = 0;
  }
  CSSStyleVariable.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  function nativeEquals(_this__u8e3s4, properties) {
    if (!(_this__u8e3s4.get_size_woubt6_k$() === properties.get_size_woubt6_k$()))
      return false;
    var index = 0;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$1;
        // Inline function 'org.jetbrains.compose.web.css.nativeEquals.<anonymous>' call
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        var otherProp = properties.get_fkrdnv_k$(tmp0);
        tmp$ret$1 = element.name_1 === otherProp.name_1 ? toString(element.value_1) === toString(otherProp.value_1) : false;
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  function CSSVariable() {
  }
  function get_Universal() {
    init_properties_StyleSheetBuilder_kt_hdubw9();
    return Universal;
  }
  var Universal;
  function RawSelector(selector) {
    CSSSelector.call(this);
    this.selector_1 = selector;
  }
  RawSelector.prototype.get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  RawSelector.prototype.toString = function () {
    return this.selector_1;
  };
  RawSelector.prototype.component1_7eebsc_k$ = function () {
    return this.selector_1;
  };
  RawSelector.prototype.copy_3t26ic_k$ = function (selector) {
    return new RawSelector(selector);
  };
  RawSelector.prototype.copy$default_q3pzg4_k$ = function (selector, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      selector = this.selector_1;
    return this.copy_3t26ic_k$(selector);
  };
  RawSelector.prototype.hashCode = function () {
    return getStringHashCode(this.selector_1);
  };
  RawSelector.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RawSelector))
      return false;
    var tmp0_other_with_cast = other instanceof RawSelector ? other : THROW_CCE();
    if (!(this.selector_1 === tmp0_other_with_cast.selector_1))
      return false;
    return true;
  };
  function SelectorsScope() {
  }
  function Combine$asString$lambda(it) {
    return it.asString_l3f38d_k$();
  }
  function Combine(selectors) {
    CSSSelector.call(this);
    this.selectors_1 = selectors;
  }
  Combine.prototype.get_selectors_jv45rp_k$ = function () {
    return this.selectors_1;
  };
  Combine.prototype.contains_2pzjqz_k$ = function (other) {
    return this.contains_qmwvuj_k$(this, other, this.selectors_1);
  };
  Combine.prototype.toString = function () {
    return joinToString$default(this.selectors_1, '', null, null, 0, null, null, 62, null);
  };
  Combine.prototype.asString_l3f38d_k$ = function () {
    return joinToString$default(this.selectors_1, '', null, null, 0, null, Combine$asString$lambda, 30, null);
  };
  Combine.prototype.component1_7eebsc_k$ = function () {
    return this.selectors_1;
  };
  Combine.prototype.copy_efkur1_k$ = function (selectors) {
    return new Combine(selectors);
  };
  Combine.prototype.copy$default_ciuqyn_k$ = function (selectors, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      selectors = this.selectors_1;
    return this.copy_efkur1_k$(selectors);
  };
  Combine.prototype.hashCode = function () {
    return hashCode(this.selectors_1);
  };
  Combine.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Combine))
      return false;
    var tmp0_other_with_cast = other instanceof Combine ? other : THROW_CCE();
    if (!equals(this.selectors_1, tmp0_other_with_cast.selectors_1))
      return false;
    return true;
  };
  function Attribute_init_$Init$(name, value, operator, caseSensitive, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      value = null;
    if (!(($mask0 & 4) === 0))
      operator = Operator_Equals_getInstance();
    if (!(($mask0 & 8) === 0))
      caseSensitive = true;
    Attribute.call($this, name, value, operator, caseSensitive);
    return $this;
  }
  function Attribute_init_$Create$(name, value, operator, caseSensitive, $mask0, $marker) {
    return Attribute_init_$Init$(name, value, operator, caseSensitive, $mask0, $marker, Object.create(Attribute.prototype));
  }
  function Attribute(name, value, operator, caseSensitive) {
    CSSSelector.call(this);
    this.name_1 = name;
    this.value_1 = value;
    this.operator_1 = operator;
    this.caseSensitive_1 = caseSensitive;
  }
  Attribute.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  Attribute.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Attribute.prototype.get_operator_uy5ppp_k$ = function () {
    return this.operator_1;
  };
  Attribute.prototype.get_caseSensitive_1sy9cz_k$ = function () {
    return this.caseSensitive_1;
  };
  Attribute.prototype.toString = function () {
    var tmp0_safe_receiver = this.value_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'org.jetbrains.compose.web.css.Attribute.toString.<anonymous>' call
      tmp$ret$0 = this.operator_1.get_value_j01efc_k$() + this.value_1 + (!this.caseSensitive_1 ? ' i' : '');
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var valueStr = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    return '[' + this.name_1 + valueStr + ']';
  };
  Attribute.prototype.component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  Attribute.prototype.component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  Attribute.prototype.component3_7eebsa_k$ = function () {
    return this.operator_1;
  };
  Attribute.prototype.component4_7eebs9_k$ = function () {
    return this.caseSensitive_1;
  };
  Attribute.prototype.copy_5jpg4a_k$ = function (name, value, operator, caseSensitive) {
    return new Attribute(name, value, operator, caseSensitive);
  };
  Attribute.prototype.copy$default_ls3xt3_k$ = function (name, value, operator, caseSensitive, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.name_1;
    if (!(($mask0 & 2) === 0))
      value = this.value_1;
    if (!(($mask0 & 4) === 0))
      operator = this.operator_1;
    if (!(($mask0 & 8) === 0))
      caseSensitive = this.caseSensitive_1;
    return this.copy_5jpg4a_k$(name, value, operator, caseSensitive);
  };
  Attribute.prototype.hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + (this.value_1 == null ? 0 : getStringHashCode(this.value_1)) | 0;
    result = imul(result, 31) + this.operator_1.hashCode() | 0;
    result = imul(result, 31) + (this.caseSensitive_1 | 0) | 0;
    return result;
  };
  Attribute.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Attribute))
      return false;
    var tmp0_other_with_cast = other instanceof Attribute ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!(this.value_1 == tmp0_other_with_cast.value_1))
      return false;
    if (!this.operator_1.equals(tmp0_other_with_cast.operator_1))
      return false;
    if (!(this.caseSensitive_1 === tmp0_other_with_cast.caseSensitive_1))
      return false;
    return true;
  };
  function Group$asString$lambda(it) {
    return it.asString_l3f38d_k$();
  }
  function Group(selectors) {
    CSSSelector.call(this);
    this.selectors_1 = selectors;
  }
  Group.prototype.get_selectors_jv45rp_k$ = function () {
    return this.selectors_1;
  };
  Group.prototype.contains_2pzjqz_k$ = function (other) {
    return this.contains_qmwvuj_k$(this, other, this.selectors_1);
  };
  Group.prototype.toString = function () {
    return joinToString$default(this.selectors_1, ', ', null, null, 0, null, null, 62, null);
  };
  Group.prototype.asString_l3f38d_k$ = function () {
    return joinToString$default(this.selectors_1, ', ', null, null, 0, null, Group$asString$lambda, 30, null);
  };
  Group.prototype.component1_7eebsc_k$ = function () {
    return this.selectors_1;
  };
  Group.prototype.copy_gwpngl_k$ = function (selectors) {
    return new Group(selectors);
  };
  Group.prototype.copy$default_79ykr_k$ = function (selectors, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      selectors = this.selectors_1;
    return this.copy_gwpngl_k$(selectors);
  };
  Group.prototype.hashCode = function () {
    return hashCode(this.selectors_1);
  };
  Group.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Group))
      return false;
    var tmp0_other_with_cast = other instanceof Group ? other : THROW_CCE();
    if (!equals(this.selectors_1, tmp0_other_with_cast.selectors_1))
      return false;
    return true;
  };
  function Descendant(parent, selected) {
    CSSSelector.call(this);
    this.parent_1 = parent;
    this.selected_1 = selected;
  }
  Descendant.prototype.get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  Descendant.prototype.get_selected_c3i7q4_k$ = function () {
    return this.selected_1;
  };
  Descendant.prototype.contains_2pzjqz_k$ = function (other) {
    return this.contains_qmwvuj_k$(this, other, listOf([this.parent_1, this.selected_1]));
  };
  Descendant.prototype.toString = function () {
    return '' + this.parent_1 + ' ' + this.selected_1;
  };
  Descendant.prototype.asString_l3f38d_k$ = function () {
    return this.parent_1.asString_l3f38d_k$() + ' ' + this.selected_1.asString_l3f38d_k$();
  };
  Descendant.prototype.component1_7eebsc_k$ = function () {
    return this.parent_1;
  };
  Descendant.prototype.component2_7eebsb_k$ = function () {
    return this.selected_1;
  };
  Descendant.prototype.copy_vrrz27_k$ = function (parent, selected) {
    return new Descendant(parent, selected);
  };
  Descendant.prototype.copy$default_8kyn0w_k$ = function (parent, selected, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = this.parent_1;
    if (!(($mask0 & 2) === 0))
      selected = this.selected_1;
    return this.copy_vrrz27_k$(parent, selected);
  };
  Descendant.prototype.hashCode = function () {
    var result = hashCode(this.parent_1);
    result = imul(result, 31) + hashCode(this.selected_1) | 0;
    return result;
  };
  Descendant.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Descendant))
      return false;
    var tmp0_other_with_cast = other instanceof Descendant ? other : THROW_CCE();
    if (!equals(this.parent_1, tmp0_other_with_cast.parent_1))
      return false;
    if (!equals(this.selected_1, tmp0_other_with_cast.selected_1))
      return false;
    return true;
  };
  function Child(parent, selected) {
    CSSSelector.call(this);
    this.parent_1 = parent;
    this.selected_1 = selected;
  }
  Child.prototype.get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  Child.prototype.get_selected_c3i7q4_k$ = function () {
    return this.selected_1;
  };
  Child.prototype.contains_2pzjqz_k$ = function (other) {
    return this.contains_qmwvuj_k$(this, other, listOf([this.parent_1, this.selected_1]));
  };
  Child.prototype.toString = function () {
    return '' + this.parent_1 + ' > ' + this.selected_1;
  };
  Child.prototype.asString_l3f38d_k$ = function () {
    return this.parent_1.asString_l3f38d_k$() + ' > ' + this.selected_1.asString_l3f38d_k$();
  };
  Child.prototype.component1_7eebsc_k$ = function () {
    return this.parent_1;
  };
  Child.prototype.component2_7eebsb_k$ = function () {
    return this.selected_1;
  };
  Child.prototype.copy_vrrz27_k$ = function (parent, selected) {
    return new Child(parent, selected);
  };
  Child.prototype.copy$default_8kyn0w_k$ = function (parent, selected, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = this.parent_1;
    if (!(($mask0 & 2) === 0))
      selected = this.selected_1;
    return this.copy_vrrz27_k$(parent, selected);
  };
  Child.prototype.hashCode = function () {
    var result = hashCode(this.parent_1);
    result = imul(result, 31) + hashCode(this.selected_1) | 0;
    return result;
  };
  Child.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Child))
      return false;
    var tmp0_other_with_cast = other instanceof Child ? other : THROW_CCE();
    if (!equals(this.parent_1, tmp0_other_with_cast.parent_1))
      return false;
    if (!equals(this.selected_1, tmp0_other_with_cast.selected_1))
      return false;
    return true;
  };
  function Sibling(prev, selected) {
    CSSSelector.call(this);
    this.prev_1 = prev;
    this.selected_1 = selected;
  }
  Sibling.prototype.get_prev_wosl18_k$ = function () {
    return this.prev_1;
  };
  Sibling.prototype.get_selected_c3i7q4_k$ = function () {
    return this.selected_1;
  };
  Sibling.prototype.contains_2pzjqz_k$ = function (other) {
    return this.contains_qmwvuj_k$(this, other, listOf([this.prev_1, this.selected_1]));
  };
  Sibling.prototype.toString = function () {
    return '' + this.prev_1 + ' ~ ' + this.selected_1;
  };
  Sibling.prototype.asString_l3f38d_k$ = function () {
    return this.prev_1.asString_l3f38d_k$() + ' ~ ' + this.selected_1.asString_l3f38d_k$();
  };
  Sibling.prototype.component1_7eebsc_k$ = function () {
    return this.prev_1;
  };
  Sibling.prototype.component2_7eebsb_k$ = function () {
    return this.selected_1;
  };
  Sibling.prototype.copy_vrrz27_k$ = function (prev, selected) {
    return new Sibling(prev, selected);
  };
  Sibling.prototype.copy$default_8kyn0w_k$ = function (prev, selected, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      prev = this.prev_1;
    if (!(($mask0 & 2) === 0))
      selected = this.selected_1;
    return this.copy_vrrz27_k$(prev, selected);
  };
  Sibling.prototype.hashCode = function () {
    var result = hashCode(this.prev_1);
    result = imul(result, 31) + hashCode(this.selected_1) | 0;
    return result;
  };
  Sibling.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Sibling))
      return false;
    var tmp0_other_with_cast = other instanceof Sibling ? other : THROW_CCE();
    if (!equals(this.prev_1, tmp0_other_with_cast.prev_1))
      return false;
    if (!equals(this.selected_1, tmp0_other_with_cast.selected_1))
      return false;
    return true;
  };
  function Adjacent(prev, selected) {
    CSSSelector.call(this);
    this.prev_1 = prev;
    this.selected_1 = selected;
  }
  Adjacent.prototype.get_prev_wosl18_k$ = function () {
    return this.prev_1;
  };
  Adjacent.prototype.get_selected_c3i7q4_k$ = function () {
    return this.selected_1;
  };
  Adjacent.prototype.contains_2pzjqz_k$ = function (other) {
    return this.contains_qmwvuj_k$(this, other, listOf([this.prev_1, this.selected_1]));
  };
  Adjacent.prototype.toString = function () {
    return '' + this.prev_1 + ' + ' + this.selected_1;
  };
  Adjacent.prototype.asString_l3f38d_k$ = function () {
    return this.prev_1.asString_l3f38d_k$() + ' + ' + this.selected_1.asString_l3f38d_k$();
  };
  Adjacent.prototype.component1_7eebsc_k$ = function () {
    return this.prev_1;
  };
  Adjacent.prototype.component2_7eebsb_k$ = function () {
    return this.selected_1;
  };
  Adjacent.prototype.copy_vrrz27_k$ = function (prev, selected) {
    return new Adjacent(prev, selected);
  };
  Adjacent.prototype.copy$default_8kyn0w_k$ = function (prev, selected, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      prev = this.prev_1;
    if (!(($mask0 & 2) === 0))
      selected = this.selected_1;
    return this.copy_vrrz27_k$(prev, selected);
  };
  Adjacent.prototype.hashCode = function () {
    var result = hashCode(this.prev_1);
    result = imul(result, 31) + hashCode(this.selected_1) | 0;
    return result;
  };
  Adjacent.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Adjacent))
      return false;
    var tmp0_other_with_cast = other instanceof Adjacent ? other : THROW_CCE();
    if (!equals(this.prev_1, tmp0_other_with_cast.prev_1))
      return false;
    if (!equals(this.selected_1, tmp0_other_with_cast.selected_1))
      return false;
    return true;
  };
  function get_$stableprop_9() {
    return 0;
  }
  function get_$stableprop_10() {
    return 8;
  }
  function get_$stableprop_11() {
    return 8;
  }
  function get_$stableprop_12() {
    return 8;
  }
  function get_$stableprop_13() {
    return 8;
  }
  function get_$stableprop_14() {
    return 0;
  }
  function get_$stableprop_15() {
    return 0;
  }
  function Lang(langCode) {
    PseudoClassInternal.call(this, 'lang');
    this.langCode_1 = langCode;
    this.$stable_2 = 0;
  }
  Lang.prototype.get_langCode_ciluis_k$ = function () {
    return this.langCode_1;
  };
  Lang.prototype.argsStr_cb0nvw_k$ = function () {
    return this.langCode_1;
  };
  function NthChild(nth) {
    PseudoClassInternal.call(this, 'nth-child');
    this.nth_1 = nth;
    this.$stable_2 = 8;
  }
  NthChild.prototype.get_nth_18iznr_k$ = function () {
    return this.nth_1;
  };
  NthChild.prototype.argsStr_cb0nvw_k$ = function () {
    return '' + this.nth_1;
  };
  function NthLastChild(nth) {
    PseudoClassInternal.call(this, 'nth-last-child');
    this.nth_1 = nth;
    this.$stable_2 = 8;
  }
  NthLastChild.prototype.get_nth_18iznr_k$ = function () {
    return this.nth_1;
  };
  NthLastChild.prototype.argsStr_cb0nvw_k$ = function () {
    return '' + this.nth_1;
  };
  function NthOfType(nth) {
    PseudoClassInternal.call(this, 'nth-of-type');
    this.nth_1 = nth;
    this.$stable_2 = 8;
  }
  NthOfType.prototype.get_nth_18iznr_k$ = function () {
    return this.nth_1;
  };
  NthOfType.prototype.argsStr_cb0nvw_k$ = function () {
    return '' + this.nth_1;
  };
  function NthLastOfType(nth) {
    PseudoClassInternal.call(this, 'nth-last-of-type');
    this.nth_1 = nth;
    this.$stable_2 = 8;
  }
  NthLastOfType.prototype.get_nth_18iznr_k$ = function () {
    return this.nth_1;
  };
  NthLastOfType.prototype.argsStr_cb0nvw_k$ = function () {
    return '' + this.nth_1;
  };
  function Host(selector) {
    PseudoClassInternal.call(this, 'host');
    this.selector_1 = selector;
    this.$stable_2 = 0;
  }
  Host.prototype.get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  Host.prototype.contains_2pzjqz_k$ = function (other) {
    return this.contains_qmwvuj_k$(this, other, listOf_0(this.selector_1));
  };
  Host.prototype.argsStr_cb0nvw_k$ = function () {
    return this.selector_1.asString_l3f38d_k$();
  };
  function Not(selector) {
    PseudoClassInternal.call(this, 'not');
    this.selector_1 = selector;
    this.$stable_2 = 0;
  }
  Not.prototype.get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  Not.prototype.contains_2pzjqz_k$ = function (other) {
    return this.contains_qmwvuj_k$(this, other, listOf_0(this.selector_1));
  };
  Not.prototype.argsStr_cb0nvw_k$ = function () {
    return '' + this.selector_1;
  };
  function PseudoClassInternal(name) {
    CSSSelector.call(this);
    this.name_1 = name;
  }
  PseudoClassInternal.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  PseudoClassInternal.prototype.equals = function (other) {
    var tmp;
    if (other instanceof PseudoClassInternal) {
      tmp = this.name_1 === other.name_1 ? this.argsStr_cb0nvw_k$() == other.argsStr_cb0nvw_k$() : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  PseudoClassInternal.prototype.argsStr_cb0nvw_k$ = function () {
    return null;
  };
  PseudoClassInternal.prototype.toString = function () {
    var tmp0_safe_receiver = this.argsStr_cb0nvw_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'org.jetbrains.compose.web.css.PseudoClassInternal.toString.<anonymous>' call
      tmp$ret$0 = '(' + tmp0_safe_receiver + ')';
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return ':' + this.name_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function get_$stableprop_16() {
    return 0;
  }
  function Slotted(selector) {
    PseudoElementInternal.call(this, 'slotted');
    this.selector_1 = selector;
    this.$stable_2 = 0;
  }
  Slotted.prototype.get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  Slotted.prototype.contains_2pzjqz_k$ = function (other) {
    return this.contains_qmwvuj_k$(this, other, listOf_0(this.selector_1));
  };
  Slotted.prototype.argsStr_cb0nvw_k$ = function () {
    return this.selector_1.asString_l3f38d_k$();
  };
  function PseudoElementInternal(name) {
    CSSSelector.call(this);
    this.name_1 = name;
  }
  PseudoElementInternal.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  PseudoElementInternal.prototype.equals = function (other) {
    var tmp;
    if (other instanceof PseudoElementInternal) {
      tmp = this.name_1 === other.name_1 ? this.argsStr_cb0nvw_k$() == other.argsStr_cb0nvw_k$() : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  PseudoElementInternal.prototype.argsStr_cb0nvw_k$ = function () {
    return null;
  };
  PseudoElementInternal.prototype.toString = function () {
    var tmp0_safe_receiver = this.argsStr_cb0nvw_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'org.jetbrains.compose.web.css.PseudoElementInternal.toString.<anonymous>' call
      tmp$ret$0 = '(' + tmp0_safe_receiver + ')';
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return '::' + this.name_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  var properties_initialized_StyleSheetBuilder_kt_uqx9b1;
  function init_properties_StyleSheetBuilder_kt_hdubw9() {
    if (properties_initialized_StyleSheetBuilder_kt_uqx9b1) {
    } else {
      properties_initialized_StyleSheetBuilder_kt_uqx9b1 = true;
      Universal = new RawSelector('*');
    }
  }
  function get_selectorScope() {
    init_properties_CSSSelectors_kt_i4uymh();
    return selectorScope;
  }
  var selectorScope;
  var Operator_Equals_instance;
  var Operator_ListContains_instance;
  var Operator_Hyphened_instance;
  var Operator_Prefixed_instance;
  var Operator_Suffixed_instance;
  var Operator_Contains_instance;
  function values_1() {
    return [Operator_Equals_getInstance(), Operator_ListContains_getInstance(), Operator_Hyphened_getInstance(), Operator_Prefixed_getInstance(), Operator_Suffixed_getInstance(), Operator_Contains_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Equals':
        return Operator_Equals_getInstance();
      case 'ListContains':
        return Operator_ListContains_getInstance();
      case 'Hyphened':
        return Operator_Hyphened_getInstance();
      case 'Prefixed':
        return Operator_Prefixed_getInstance();
      case 'Suffixed':
        return Operator_Suffixed_getInstance();
      case 'Contains':
        return Operator_Contains_getInstance();
      default:
        Operator_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Operator_entriesInitialized;
  function Operator_initEntries() {
    if (Operator_entriesInitialized)
      return Unit_getInstance();
    Operator_entriesInitialized = true;
    Operator_Equals_instance = new Operator('Equals', 0, '=');
    Operator_ListContains_instance = new Operator('ListContains', 1, '~=');
    Operator_Hyphened_instance = new Operator('Hyphened', 2, '|=');
    Operator_Prefixed_instance = new Operator('Prefixed', 3, '^=');
    Operator_Suffixed_instance = new Operator('Suffixed', 4, '$=');
    Operator_Contains_instance = new Operator('Contains', 5, '*=');
  }
  function Operator(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  Operator.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function get_$stableprop_17() {
    return 0;
  }
  function Operator_Equals_getInstance() {
    Operator_initEntries();
    return Operator_Equals_instance;
  }
  function Operator_ListContains_getInstance() {
    Operator_initEntries();
    return Operator_ListContains_instance;
  }
  function Operator_Hyphened_getInstance() {
    Operator_initEntries();
    return Operator_Hyphened_instance;
  }
  function Operator_Prefixed_getInstance() {
    Operator_initEntries();
    return Operator_Prefixed_instance;
  }
  function Operator_Suffixed_getInstance() {
    Operator_initEntries();
    return Operator_Suffixed_instance;
  }
  function Operator_Contains_getInstance() {
    Operator_initEntries();
    return Operator_Contains_instance;
  }
  function get_$stableprop_18() {
    return 0;
  }
  function get_$stableprop_19() {
    return 0;
  }
  function Attribute_0() {
    Attribute_instance = this;
    this.$stable_1 = 0;
  }
  var Attribute_instance;
  function Attribute_getInstance() {
    if (Attribute_instance == null)
      new Attribute_0();
    return Attribute_instance;
  }
  function PseudoClass() {
    PseudoClass_instance = this;
    this.anyLink_1 = get_selectorScope().get_anyLink_cofd2b_k$();
    this.link_1 = get_selectorScope().get_link_wopumb_k$();
    this.visited_1 = get_selectorScope().get_visited_8zg8qp_k$();
    this.localLink_1 = get_selectorScope().get_localLink_bf63s4_k$();
    this.target_1 = get_selectorScope().get_target_juba8q_k$();
    this.targetWithin_1 = get_selectorScope().get_targetWithin_2o3zvf_k$();
    this.scope_1 = get_selectorScope().get_scope_iyfcq3_k$();
    this.hover_1 = get_selectorScope().get_hover_islez7_k$();
    this.active_1 = get_selectorScope().get_active_avldsf_k$();
    this.focus_1 = get_selectorScope().get_focus_irhg33_k$();
    this.focusVisible_1 = get_selectorScope().get_focusVisible_5vnmwz_k$();
    this.playing_1 = get_selectorScope().get_playing_6wau9n_k$();
    this.paused_1 = get_selectorScope().get_paused_hy6yif_k$();
    this.autofill_1 = get_selectorScope().get_autofill_801dad_k$();
    this.enabled_1 = get_selectorScope().get_enabled_pcr8o8_k$();
    this.disabled_1 = get_selectorScope().get_disabled_rbmjej_k$();
    this.readOnly_1 = get_selectorScope().get_readOnly_ovku97_k$();
    this.readWrite_1 = get_selectorScope().get_readWrite_a0tpds_k$();
    this.placeholderShown_1 = get_selectorScope().get_placeholderShown_1kc3x5_k$();
    this.default_1 = get_selectorScope().get_default_qtagd4_k$();
    this.checked_1 = get_selectorScope().get_checked_djib3y_k$();
    this.indeterminate_1 = get_selectorScope().get_indeterminate_997h5e_k$();
    this.blank_1 = get_selectorScope().get_blank_ip8b3f_k$();
    this.valid_1 = get_selectorScope().get_valid_j01e4z_k$();
    this.invalid_1 = get_selectorScope().get_invalid_xocxse_k$();
    this.inRange_1 = get_selectorScope().get_invalid_xocxse_k$();
    this.outOfRange_1 = get_selectorScope().get_outOfRange_z0zuv5_k$();
    this.required_1 = get_selectorScope().get_required_wq3z3c_k$();
    this.optional_1 = get_selectorScope().get_optional_x3zcnr_k$();
    this.userInvalid_1 = get_selectorScope().get_userInvalid_tptv3x_k$();
    this.root_1 = get_selectorScope().get_root_wott0r_k$();
    this.empty_1 = get_selectorScope().get_empty_iqwn50_k$();
    this.first_1 = get_selectorScope().get_first_irdx8n_k$();
    this.firstChild_1 = get_selectorScope().get_firstChild_n9lgdn_k$();
    this.lastChild_1 = get_selectorScope().get_lastChild_tniydf_k$();
    this.onlyChild_1 = get_selectorScope().get_onlyChild_cxh5if_k$();
    this.firstOfType_1 = get_selectorScope().get_firstOfType_5b9t60_k$();
    this.lastOfType_1 = get_selectorScope().get_lastOfType_9s7uy8_k$();
    this.onlyOfType_1 = get_selectorScope().get_onlyOfType_jptu62_k$();
    this.host_1 = get_selectorScope().get_host_wonf8x_k$();
    this.defined_1 = get_selectorScope().get_defined_qtfew0_k$();
    this.left_1 = get_selectorScope().get_left_woprgw_k$();
    this.right_1 = get_selectorScope().get_right_ixz7xv_k$();
    this.$stable_1 = 0;
  }
  PseudoClass.prototype.get_anyLink_cofd2b_k$ = function () {
    return this.anyLink_1;
  };
  PseudoClass.prototype.get_link_wopumb_k$ = function () {
    return this.link_1;
  };
  PseudoClass.prototype.get_visited_8zg8qp_k$ = function () {
    return this.visited_1;
  };
  PseudoClass.prototype.get_localLink_bf63s4_k$ = function () {
    return this.localLink_1;
  };
  PseudoClass.prototype.get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  PseudoClass.prototype.get_targetWithin_2o3zvf_k$ = function () {
    return this.targetWithin_1;
  };
  PseudoClass.prototype.get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  PseudoClass.prototype.get_hover_islez7_k$ = function () {
    return this.hover_1;
  };
  PseudoClass.prototype.get_active_avldsf_k$ = function () {
    return this.active_1;
  };
  PseudoClass.prototype.get_focus_irhg33_k$ = function () {
    return this.focus_1;
  };
  PseudoClass.prototype.get_focusVisible_5vnmwz_k$ = function () {
    return this.focusVisible_1;
  };
  PseudoClass.prototype.get_playing_6wau9n_k$ = function () {
    return this.playing_1;
  };
  PseudoClass.prototype.get_paused_hy6yif_k$ = function () {
    return this.paused_1;
  };
  PseudoClass.prototype.get_autofill_801dad_k$ = function () {
    return this.autofill_1;
  };
  PseudoClass.prototype.get_enabled_pcr8o8_k$ = function () {
    return this.enabled_1;
  };
  PseudoClass.prototype.get_disabled_rbmjej_k$ = function () {
    return this.disabled_1;
  };
  PseudoClass.prototype.get_readOnly_ovku97_k$ = function () {
    return this.readOnly_1;
  };
  PseudoClass.prototype.get_readWrite_a0tpds_k$ = function () {
    return this.readWrite_1;
  };
  PseudoClass.prototype.get_placeholderShown_1kc3x5_k$ = function () {
    return this.placeholderShown_1;
  };
  PseudoClass.prototype.get_default_qtagd4_k$ = function () {
    return this.default_1;
  };
  PseudoClass.prototype.get_checked_djib3y_k$ = function () {
    return this.checked_1;
  };
  PseudoClass.prototype.get_indeterminate_997h5e_k$ = function () {
    return this.indeterminate_1;
  };
  PseudoClass.prototype.get_blank_ip8b3f_k$ = function () {
    return this.blank_1;
  };
  PseudoClass.prototype.get_valid_j01e4z_k$ = function () {
    return this.valid_1;
  };
  PseudoClass.prototype.get_invalid_xocxse_k$ = function () {
    return this.invalid_1;
  };
  PseudoClass.prototype.get_inRange_x4kdv3_k$ = function () {
    return this.inRange_1;
  };
  PseudoClass.prototype.get_outOfRange_z0zuv5_k$ = function () {
    return this.outOfRange_1;
  };
  PseudoClass.prototype.get_required_wq3z3c_k$ = function () {
    return this.required_1;
  };
  PseudoClass.prototype.get_optional_x3zcnr_k$ = function () {
    return this.optional_1;
  };
  PseudoClass.prototype.get_userInvalid_tptv3x_k$ = function () {
    return this.userInvalid_1;
  };
  PseudoClass.prototype.get_root_wott0r_k$ = function () {
    return this.root_1;
  };
  PseudoClass.prototype.get_empty_iqwn50_k$ = function () {
    return this.empty_1;
  };
  PseudoClass.prototype.get_first_irdx8n_k$ = function () {
    return this.first_1;
  };
  PseudoClass.prototype.get_firstChild_n9lgdn_k$ = function () {
    return this.firstChild_1;
  };
  PseudoClass.prototype.get_lastChild_tniydf_k$ = function () {
    return this.lastChild_1;
  };
  PseudoClass.prototype.get_onlyChild_cxh5if_k$ = function () {
    return this.onlyChild_1;
  };
  PseudoClass.prototype.get_firstOfType_5b9t60_k$ = function () {
    return this.firstOfType_1;
  };
  PseudoClass.prototype.get_lastOfType_9s7uy8_k$ = function () {
    return this.lastOfType_1;
  };
  PseudoClass.prototype.get_onlyOfType_jptu62_k$ = function () {
    return this.onlyOfType_1;
  };
  PseudoClass.prototype.get_host_wonf8x_k$ = function () {
    return this.host_1;
  };
  PseudoClass.prototype.get_defined_qtfew0_k$ = function () {
    return this.defined_1;
  };
  PseudoClass.prototype.get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  PseudoClass.prototype.get_right_ixz7xv_k$ = function () {
    return this.right_1;
  };
  var PseudoClass_instance;
  function PseudoClass_getInstance() {
    if (PseudoClass_instance == null)
      new PseudoClass();
    return PseudoClass_instance;
  }
  function PseudoElement() {
    PseudoElement_instance = this;
    this.after_1 = get_selectorScope().get_after_iol2gj_k$();
    this.before_1 = get_selectorScope().get_before_bdhrwo_k$();
    this.cue_1 = get_selectorScope().get_cue_18j7sm_k$();
    this.cueRegion_1 = get_selectorScope().get_cueRegion_qinivy_k$();
    this.firstLetter_1 = get_selectorScope().get_firstLetter_6qe5bn_k$();
    this.firstLine_1 = get_selectorScope().get_firstLine_apktuj_k$();
    this.fileSelectorButton_1 = get_selectorScope().get_fileSelectorButton_ul3x92_k$();
    this.selection_1 = get_selectorScope().get_selection_jv4aal_k$();
    this.$stable_1 = 0;
  }
  PseudoElement.prototype.get_after_iol2gj_k$ = function () {
    return this.after_1;
  };
  PseudoElement.prototype.get_before_bdhrwo_k$ = function () {
    return this.before_1;
  };
  PseudoElement.prototype.get_cue_18j7sm_k$ = function () {
    return this.cue_1;
  };
  PseudoElement.prototype.get_cueRegion_qinivy_k$ = function () {
    return this.cueRegion_1;
  };
  PseudoElement.prototype.get_firstLetter_6qe5bn_k$ = function () {
    return this.firstLetter_1;
  };
  PseudoElement.prototype.get_firstLine_apktuj_k$ = function () {
    return this.firstLine_1;
  };
  PseudoElement.prototype.get_fileSelectorButton_ul3x92_k$ = function () {
    return this.fileSelectorButton_1;
  };
  PseudoElement.prototype.get_selection_jv4aal_k$ = function () {
    return this.selection_1;
  };
  var PseudoElement_instance;
  function PseudoElement_getInstance() {
    if (PseudoElement_instance == null)
      new PseudoElement();
    return PseudoElement_instance;
  }
  function get_$stableprop_20() {
    return 0;
  }
  function CSSSelector() {
    this.$stable_1 = 0;
  }
  CSSSelector.prototype.contains_2pzjqz_k$ = function (other) {
    return this === other;
  };
  CSSSelector.prototype.contains_qmwvuj_k$ = function (that, other, children) {
    var tmp;
    if (that === other) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(children, Collection)) {
          tmp_0 = children.isEmpty_y1axqb_k$();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator = children.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          var tmp$ret$1;
          // Inline function 'org.jetbrains.compose.web.css.selectors.CSSSelector.contains.<anonymous>' call
          tmp$ret$1 = element.contains_2pzjqz_k$(other);
          if (tmp$ret$1) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  CSSSelector.prototype.asString_l3f38d_k$ = function () {
    return toString(this);
  };
  function FunctionalImpl_init_$Init$(a, b, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      a = null;
    if (!(($mask0 & 2) === 0))
      b = null;
    FunctionalImpl.call($this, a, b);
    return $this;
  }
  function FunctionalImpl_init_$Create$(a, b, $mask0, $marker) {
    return FunctionalImpl_init_$Init$(a, b, $mask0, $marker, Object.create(FunctionalImpl.prototype));
  }
  function FunctionalImpl(a, b) {
    this.a_1 = a;
    this.b_1 = b;
  }
  FunctionalImpl.prototype.get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  FunctionalImpl.prototype.get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  FunctionalImpl.prototype.toString = function () {
    return (!(this.a_1 == null) ? !(this.b_1 == null) : false) ? '' + this.a_1 + 'n+' + this.b_1 : !(this.a_1 == null) ? '' + this.a_1 + 'n' : !(this.b_1 == null) ? '' + this.b_1 : '';
  };
  FunctionalImpl.prototype.component1_7eebsc_k$ = function () {
    return this.a_1;
  };
  FunctionalImpl.prototype.component2_7eebsb_k$ = function () {
    return this.b_1;
  };
  FunctionalImpl.prototype.copy_l9lgz5_k$ = function (a, b) {
    return new FunctionalImpl(a, b);
  };
  FunctionalImpl.prototype.copy$default_kx4b9o_k$ = function (a, b, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      a = this.a_1;
    if (!(($mask0 & 2) === 0))
      b = this.b_1;
    return this.copy_l9lgz5_k$(a, b);
  };
  FunctionalImpl.prototype.hashCode = function () {
    var result = this.a_1 == null ? 0 : this.a_1;
    result = imul(result, 31) + (this.b_1 == null ? 0 : this.b_1) | 0;
    return result;
  };
  FunctionalImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FunctionalImpl))
      return false;
    var tmp0_other_with_cast = other instanceof FunctionalImpl ? other : THROW_CCE();
    if (!(this.a_1 == tmp0_other_with_cast.a_1))
      return false;
    if (!(this.b_1 == tmp0_other_with_cast.b_1))
      return false;
    return true;
  };
  function OddImpl() {
    OddImpl_instance = this;
  }
  OddImpl.prototype.toString = function () {
    return 'odd';
  };
  var OddImpl_instance;
  function OddImpl_getInstance() {
    if (OddImpl_instance == null)
      new OddImpl();
    return OddImpl_instance;
  }
  function EvenImpl() {
    EvenImpl_instance = this;
  }
  EvenImpl.prototype.toString = function () {
    return 'even';
  };
  var EvenImpl_instance;
  function EvenImpl_getInstance() {
    if (EvenImpl_instance == null)
      new EvenImpl();
    return EvenImpl_instance;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.Odd_1 = OddImpl_getInstance();
    this.Even_1 = EvenImpl_getInstance();
  }
  Companion_1.prototype.get_Odd_18jn16_k$ = function () {
    return this.Odd_1;
  };
  Companion_1.prototype.get_Even_wo17k3_k$ = function () {
    return this.Even_1;
  };
  Companion_1.prototype.Functional_qn1hcx_k$ = function (a, b) {
    return new FunctionalImpl(a, b);
  };
  Companion_1.prototype.Functional$default_q1nomy_k$ = function (a, b, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      a = null;
    if (!(($mask0 & 2) === 0))
      b = null;
    return this.Functional_qn1hcx_k$(a, b);
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Nth() {
    Companion_getInstance_2();
  }
  function selectorScope$1() {
  }
  var properties_initialized_CSSSelectors_kt_ttgqoj;
  function init_properties_CSSSelectors_kt_i4uymh() {
    if (properties_initialized_CSSSelectors_kt_ttgqoj) {
    } else {
      properties_initialized_CSSSelectors_kt_ttgqoj = true;
      selectorScope = new selectorScope$1();
    }
  }
  function TagElement$composable(elementBuilder, applyAttrs, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1594897193);
    sourceInformation($composer_0, 'C(TagElement$composable)P(2)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(elementBuilder) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(applyAttrs) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1594897193, $dirty, -1, 'org.jetbrains.compose.web.dom.TagElement$composable (Base.kt:106)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_1 = tmp2_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_1, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
        tmp$ret$0 = new ElementScopeImpl();
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      tmp$ret$1 = tmp;
      tmp$ret$2 = tmp$ret$1;
      var tmp_0 = tmp$ret$2;
      tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      var scope = tmp$ret$4;
      var refEffect = null;
      // Inline function 'org.jetbrains.compose.web.dom.ComposeDomNode$composable' call
      var tmp3_ComposeDomNode$composable = $composer_0;
      var $composer_2 = tmp3_ComposeDomNode$composable;
      $composer_2.startNode_htbzn7_k$();
      if ($composer_2.get_inserting_25mlsw_k$()) {
        var tmp_1 = $composer_2;
        tmp_1.createNode_p4ouwd_k$(TagElement$composable$lambda(elementBuilder, scope));
      } else {
        $composer_2.useNode_inlzo8_k$();
      }
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var tmp4__anonymous__pkmkx7 = _SkippableUpdater___init__impl__4ft0t9($composer_2);
      var tmp5__anonymous__kpxxpo = $composer_2;
      var tmp6__anonymous__fv9ai5 = 0;
      var $composer_3 = tmp5__anonymous__kpxxpo;
      $composer_3.startReplaceableGroup_rp6air_k$(-1674465861);
      var $dirty_0 = tmp6__anonymous__fv9ai5;
      if ((tmp6__anonymous__fv9ai5 & 14) === 0)
        $dirty_0 = $dirty_0 | ($composer_3.changed_ga7h3f_k$(_SkippableUpdater___get_composer__impl__6t7yne(tmp4__anonymous__pkmkx7)) ? 4 : 2);
      if (!(($dirty_0 & 91) === 18) ? true : !$composer_3.get_skipping_3owdve_k$()) {
        var attrsScope = AttrsScopeBuilder_init_$Create$(null, 1, null);
        var tmp0_safe_receiver = applyAttrs;
        if (tmp0_safe_receiver == null)
          null;
        else
          tmp0_safe_receiver(attrsScope);
        refEffect = attrsScope.get_refEffect_m4bgrp_k$();
        // Inline function 'androidx.compose.runtime.SkippableUpdater.update' call
        _SkippableUpdater___get_composer__impl__6t7yne(tmp4__anonymous__pkmkx7).startReplaceableGroup_rp6air_k$(509942095);
        // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne(tmp4__anonymous__pkmkx7));
        var tmp_2 = attrsScope.get_classes_fds01p_k$();
        Updater__set_impl_v7kwss(tmp0__anonymous__q1qw7t, tmp_2, DomElementWrapper$updateClasses$ref());
        var tmp_3 = attrsScope.get_styleScope_i1qedw_k$();
        Updater__set_impl_v7kwss(tmp0__anonymous__q1qw7t, tmp_3, DomElementWrapper$updateStyleDeclarations$ref());
        var tmp_4 = attrsScope.collect_fp9wdm_k$();
        Updater__set_impl_v7kwss(tmp0__anonymous__q1qw7t, tmp_4, DomElementWrapper$updateAttrs$ref());
        var tmp_5 = attrsScope.get_eventsListenerScopeBuilder_j7bhoj_k$().collectListeners_sutf4b_k$();
        Updater__set_impl_v7kwss(tmp0__anonymous__q1qw7t, tmp_5, DomElementWrapper$updateEventListeners$ref());
        var tmp_6 = attrsScope.get_propertyUpdates_qy3v4c_k$();
        Updater__set_impl_v7kwss(tmp0__anonymous__q1qw7t, tmp_6, DomElementWrapper$updateProperties$ref());
        _SkippableUpdater___get_composer__impl__6t7yne(tmp4__anonymous__pkmkx7).endReplaceableGroup_er37p7_k$();
      } else {
        $composer_3.skipToGroupEnd_lhns3f_k$();
      }
      $composer_3.endReplaceableGroup_er37p7_k$();
      $composer_2.startReplaceableGroup_rp6air_k$(2058660585);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var tmp7__anonymous__b0knam = $composer_2;
      var tmp8__anonymous__65w033 = 8;
      var $composer_4 = tmp7__anonymous__b0knam;
      $composer_4.startReplaceableGroup_rp6air_k$(-573984490);
      var $dirty_1 = tmp8__anonymous__65w033;
      if ((tmp8__anonymous__65w033 & 14) === 0)
        $dirty_1 = $dirty_1 | ($composer_4.changed_ga7h3f_k$(scope) ? 4 : 2);
      if (!(($dirty_1 & 91) === 18) ? true : !$composer_4.get_skipping_3owdve_k$()) {
        var tmp0_safe_receiver_0 = content;
        $composer_0.startReplaceableGroup_rp6air_k$(-1128047990);
        var tmp0_group = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0(scope, $composer_4, 14 & $dirty_1 | 112 & $dirty >> 3);
        $composer_0.endReplaceableGroup_er37p7_k$();
      } else {
        $composer_4.skipToGroupEnd_lhns3f_k$();
      }
      $composer_4.endReplaceableGroup_er37p7_k$();
      $composer_2.endReplaceableGroup_er37p7_k$();
      $composer_2.endNode_3mkr10_k$();
      var tmp0_safe_receiver_1 = refEffect;
      var tmp_7;
      if (tmp0_safe_receiver_1 == null) {
        tmp_7 = null;
      } else {
        var tmp$ret$5;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        DisposableEffect$composable(null, TagElement$composable$lambda_0(tmp0_safe_receiver_1, scope), $composer_0, 6);
        tmp$ret$5 = Unit_getInstance();
        tmp_7 = Unit_getInstance();
      }
      var tmp0_group_0 = tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(TagElement$composable$lambda_1(elementBuilder, applyAttrs, content, $changed));
    }
  }
  function ComposeDomNode$composable(factory, elementScope, attrsSkippableUpdate, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startNode_htbzn7_k$();
    if ($composer_0.get_inserting_25mlsw_k$()) {
      var tmp = $composer_0;
      tmp.createNode_p4ouwd_k$(ComposeDomNode$composable$lambda(factory));
    } else {
      $composer_0.useNode_inlzo8_k$();
    }
    attrsSkippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_0)), $composer_0, 112 & $changed >> 3);
    $composer_0.startReplaceableGroup_rp6air_k$(2058660585);
    content(elementScope, $composer_0, 8 & $changed >> 3 | 14 & $changed >> 3 | 112 & $changed >> 6);
    $composer_0.endReplaceableGroup_er37p7_k$();
    $composer_0.endNode_3mkr10_k$();
  }
  function _set_currentListeners__i9i2pb($this, _set____db54di) {
    $this.currentListeners_1 = _set____db54di;
  }
  function _get_currentListeners__atm6dh($this) {
    return $this.currentListeners_1;
  }
  function DomElementWrapper(node) {
    DomNodeWrapper.call(this, node);
    this.node_2 = node;
    this.currentListeners_1 = emptyList();
  }
  DomElementWrapper.prototype.get_node_wor8sr_k$ = function () {
    return this.node_2;
  };
  DomElementWrapper.prototype.updateEventListeners_fe4hpu_k$ = function (list) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.currentListeners_1;
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.node_2.removeEventListener(element.get_name_woqyms_k$(), element);
    }
    this.currentListeners_1 = list;
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.currentListeners_1;
    var tmp0_iterator_0 = tmp1_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.node_2.addEventListener(element_0.get_name_woqyms_k$(), element_0);
    }
  };
  DomElementWrapper.prototype.updateProperties_dmlod0_k$ = function (applicators) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = applicators.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateProperties.<anonymous>' call
      var applicator = element.component1_7eebsc_k$();
      var item = element.component2_7eebsb_k$();
      applicator(this.node_2, item);
    }
  };
  DomElementWrapper.prototype.updateStyleDeclarations_v4fs0b_k$ = function (styleApplier) {
    var tmp0_subject = this.node_2;
    var tmp;
    if (tmp0_subject instanceof HTMLElement) {
      tmp = true;
    } else {
      tmp = tmp0_subject instanceof SVGElement;
    }
    if (tmp) {
      this.node_2.removeAttribute('style');
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = this.node_2;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_unsafeCast;
      tmp$ret$1 = tmp$ret$0;
      var style = tmp$ret$1.style;
      // Inline function 'kotlin.collections.forEach' call
      var tmp1_forEach = styleApplier.get_properties_zhllqc_k$();
      var tmp0_iterator = tmp1_forEach.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name = element.component1_7eebsc_k$();
        var value = element.component2_7eebsb_k$();
        style.setProperty(name, toString(value));
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp2_forEach = styleApplier.get_variables_75f0zy_k$();
      var tmp0_iterator_0 = tmp2_forEach.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name_0 = element_0.component1_7eebsc_k$();
        var value_0 = element_0.component2_7eebsb_k$();
        style.setProperty(name_0, toString(value_0));
      }
    }
  };
  DomElementWrapper.prototype.updateAttrs_5dmv5p_k$ = function (attrs) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.node_2.getAttributeNames();
    var indexedObject = tmp0_forEach;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      var tmp0_subject = element;
      switch (tmp0_subject) {
        case 'style':
        case 'class':
          break;
        default:
          this.node_2.removeAttribute(element);
          ;
          break;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = attrs.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      this.node_2.setAttribute(element_0.get_key_18j28a_k$(), element_0.get_value_j01efc_k$());
    }
  };
  DomElementWrapper.prototype.updateClasses_1n4c6v_k$ = function (classes) {
    this.node_2.removeAttribute('class');
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$0 = !classes.isEmpty_y1axqb_k$();
    if (tmp$ret$0) {
      var tmp = this.node_2.classList;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$1 = copyToArray(classes);
      (function () {
        var $externalVarargReceiverTmp = tmp;
        return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].slice.call(tmp$ret$1.slice()));
      }.call(this));
    }
  };
  function TagElement$composable$lambda($elementBuilder, $scope) {
    return function () {
      var tmp$ret$0;
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var node = $elementBuilder.create_md4cuc_k$();
      $scope.set_element_65f0vd_k$(node);
      tmp$ret$0 = new DomElementWrapper(node);
      return tmp$ret$0;
    };
  }
  function DomElementWrapper$updateClasses$ref() {
    var l = function (p0, p1) {
      p0.updateClasses_1n4c6v_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateClasses';
    return l;
  }
  function DomElementWrapper$updateStyleDeclarations$ref() {
    var l = function (p0, p1) {
      p0.updateStyleDeclarations_v4fs0b_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateStyleDeclarations';
    return l;
  }
  function DomElementWrapper$updateAttrs$ref() {
    var l = function (p0, p1) {
      p0.updateAttrs_5dmv5p_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateAttrs';
    return l;
  }
  function DomElementWrapper$updateEventListeners$ref() {
    var l = function (p0, p1) {
      p0.updateEventListeners_fe4hpu_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateEventListeners';
    return l;
  }
  function DomElementWrapper$updateProperties$ref() {
    var l = function (p0, p1) {
      p0.updateProperties_dmlod0_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateProperties';
    return l;
  }
  function TagElement$composable$lambda_0($tmp0_safe_receiver, $scope) {
    return function ($this$DisposableEffect) {
      return $tmp0_safe_receiver($this$DisposableEffect, $scope.get_element_q8gf71_k$());
    };
  }
  function TagElement$composable$lambda_1($elementBuilder, $applyAttrs, $content, $$changed) {
    return function ($composer, $force) {
      TagElement$composable($elementBuilder, $applyAttrs, $content, $composer, $$changed | 1);
      return Unit_getInstance();
    };
  }
  function ComposeDomNode$composable$lambda($factory) {
    return function () {
      return $factory();
    };
  }
  function ElementScope() {
  }
  function DomEffectScope() {
  }
  function ElementScopeImpl() {
    ElementScopeBase.call(this);
  }
  ElementScopeImpl.prototype.set_element_65f0vd_k$ = function (_set____db54di) {
    this.element_1 = _set____db54di;
  };
  ElementScopeImpl.prototype.get_element_q8gf71_k$ = function () {
    var tmp = this.element_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('element');
    }
  };
  ElementScopeImpl.prototype.get_scopeElement_mn83kc_k$ = function (_this__u8e3s4) {
    return this.get_element_q8gf71_k$();
  };
  function _set_nextDisposableDomEffectKey__ral2d4($this, _set____db54di) {
    $this.nextDisposableDomEffectKey_1 = _set____db54di;
  }
  function _get_nextDisposableDomEffectKey__spesrw($this) {
    return $this.nextDisposableDomEffectKey_1;
  }
  function get_$stableprop_21() {
    return 8;
  }
  function ElementScopeBase$DisposableRefEffect$composable$lambda($effect, this$0) {
    return function ($this$DisposableEffect) {
      return $effect($this$DisposableEffect, this$0.get_element_q8gf71_k$());
    };
  }
  function ElementScopeBase$DomSideEffect$composable$lambda($changed, $effect, $effectHolder, this$0) {
    return function () {
      if ($changed)
        $effect($effectHolder, this$0.get_element_q8gf71_k$());
      return Unit_getInstance();
    };
  }
  function ElementScopeBase() {
    this.nextDisposableDomEffectKey_1 = 0;
    this.$stable_1 = 8;
  }
  ElementScopeBase.prototype.DisposableRefEffect_pfoiu9_k$ = function (key, effect) {
    illegalDecoyCallException('DisposableRefEffect');
  };
  ElementScopeBase.prototype.DomSideEffect_e28ho4_k$ = function (key, effect) {
    illegalDecoyCallException('DomSideEffect');
  };
  ElementScopeBase.prototype.DomSideEffect_gxh983_k$ = function (effect) {
    illegalDecoyCallException('DomSideEffect');
  };
  ElementScopeBase.prototype.DisposableRefEffect$composable_921rlw_k$ = function (key, effect, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(342057060);
    sourceInformation($composer_0, 'C(DisposableRefEffect$composable)P(1)');
    if (isTraceInProgress()) {
      traceEventStart(342057060, $changed, -1, 'org.jetbrains.compose.web.dom.ElementScopeBase.DisposableRefEffect$composable (ElementScope.kt:91)');
    }
    DisposableEffect$composable(key, ElementScopeBase$DisposableRefEffect$composable$lambda(effect, this), $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  };
  ElementScopeBase.prototype.DomSideEffect$composable_hsfl2t_k$ = function (key, effect, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(354425546);
    sourceInformation($composer_0, 'C(DomSideEffect$composable)P(1)');
    if (isTraceInProgress()) {
      traceEventStart(354425546, $changed, -1, 'org.jetbrains.compose.web.dom.ElementScopeBase.DomSideEffect$composable (ElementScope.kt:100)');
    }
    var changed = $composer_0.changed_ga7h3f_k$(key);
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var tmp4_remember$composable = 14 & $changed;
    var $composer_1 = tmp3_remember$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
    sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = $composer_1.changed_ga7h3f_k$(key);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var tmp$ret$0;
      // Inline function 'org.jetbrains.compose.web.dom.ElementScopeBase.DomSideEffect$composable.<anonymous>' call
      tmp$ret$0 = new DomDisposableEffectHolder(this);
      var value = tmp$ret$0;
      tmp1_cache.updateRememberedValue_l1colo_k$(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$3;
    $composer_1.endReplaceableGroup_er37p7_k$();
    tmp$ret$4 = tmp0;
    var effectHolder = tmp$ret$4;
    SideEffect$composable(ElementScopeBase$DomSideEffect$composable$lambda(changed, effect, effectHolder, this), $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  };
  ElementScopeBase.prototype.DomSideEffect$composable_f7i4ay_k$ = function (effect, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(672260654);
    sourceInformation($composer_0, 'C(DomSideEffect$composable)');
    if (isTraceInProgress()) {
      traceEventStart(672260654, $changed, -1, 'org.jetbrains.compose.web.dom.ElementScopeBase.DomSideEffect$composable (ElementScope.kt:115)');
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.nextDisposableDomEffectKey_1;
    tmp0_this.nextDisposableDomEffectKey_1 = tmp1 + 1 | 0;
    this.DomSideEffect$composable_hsfl2t_k$(tmp1, effect, $composer_0, 512 | 112 & $changed << 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
  };
  function DomDisposableEffectHolder(elementScope) {
    this.elementScope_1 = elementScope;
    this.onDispose_1 = null;
  }
  DomDisposableEffectHolder.prototype.get_elementScope_54l9tr_k$ = function () {
    return this.elementScope_1;
  };
  DomDisposableEffectHolder.prototype.set_onDispose_1nq98y_k$ = function (_set____db54di) {
    this.onDispose_1 = _set____db54di;
  };
  DomDisposableEffectHolder.prototype.get_onDispose_crocx5_k$ = function () {
    return this.onDispose_1;
  };
  DomDisposableEffectHolder.prototype.onRemembered_6899sq_k$ = function () {
  };
  DomDisposableEffectHolder.prototype.onForgotten_pcab12_k$ = function () {
    var tmp0_safe_receiver = this.onDispose_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(this.elementScope_1.get_element_q8gf71_k$());
  };
  DomDisposableEffectHolder.prototype.onAbandoned_1hgzvg_k$ = function () {
  };
  DomDisposableEffectHolder.prototype.onDispose_1nwuli_k$ = function (disposeEffect) {
    this.onDispose_1 = disposeEffect;
  };
  function get_Address() {
    init_properties_Elements_kt_bp8qwz();
    return Address;
  }
  var Address;
  function get_Article() {
    init_properties_Elements_kt_bp8qwz();
    return Article;
  }
  var Article;
  function get_Aside() {
    init_properties_Elements_kt_bp8qwz();
    return Aside;
  }
  var Aside;
  function get_Header() {
    init_properties_Elements_kt_bp8qwz();
    return Header;
  }
  var Header;
  function get_Area() {
    init_properties_Elements_kt_bp8qwz();
    return Area;
  }
  var Area;
  function get_Audio() {
    init_properties_Elements_kt_bp8qwz();
    return Audio;
  }
  var Audio;
  function get_Map() {
    init_properties_Elements_kt_bp8qwz();
    return Map;
  }
  var Map;
  function get_Track() {
    init_properties_Elements_kt_bp8qwz();
    return Track;
  }
  var Track;
  function get_Video() {
    init_properties_Elements_kt_bp8qwz();
    return Video;
  }
  var Video;
  function get_Datalist() {
    init_properties_Elements_kt_bp8qwz();
    return Datalist;
  }
  var Datalist;
  function get_Fieldset() {
    init_properties_Elements_kt_bp8qwz();
    return Fieldset;
  }
  var Fieldset;
  function get_Legend() {
    init_properties_Elements_kt_bp8qwz();
    return Legend;
  }
  var Legend;
  function get_Meter() {
    init_properties_Elements_kt_bp8qwz();
    return Meter;
  }
  var Meter;
  function get_Output() {
    init_properties_Elements_kt_bp8qwz();
    return Output;
  }
  var Output;
  function get_Progress() {
    init_properties_Elements_kt_bp8qwz();
    return Progress;
  }
  var Progress;
  function get_Embed() {
    init_properties_Elements_kt_bp8qwz();
    return Embed;
  }
  var Embed;
  function get_Iframe() {
    init_properties_Elements_kt_bp8qwz();
    return Iframe;
  }
  var Iframe;
  function get_Object() {
    init_properties_Elements_kt_bp8qwz();
    return Object_0;
  }
  var Object_0;
  function get_Param() {
    init_properties_Elements_kt_bp8qwz();
    return Param;
  }
  var Param;
  function get_Picture() {
    init_properties_Elements_kt_bp8qwz();
    return Picture;
  }
  var Picture;
  function get_Source() {
    init_properties_Elements_kt_bp8qwz();
    return Source;
  }
  var Source;
  function get_Canvas() {
    init_properties_Elements_kt_bp8qwz();
    return Canvas;
  }
  var Canvas;
  function get_DList() {
    init_properties_Elements_kt_bp8qwz();
    return DList;
  }
  var DList;
  function get_DTerm() {
    init_properties_Elements_kt_bp8qwz();
    return DTerm;
  }
  var DTerm;
  function get_DDescription() {
    init_properties_Elements_kt_bp8qwz();
    return DDescription;
  }
  var DDescription;
  function get_Div() {
    init_properties_Elements_kt_bp8qwz();
    return Div;
  }
  var Div;
  function get_A() {
    init_properties_Elements_kt_bp8qwz();
    return A;
  }
  var A;
  function get_Input() {
    init_properties_Elements_kt_bp8qwz();
    return Input;
  }
  var Input;
  function get_Button() {
    init_properties_Elements_kt_bp8qwz();
    return Button;
  }
  var Button;
  function get_H1() {
    init_properties_Elements_kt_bp8qwz();
    return H1;
  }
  var H1;
  function get_H2() {
    init_properties_Elements_kt_bp8qwz();
    return H2;
  }
  var H2;
  function get_H3() {
    init_properties_Elements_kt_bp8qwz();
    return H3;
  }
  var H3;
  function get_H4() {
    init_properties_Elements_kt_bp8qwz();
    return H4;
  }
  var H4;
  function get_H5() {
    init_properties_Elements_kt_bp8qwz();
    return H5;
  }
  var H5;
  function get_H6() {
    init_properties_Elements_kt_bp8qwz();
    return H6;
  }
  var H6;
  function get_P() {
    init_properties_Elements_kt_bp8qwz();
    return P;
  }
  var P;
  function get_Em() {
    init_properties_Elements_kt_bp8qwz();
    return Em;
  }
  var Em;
  function get_I() {
    init_properties_Elements_kt_bp8qwz();
    return I;
  }
  var I;
  function get_B() {
    init_properties_Elements_kt_bp8qwz();
    return B;
  }
  var B;
  function get_Small() {
    init_properties_Elements_kt_bp8qwz();
    return Small;
  }
  var Small;
  function get_Span() {
    init_properties_Elements_kt_bp8qwz();
    return Span;
  }
  var Span;
  function get_Br() {
    init_properties_Elements_kt_bp8qwz();
    return Br;
  }
  var Br;
  function get_Ul() {
    init_properties_Elements_kt_bp8qwz();
    return Ul;
  }
  var Ul;
  function get_Ol() {
    init_properties_Elements_kt_bp8qwz();
    return Ol;
  }
  var Ol;
  function get_Li() {
    init_properties_Elements_kt_bp8qwz();
    return Li;
  }
  var Li;
  function get_Img() {
    init_properties_Elements_kt_bp8qwz();
    return Img;
  }
  var Img;
  function get_Form() {
    init_properties_Elements_kt_bp8qwz();
    return Form;
  }
  var Form;
  function get_Select() {
    init_properties_Elements_kt_bp8qwz();
    return Select;
  }
  var Select;
  function get_Option() {
    init_properties_Elements_kt_bp8qwz();
    return Option;
  }
  var Option;
  function get_OptGroup() {
    init_properties_Elements_kt_bp8qwz();
    return OptGroup;
  }
  var OptGroup;
  function get_Section() {
    init_properties_Elements_kt_bp8qwz();
    return Section;
  }
  var Section;
  function get_TextArea() {
    init_properties_Elements_kt_bp8qwz();
    return TextArea;
  }
  var TextArea;
  function get_Nav() {
    init_properties_Elements_kt_bp8qwz();
    return Nav;
  }
  var Nav;
  function get_Pre() {
    init_properties_Elements_kt_bp8qwz();
    return Pre;
  }
  var Pre;
  function get_Code() {
    init_properties_Elements_kt_bp8qwz();
    return Code;
  }
  var Code;
  function get_Main() {
    init_properties_Elements_kt_bp8qwz();
    return Main;
  }
  var Main;
  function get_Footer() {
    init_properties_Elements_kt_bp8qwz();
    return Footer;
  }
  var Footer;
  function get_Hr() {
    init_properties_Elements_kt_bp8qwz();
    return Hr;
  }
  var Hr;
  function get_Label() {
    init_properties_Elements_kt_bp8qwz();
    return Label;
  }
  var Label;
  function get_Table() {
    init_properties_Elements_kt_bp8qwz();
    return Table;
  }
  var Table;
  function get_Caption() {
    init_properties_Elements_kt_bp8qwz();
    return Caption;
  }
  var Caption;
  function get_Col() {
    init_properties_Elements_kt_bp8qwz();
    return Col;
  }
  var Col;
  function get_Colgroup() {
    init_properties_Elements_kt_bp8qwz();
    return Colgroup;
  }
  var Colgroup;
  function get_Tr() {
    init_properties_Elements_kt_bp8qwz();
    return Tr;
  }
  var Tr;
  function get_Thead() {
    init_properties_Elements_kt_bp8qwz();
    return Thead;
  }
  var Thead;
  function get_Th() {
    init_properties_Elements_kt_bp8qwz();
    return Th;
  }
  var Th;
  function get_Td() {
    init_properties_Elements_kt_bp8qwz();
    return Td;
  }
  var Td;
  function get_Tbody() {
    init_properties_Elements_kt_bp8qwz();
    return Tbody;
  }
  var Tbody;
  function get_Tfoot() {
    init_properties_Elements_kt_bp8qwz();
    return Tfoot;
  }
  var Tfoot;
  function get_Style() {
    init_properties_Elements_kt_bp8qwz();
    return Style;
  }
  var Style;
  function A$composable(href, attrs, content, $composer, $changed, $default) {
    init_properties_Elements_kt_bp8qwz();
    var href_0 = {_v: href};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(294823474);
    sourceInformation($composer_0, 'C(A$composable)P(2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(href_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(content_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        href_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(294823474, $dirty, -1, 'org.jetbrains.compose.web.dom.A$composable (Elements.kt:501)');
      }
      var tmp = get_A();
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = href_0._v;
      var tmp4_remember$composable = attrs_0._v;
      var tmp5_remember$composable = $composer_0;
      var tmp6_remember$composable = 14 & $dirty | 112 & $dirty;
      var $composer_1 = tmp5_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
      sourceInformation($composer_1, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = !!($composer_1.changed_ga7h3f_k$(tmp3_remember$composable) | $composer_1.changed_ga7h3f_k$(tmp4_remember$composable));
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'org.jetbrains.compose.web.dom.A$composable.<anonymous>' call
        tmp$ret$0 = A$composable$lambda(href_0, attrs_0);
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      TagElement$composable(tmp, tmp$ret$4, content_0._v, $composer_0, 896 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(A$composable$lambda_0(href_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.buildersCache_1 = tmp$ret$0;
  }
  Companion_2.prototype.get_buildersCache_c71wch_k$ = function () {
    return this.buildersCache_1;
  };
  Companion_2.prototype.createBuilder_tabh5b_k$ = function (tagName) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tagName;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    var tagLowercase = tmp$ret$1;
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.buildersCache_1;
    var value = tmp0_getOrPut.get_1mhr4y_k$(tagLowercase);
    var tmp;
    if (value == null) {
      var tmp$ret$2;
      // Inline function 'org.jetbrains.compose.web.dom.Companion.createBuilder.<anonymous>' call
      tmp$ret$2 = new ElementBuilderImplementation(tagLowercase);
      var answer = tmp$ret$2;
      tmp0_getOrPut.put_3mhbri_k$(tagLowercase, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    tmp$ret$3 = tmp;
    var tmp1_unsafeCast = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = tmp1_unsafeCast;
    tmp$ret$5 = tmp$ret$4;
    return tmp$ret$5;
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ElementBuilder() {
    Companion_getInstance_3();
  }
  function Div$composable(attrs, content, $composer, $changed, $default) {
    init_properties_Elements_kt_bp8qwz();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1021009996);
    sourceInformation($composer_0, 'C(Div$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1021009996, $dirty, -1, 'org.jetbrains.compose.web.dom.Div$composable (Elements.kt:489)');
      }
      TagElement$composable(get_Div(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Div$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Text$composable(value, $composer, $changed) {
    init_properties_Elements_kt_bp8qwz();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-363526853);
    sourceInformation($composer_0, 'C(Text$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-363526853, $changed, -1, 'org.jetbrains.compose.web.dom.Text$composable (Elements.kt:479)');
      }
      // Inline function 'androidx.compose.runtime.ComposeNode$composable' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_1 = tmp2_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_1, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'org.jetbrains.compose.web.dom.Text$composable.<anonymous>' call
        tmp$ret$0 = Text$composable$lambda;
        var value_0 = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value_0);
        tmp = value_0;
      } else {
        tmp = tmp0_let;
      }
      tmp$ret$1 = tmp;
      tmp$ret$2 = tmp$ret$1;
      var tmp_0 = tmp$ret$2;
      tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      var tmp3_ComposeNode$composable = tmp$ret$4;
      var tmp4_ComposeNode$composable = $composer_0;
      var $composer_2 = tmp4_ComposeNode$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(-1846754774);
      sourceInformation($composer_2, 'C(ComposeNode$composable):Composables.kt#9igjgp');
      var tmp_1 = $composer_2.get_applier_bupu8u_k$();
      if (!(tmp_1 instanceof DomApplier)) {
        invalidApplier();
      }
      $composer_2.startNode_htbzn7_k$();
      if ($composer_2.get_inserting_25mlsw_k$()) {
        var tmp_2 = $composer_2;
        tmp_2.createNode_p4ouwd_k$(Text$composable$lambda_0(tmp3_ComposeNode$composable));
      } else {
        $composer_2.useNode_inlzo8_k$();
      }
      // Inline function 'org.jetbrains.compose.web.dom.Text$composable.<anonymous>' call
      var tmp5__anonymous__kpxxpo = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss(tmp5__anonymous__kpxxpo, value, Text$composable$lambda_1);
      $composer_2.endNode_3mkr10_k$();
      $composer_2.endReplaceableGroup_er37p7_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Text$composable$lambda_2(value, $changed));
    }
  }
  function _get_tagName__m9buy4($this) {
    return $this.tagName_1;
  }
  function _get_el__ndc0ck($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = el$factory();
    tmp$ret$0 = $this.el$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function ElementBuilderImplementation$el$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.tagName_1);
    };
  }
  function ElementBuilderImplementation(tagName) {
    this.tagName_1 = tagName;
    var tmp = this;
    tmp.el$delegate_1 = lazy(ElementBuilderImplementation$el$delegate$lambda(this));
  }
  ElementBuilderImplementation.prototype.create_md4cuc_k$ = function () {
    var tmp = _get_el__ndc0ck(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function A$composable$lambda($href, $attrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($href._v == null)) {
        href($this$TagElement, $href._v);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($attrs._v == null)) {
        tmp_0 = $attrs._v($this$TagElement);
      }
      return Unit_getInstance();
    };
  }
  function A$composable$lambda_0($href, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      A$composable($href._v, $attrs._v, $content._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function Div$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Div$composable($attrs._v, $content._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function Text$composable$lambda() {
    init_properties_Elements_kt_bp8qwz();
    return new DomNodeWrapper(document.createTextNode(''));
  }
  function Text$composable$lambda_0($tmp3_ComposeNode$composable) {
    return function () {
      return $tmp3_ComposeNode$composable();
    };
  }
  function Text$composable$lambda_1($this$set, value) {
    init_properties_Elements_kt_bp8qwz();
    var tmp = $this$set.get_node_wor8sr_k$();
    (tmp instanceof Text ? tmp : THROW_CCE()).data = value;
    return Unit_getInstance();
  }
  function Text$composable$lambda_2($value, $$changed) {
    return function ($composer, $force) {
      Text$composable($value, $composer, $$changed | 1);
      return Unit_getInstance();
    };
  }
  function el$factory() {
    return getPropertyCallableRef('el', 1, KProperty1, function (receiver) {
      return _get_el__ndc0ck(receiver);
    }, null);
  }
  var properties_initialized_Elements_kt_gtqiqv;
  function init_properties_Elements_kt_bp8qwz() {
    if (properties_initialized_Elements_kt_gtqiqv) {
    } else {
      properties_initialized_Elements_kt_gtqiqv = true;
      Address = new ElementBuilderImplementation('address');
      Article = new ElementBuilderImplementation('article');
      Aside = new ElementBuilderImplementation('aside');
      Header = new ElementBuilderImplementation('header');
      Area = new ElementBuilderImplementation('area');
      Audio = new ElementBuilderImplementation('audio');
      Map = new ElementBuilderImplementation('map');
      Track = new ElementBuilderImplementation('track');
      Video = new ElementBuilderImplementation('video');
      Datalist = new ElementBuilderImplementation('datalist');
      Fieldset = new ElementBuilderImplementation('fieldset');
      Legend = new ElementBuilderImplementation('legend');
      Meter = new ElementBuilderImplementation('meter');
      Output = new ElementBuilderImplementation('output');
      Progress = new ElementBuilderImplementation('progress');
      Embed = new ElementBuilderImplementation('embed');
      Iframe = new ElementBuilderImplementation('iframe');
      Object_0 = new ElementBuilderImplementation('object');
      Param = new ElementBuilderImplementation('param');
      Picture = new ElementBuilderImplementation('picture');
      Source = new ElementBuilderImplementation('source');
      Canvas = new ElementBuilderImplementation('canvas');
      DList = new ElementBuilderImplementation('dl');
      DTerm = new ElementBuilderImplementation('dt');
      DDescription = new ElementBuilderImplementation('dd');
      Div = new ElementBuilderImplementation('div');
      A = new ElementBuilderImplementation('a');
      Input = new ElementBuilderImplementation('input');
      Button = new ElementBuilderImplementation('button');
      H1 = new ElementBuilderImplementation('h1');
      H2 = new ElementBuilderImplementation('h2');
      H3 = new ElementBuilderImplementation('h3');
      H4 = new ElementBuilderImplementation('h4');
      H5 = new ElementBuilderImplementation('h5');
      H6 = new ElementBuilderImplementation('h6');
      P = new ElementBuilderImplementation('p');
      Em = new ElementBuilderImplementation('em');
      I = new ElementBuilderImplementation('i');
      B = new ElementBuilderImplementation('b');
      Small = new ElementBuilderImplementation('small');
      Span = new ElementBuilderImplementation('span');
      Br = new ElementBuilderImplementation('br');
      Ul = new ElementBuilderImplementation('ul');
      Ol = new ElementBuilderImplementation('ol');
      Li = new ElementBuilderImplementation('li');
      Img = new ElementBuilderImplementation('img');
      Form = new ElementBuilderImplementation('form');
      Select = new ElementBuilderImplementation('select');
      Option = new ElementBuilderImplementation('option');
      OptGroup = new ElementBuilderImplementation('optgroup');
      Section = new ElementBuilderImplementation('section');
      TextArea = new ElementBuilderImplementation('textarea');
      Nav = new ElementBuilderImplementation('nav');
      Pre = new ElementBuilderImplementation('pre');
      Code = new ElementBuilderImplementation('code');
      Main = new ElementBuilderImplementation('main');
      Footer = new ElementBuilderImplementation('footer');
      Hr = new ElementBuilderImplementation('hr');
      Label = new ElementBuilderImplementation('label');
      Table = new ElementBuilderImplementation('table');
      Caption = new ElementBuilderImplementation('caption');
      Col = new ElementBuilderImplementation('col');
      Colgroup = new ElementBuilderImplementation('colgroup');
      Tr = new ElementBuilderImplementation('tr');
      Thead = new ElementBuilderImplementation('thead');
      Th = new ElementBuilderImplementation('th');
      Td = new ElementBuilderImplementation('td');
      Tbody = new ElementBuilderImplementation('tbody');
      Tfoot = new ElementBuilderImplementation('tfoot');
      Style = new ElementBuilderImplementation('style');
    }
  }
  function get_radioGroupScopeImpl() {
    init_properties_RadioGroup_kt_glb8k6();
    return radioGroupScopeImpl;
  }
  var radioGroupScopeImpl;
  function set_generatedRadioGroupNamesCounter(_set____db54di) {
    init_properties_RadioGroup_kt_glb8k6();
    generatedRadioGroupNamesCounter = _set____db54di;
  }
  function get_generatedRadioGroupNamesCounter() {
    init_properties_RadioGroup_kt_glb8k6();
    return generatedRadioGroupNamesCounter;
  }
  var generatedRadioGroupNamesCounter;
  function get_radioGroupCompositionLocalValue() {
    init_properties_RadioGroup_kt_glb8k6();
    return radioGroupCompositionLocalValue;
  }
  var radioGroupCompositionLocalValue;
  function get_radioGroupCompositionLocalName() {
    init_properties_RadioGroup_kt_glb8k6();
    return radioGroupCompositionLocalName;
  }
  var radioGroupCompositionLocalName;
  function get_$stableprop_22() {
    return 0;
  }
  function RadioGroupScope() {
    this.$stable_1 = 0;
  }
  function radioGroupCompositionLocalValue$lambda() {
    init_properties_RadioGroup_kt_glb8k6();
    throw IllegalStateException_init_$Create$('No radio group checked value provided');
  }
  function radioGroupCompositionLocalName$lambda() {
    init_properties_RadioGroup_kt_glb8k6();
    throw IllegalStateException_init_$Create$('No radio group name provided');
  }
  var properties_initialized_RadioGroup_kt_um4oue;
  function init_properties_RadioGroup_kt_glb8k6() {
    if (properties_initialized_RadioGroup_kt_um4oue) {
    } else {
      properties_initialized_RadioGroup_kt_um4oue = true;
      radioGroupScopeImpl = new RadioGroupScope();
      generatedRadioGroupNamesCounter = 0;
      radioGroupCompositionLocalValue = compositionLocalOf$default(null, radioGroupCompositionLocalValue$lambda, 1, null);
      radioGroupCompositionLocalName = compositionLocalOf$default(null, radioGroupCompositionLocalName$lambda, 1, null);
    }
  }
  function get_$stableprop_23() {
    return 0;
  }
  function SyntheticAnimationEvent(nativeEvent, animationEventDetails) {
    SyntheticEvent.call(this, nativeEvent);
    this.animationName_1 = animationEventDetails.animationName;
    this.elapsedTime_1 = animationEventDetails.elapsedTime;
    this.pseudoElement_1 = animationEventDetails.pseudoElement;
    this.$stable_2 = 0;
  }
  SyntheticAnimationEvent.prototype.get_animationName_wdgkxy_k$ = function () {
    return this.animationName_1;
  };
  SyntheticAnimationEvent.prototype.get_elapsedTime_5vfaps_k$ = function () {
    return this.elapsedTime_1;
  };
  SyntheticAnimationEvent.prototype.get_pseudoElement_9pr039_k$ = function () {
    return this.pseudoElement_1;
  };
  function get_$stableprop_24() {
    return 0;
  }
  function SyntheticClipboardEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.clipboardData_1 = nativeEvent.clipboardData;
    this.$stable_2 = 0;
  }
  SyntheticClipboardEvent.prototype.get_clipboardData_2lw3zr_k$ = function () {
    return this.clipboardData_1;
  };
  SyntheticClipboardEvent.prototype.getData_te36zl_k$ = function (format) {
    var tmp0_safe_receiver = this.clipboardData_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getData(format);
  };
  SyntheticClipboardEvent.prototype.setData_yk746f_k$ = function (format, data) {
    var tmp0_safe_receiver = this.clipboardData_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.setData(format, data);
    }
  };
  function get_$stableprop_25() {
    return 0;
  }
  function SyntheticEvent(nativeEvent) {
    this.nativeEvent_1 = nativeEvent;
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = this.nativeEvent_1.target;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    tmp.target_1 = tmp$ret$1;
    this.bubbles_1 = this.nativeEvent_1.bubbles;
    this.cancelable_1 = this.nativeEvent_1.cancelable;
    this.composed_1 = this.nativeEvent_1.composed;
    this.currentTarget_1 = this.nativeEvent_1.currentTarget;
    this.eventPhase_1 = this.nativeEvent_1.eventPhase;
    this.defaultPrevented_1 = this.nativeEvent_1.defaultPrevented;
    this.timestamp_1 = this.nativeEvent_1.timeStamp;
    this.type_1 = this.nativeEvent_1.type;
    this.isTrusted_1 = this.nativeEvent_1.isTrusted;
    this.$stable_1 = 0;
  }
  SyntheticEvent.prototype.get_nativeEvent_skldba_k$ = function () {
    return this.nativeEvent_1;
  };
  SyntheticEvent.prototype.get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  SyntheticEvent.prototype.get_bubbles_4z13zy_k$ = function () {
    return this.bubbles_1;
  };
  SyntheticEvent.prototype.get_cancelable_b2ewrh_k$ = function () {
    return this.cancelable_1;
  };
  SyntheticEvent.prototype.get_composed_tbcbff_k$ = function () {
    return this.composed_1;
  };
  SyntheticEvent.prototype.get_currentTarget_yyne0v_k$ = function () {
    return this.currentTarget_1;
  };
  SyntheticEvent.prototype.get_eventPhase_44nj3q_k$ = function () {
    return this.eventPhase_1;
  };
  SyntheticEvent.prototype.get_defaultPrevented_umrpc1_k$ = function () {
    return this.defaultPrevented_1;
  };
  SyntheticEvent.prototype.get_timestamp_9fccx9_k$ = function () {
    return this.timestamp_1;
  };
  SyntheticEvent.prototype.get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  SyntheticEvent.prototype.get_isTrusted_ievk1o_k$ = function () {
    return this.isTrusted_1;
  };
  SyntheticEvent.prototype.preventDefault_xrmx2w_k$ = function () {
    return this.nativeEvent_1.preventDefault();
  };
  SyntheticEvent.prototype.stopPropagation_5pvg9l_k$ = function () {
    return this.nativeEvent_1.stopPropagation();
  };
  SyntheticEvent.prototype.stopImmediatePropagation_zaplik_k$ = function () {
    return this.nativeEvent_1.stopImmediatePropagation();
  };
  SyntheticEvent.prototype.composedPath_62fnop_k$ = function () {
    return this.nativeEvent_1.composedPath();
  };
  function get_$stableprop_26() {
    return 0;
  }
  function SyntheticFocusEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.relatedTarget_1 = nativeEvent.relatedTarget;
    this.$stable_2 = 0;
  }
  SyntheticFocusEvent.prototype.get_relatedTarget_1ea9gz_k$ = function () {
    return this.relatedTarget_1;
  };
  function get_normalizedKeys() {
    init_properties_SyntheticKeyboardEvent_kt_49099o();
    return normalizedKeys;
  }
  var normalizedKeys;
  function _get_keyboardEvent__g732rm($this) {
    return $this.keyboardEvent_1;
  }
  function get_$stableprop_27() {
    return 0;
  }
  function SyntheticKeyboardEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.keyboardEvent_1 = nativeEvent;
    this.altKey_1 = nativeEvent.altKey;
    this.code_1 = nativeEvent.code;
    this.ctrlKey_1 = nativeEvent.ctrlKey;
    this.isComposing_1 = nativeEvent.isComposing;
    this.key_1 = nativeEvent.key;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = nativeEvent;
    tmp.locale_1 = toString(tmp$ret$0.locale);
    this.location_1 = nativeEvent.location;
    this.metaKey_1 = nativeEvent.metaKey;
    this.repeat_1 = nativeEvent.repeat;
    this.shiftKey_1 = nativeEvent.shiftKey;
    this.$stable_2 = 0;
  }
  SyntheticKeyboardEvent.prototype.get_altKey_b0iwhr_k$ = function () {
    return this.altKey_1;
  };
  SyntheticKeyboardEvent.prototype.get_code_wok7xy_k$ = function () {
    return this.code_1;
  };
  SyntheticKeyboardEvent.prototype.get_ctrlKey_jfc6q3_k$ = function () {
    return this.ctrlKey_1;
  };
  SyntheticKeyboardEvent.prototype.get_isComposing_a8f9zw_k$ = function () {
    return this.isComposing_1;
  };
  SyntheticKeyboardEvent.prototype.get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  SyntheticKeyboardEvent.prototype.get_locale_g9dqar_k$ = function () {
    return this.locale_1;
  };
  SyntheticKeyboardEvent.prototype.get_location_d3s02_k$ = function () {
    return this.location_1;
  };
  SyntheticKeyboardEvent.prototype.get_metaKey_h2b5f5_k$ = function () {
    return this.metaKey_1;
  };
  SyntheticKeyboardEvent.prototype.get_repeat_iydw9w_k$ = function () {
    return this.repeat_1;
  };
  SyntheticKeyboardEvent.prototype.get_shiftKey_ujdkqu_k$ = function () {
    return this.shiftKey_1;
  };
  SyntheticKeyboardEvent.prototype.getModifierState_x471tv_k$ = function (keyArg) {
    return this.keyboardEvent_1.getModifierState(keyArg);
  };
  SyntheticKeyboardEvent.prototype.getNormalizedKey_tfr8s2_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.key_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'org.jetbrains.compose.web.events.SyntheticKeyboardEvent.getNormalizedKey.<anonymous>' call
    var tmp0_elvis_lhs = get_normalizedKeys().get_1mhr4y_k$(tmp0_let);
    tmp$ret$0 = tmp0_elvis_lhs == null ? tmp0_let : tmp0_elvis_lhs;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  var properties_initialized_SyntheticKeyboardEvent_kt_z9adjk;
  function init_properties_SyntheticKeyboardEvent_kt_49099o() {
    if (properties_initialized_SyntheticKeyboardEvent_kt_z9adjk) {
    } else {
      properties_initialized_SyntheticKeyboardEvent_kt_z9adjk = true;
      normalizedKeys = mapOf([to('Esc', 'Escape'), to('Spacebar', ' '), to('Left', 'ArrowLeft'), to('Up', 'ArrowUp'), to('Right', 'ArrowRight'), to('Down', 'ArrowDown'), to('Del', 'Delete'), to('Apps', 'ContextMenu'), to('Menu', 'ContextMenu'), to('Scroll', 'ScrollLock'), to('MozPrintableKey', 'Unidentified')]);
    }
  }
  function _get_mouseEvent__o09ya2($this) {
    return $this.mouseEvent_1;
  }
  function get_$stableprop_28() {
    return 0;
  }
  function SyntheticMouseEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.mouseEvent_1 = nativeEvent;
    this.altKey_1 = nativeEvent.altKey;
    this.button_1 = nativeEvent.button;
    this.buttons_1 = nativeEvent.buttons;
    this.clientX_1 = nativeEvent.clientX;
    this.clientY_1 = nativeEvent.clientY;
    this.ctrlKey_1 = nativeEvent.ctrlKey;
    this.metaKey_1 = nativeEvent.metaKey;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = nativeEvent;
    var tmp_0 = tmp$ret$0.movementX;
    var tmp0_elvis_lhs = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : null;
    tmp.movementX_1 = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp_1 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = nativeEvent;
    var tmp_2 = tmp$ret$1.movementY;
    var tmp0_elvis_lhs_0 = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : null;
    tmp_1.movementY_1 = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
    this.offsetX_1 = nativeEvent.offsetX;
    this.offsetY_1 = nativeEvent.offsetY;
    this.pageX_1 = nativeEvent.pageX;
    this.pageY_1 = nativeEvent.pageY;
    this.region_1 = nativeEvent.region;
    this.relatedTarget_1 = nativeEvent.relatedTarget;
    this.screenX_1 = nativeEvent.screenX;
    this.screenY_1 = nativeEvent.screenY;
    this.shiftKey_1 = nativeEvent.shiftKey;
    this.x_1 = nativeEvent.x;
    this.y_1 = nativeEvent.y;
    this.$stable_2 = 0;
  }
  SyntheticMouseEvent.prototype.get_altKey_b0iwhr_k$ = function () {
    return this.altKey_1;
  };
  SyntheticMouseEvent.prototype.get_button_bmjiuz_k$ = function () {
    return this.button_1;
  };
  SyntheticMouseEvent.prototype.get_buttons_598yvs_k$ = function () {
    return this.buttons_1;
  };
  SyntheticMouseEvent.prototype.get_clientX_fhxblw_k$ = function () {
    return this.clientX_1;
  };
  SyntheticMouseEvent.prototype.get_clientY_fhxblx_k$ = function () {
    return this.clientY_1;
  };
  SyntheticMouseEvent.prototype.get_ctrlKey_jfc6q3_k$ = function () {
    return this.ctrlKey_1;
  };
  SyntheticMouseEvent.prototype.get_metaKey_h2b5f5_k$ = function () {
    return this.metaKey_1;
  };
  SyntheticMouseEvent.prototype.get_movementX_qe3gf4_k$ = function () {
    return this.movementX_1;
  };
  SyntheticMouseEvent.prototype.get_movementY_qe3gf5_k$ = function () {
    return this.movementY_1;
  };
  SyntheticMouseEvent.prototype.get_offsetX_ocbsn8_k$ = function () {
    return this.offsetX_1;
  };
  SyntheticMouseEvent.prototype.get_offsetY_ocbsn7_k$ = function () {
    return this.offsetY_1;
  };
  SyntheticMouseEvent.prototype.get_pageX_iwqirk_k$ = function () {
    return this.pageX_1;
  };
  SyntheticMouseEvent.prototype.get_pageY_iwqirl_k$ = function () {
    return this.pageY_1;
  };
  SyntheticMouseEvent.prototype.get_region_iy88ot_k$ = function () {
    return this.region_1;
  };
  SyntheticMouseEvent.prototype.get_relatedTarget_1ea9gz_k$ = function () {
    return this.relatedTarget_1;
  };
  SyntheticMouseEvent.prototype.get_screenX_x4h283_k$ = function () {
    return this.screenX_1;
  };
  SyntheticMouseEvent.prototype.get_screenY_x4h284_k$ = function () {
    return this.screenY_1;
  };
  SyntheticMouseEvent.prototype.get_shiftKey_ujdkqu_k$ = function () {
    return this.shiftKey_1;
  };
  SyntheticMouseEvent.prototype.get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  SyntheticMouseEvent.prototype.get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  SyntheticMouseEvent.prototype.getModifierState_x471tv_k$ = function (keyArg) {
    return this.mouseEvent_1.getModifierState(keyArg);
  };
  function get_$stableprop_29() {
    return 0;
  }
  function SyntheticDragEvent(nativeEvent) {
    SyntheticMouseEvent.call(this, nativeEvent);
    this.dataTransfer_1 = nativeEvent.dataTransfer;
    this.$stable_3 = 0;
  }
  SyntheticDragEvent.prototype.get_dataTransfer_ncqosi_k$ = function () {
    return this.dataTransfer_1;
  };
  function get_$stableprop_30() {
    return 0;
  }
  function SyntheticWheelEvent(nativeEvent) {
    SyntheticMouseEvent.call(this, nativeEvent);
    this.deltaX_1 = nativeEvent.deltaX;
    this.deltaY_1 = nativeEvent.deltaY;
    this.deltaZ_1 = nativeEvent.deltaZ;
    this.deltaMode_1 = nativeEvent.deltaMode;
    this.$stable_3 = 0;
  }
  SyntheticWheelEvent.prototype.get_deltaX_cboxwp_k$ = function () {
    return this.deltaX_1;
  };
  SyntheticWheelEvent.prototype.get_deltaY_cboxwq_k$ = function () {
    return this.deltaY_1;
  };
  SyntheticWheelEvent.prototype.get_deltaZ_cboxwr_k$ = function () {
    return this.deltaZ_1;
  };
  SyntheticWheelEvent.prototype.get_deltaMode_9dro42_k$ = function () {
    return this.deltaMode_1;
  };
  function get_$stableprop_31() {
    return 0;
  }
  function SyntheticTouchEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.altKey_1 = nativeEvent.altKey;
    this.changedTouches_1 = nativeEvent.changedTouches;
    this.ctrlKey_1 = nativeEvent.ctrlKey;
    this.metaKey_1 = nativeEvent.metaKey;
    this.shiftKey_1 = nativeEvent.shiftKey;
    this.touches_1 = nativeEvent.touches;
    this.$stable_2 = 0;
  }
  SyntheticTouchEvent.prototype.get_altKey_b0iwhr_k$ = function () {
    return this.altKey_1;
  };
  SyntheticTouchEvent.prototype.get_changedTouches_6cqbxe_k$ = function () {
    return this.changedTouches_1;
  };
  SyntheticTouchEvent.prototype.get_ctrlKey_jfc6q3_k$ = function () {
    return this.ctrlKey_1;
  };
  SyntheticTouchEvent.prototype.get_metaKey_h2b5f5_k$ = function () {
    return this.metaKey_1;
  };
  SyntheticTouchEvent.prototype.get_shiftKey_ujdkqu_k$ = function () {
    return this.shiftKey_1;
  };
  SyntheticTouchEvent.prototype.get_touches_hi32yk_k$ = function () {
    return this.touches_1;
  };
  //region block: post-declaration
  AttrsScopeBuilder.prototype.id_xxyy5i_k$ = id;
  AttrsScopeBuilder.prototype.hidden_k4uzbq_k$ = hidden;
  AttrsScopeBuilder.prototype.title_898wkp_k$ = title;
  AttrsScopeBuilder.prototype.dir_9tgcjq_k$ = dir;
  AttrsScopeBuilder.prototype.draggable_ghcstc_k$ = draggable;
  AttrsScopeBuilder.prototype.contentEditable_oklk6b_k$ = contentEditable;
  AttrsScopeBuilder.prototype.lang_xkki7h_k$ = lang;
  AttrsScopeBuilder.prototype.tabIndex_coguxw_k$ = tabIndex;
  AttrsScopeBuilder.prototype.spellCheck_ra9ojq_k$ = spellCheck;
  AttrsScopeBuilder.prototype.inputMode_q3xdho_k$ = inputMode;
  AttrsScopeBuilder.prototype.inputMode_ni4l5s_k$ = inputMode_0;
  EventsListenerScopeBuilder.prototype.onContextMenu_rqaeiw_k$ = onContextMenu;
  EventsListenerScopeBuilder.prototype.onClick_3adsri_k$ = onClick;
  EventsListenerScopeBuilder.prototype.onDoubleClick_o3ltf3_k$ = onDoubleClick;
  EventsListenerScopeBuilder.prototype.onMouseDown_em11hd_k$ = onMouseDown;
  EventsListenerScopeBuilder.prototype.onMouseUp_qybdyy_k$ = onMouseUp;
  EventsListenerScopeBuilder.prototype.onMouseEnter_g3bz11_k$ = onMouseEnter;
  EventsListenerScopeBuilder.prototype.onMouseLeave_4qyrg6_k$ = onMouseLeave;
  EventsListenerScopeBuilder.prototype.onMouseMove_609snk_k$ = onMouseMove;
  EventsListenerScopeBuilder.prototype.onMouseOut_alj067_k$ = onMouseOut;
  EventsListenerScopeBuilder.prototype.onMouseOver_66zdzh_k$ = onMouseOver;
  EventsListenerScopeBuilder.prototype.onWheel_cg2j2t_k$ = onWheel;
  EventsListenerScopeBuilder.prototype.onDrag_vg0lyh_k$ = onDrag;
  EventsListenerScopeBuilder.prototype.onDrop_3mkg4y_k$ = onDrop;
  EventsListenerScopeBuilder.prototype.onDragStart_w5ys4t_k$ = onDragStart;
  EventsListenerScopeBuilder.prototype.onDragEnd_y7ewx8_k$ = onDragEnd;
  EventsListenerScopeBuilder.prototype.onDragOver_ti99sb_k$ = onDragOver;
  EventsListenerScopeBuilder.prototype.onDragEnter_uyubsn_k$ = onDragEnter;
  EventsListenerScopeBuilder.prototype.onDragLeave_nnon60_k$ = onDragLeave;
  EventsListenerScopeBuilder.prototype.onCopy_takkx5_k$ = onCopy;
  EventsListenerScopeBuilder.prototype.onCut_ol4js_k$ = onCut;
  EventsListenerScopeBuilder.prototype.onPaste_rubsh5_k$ = onPaste;
  EventsListenerScopeBuilder.prototype.onKeyDown_xycn2o_k$ = onKeyDown;
  EventsListenerScopeBuilder.prototype.onKeyUp_u3a7vt_k$ = onKeyUp;
  EventsListenerScopeBuilder.prototype.onFocus_f0s6pg_k$ = onFocus;
  EventsListenerScopeBuilder.prototype.onBlur_jks72x_k$ = onBlur;
  EventsListenerScopeBuilder.prototype.onFocusIn_o8fbjl_k$ = onFocusIn;
  EventsListenerScopeBuilder.prototype.onFocusOut_pmzsfc_k$ = onFocusOut;
  EventsListenerScopeBuilder.prototype.onTouchCancel_ufddza_k$ = onTouchCancel;
  EventsListenerScopeBuilder.prototype.onTouchMove_f4qr3x_k$ = onTouchMove;
  EventsListenerScopeBuilder.prototype.onTouchEnd_u7mt1j_k$ = onTouchEnd;
  EventsListenerScopeBuilder.prototype.onTouchStart_sporrm_k$ = onTouchStart;
  EventsListenerScopeBuilder.prototype.onAnimationEnd_35pssj_k$ = onAnimationEnd;
  EventsListenerScopeBuilder.prototype.onAnimationIteration_qwyfwf_k$ = onAnimationIteration;
  EventsListenerScopeBuilder.prototype.onAnimationStart_jojejg_k$ = onAnimationStart;
  EventsListenerScopeBuilder.prototype.onScroll_3uphub_k$ = onScroll;
  EventsListenerScopeBuilder.prototype.addEventListener_rnhydf_k$ = addEventListener;
  EventsListenerScopeBuilder.prototype.addEventListener_y3hr2r_k$ = addEventListener_0;
  StyleScopeBuilder.prototype.property_ze5ozi_k$ = property;
  StyleScopeBuilder.prototype.property_nit37e_k$ = property_0;
  StyleScopeBuilder.prototype.variable_d7dn6f_k$ = variable;
  StyleScopeBuilder.prototype.variable_pbiwyn_k$ = variable_0;
  StyleScopeBuilder.prototype.invoke_ie9e5n_k$ = invoke;
  StyleScopeBuilder.prototype.invoke_49si7m_k$ = invoke_0;
  StyleScopeBuilder.prototype.invoke_tbupf6_k$ = invoke_1;
  selectorScope$1.prototype.selector_vsua3m_k$ = selector;
  selectorScope$1.prototype.combine_75bnet_k$ = combine;
  selectorScope$1.prototype.plus_nlz2mk_k$ = plus;
  selectorScope$1.prototype.plus_85zybx_k$ = plus_0;
  selectorScope$1.prototype.returnUniversalSelector = returnUniversalSelector;
  selectorScope$1.prototype.get_universal_1qp21u_k$ = get_universal;
  selectorScope$1.prototype.type_gwc96h_k$ = type;
  selectorScope$1.prototype.className_ykinvi_k$ = className;
  selectorScope$1.prototype.id_xxyy5i_k$ = id_0;
  selectorScope$1.prototype.attr_8c4xcm_k$ = attr;
  selectorScope$1.prototype.attr$default_vdisna_k$ = attr$default;
  selectorScope$1.prototype.attrEquals_ekinah_k$ = attrEquals;
  selectorScope$1.prototype.attrEquals$default_vnltto_k$ = attrEquals$default;
  selectorScope$1.prototype.attrListContains_xb78l5_k$ = attrListContains;
  selectorScope$1.prototype.attrListContains$default_horg0y_k$ = attrListContains$default;
  selectorScope$1.prototype.attrHyphened_1nnzy3_k$ = attrHyphened;
  selectorScope$1.prototype.attrHyphened$default_k71e3u_k$ = attrHyphened$default;
  selectorScope$1.prototype.attrPrefixed_ju2x2d_k$ = attrPrefixed;
  selectorScope$1.prototype.attrPrefixed$default_3i1zna_k$ = attrPrefixed$default;
  selectorScope$1.prototype.attrSuffixed_gk0h2_k$ = attrSuffixed;
  selectorScope$1.prototype.attrSuffixed$default_nyvegb_k$ = attrSuffixed$default;
  selectorScope$1.prototype.attrContains_2muovr_k$ = attrContains;
  selectorScope$1.prototype.attrContains$default_9y3uho_k$ = attrContains$default;
  selectorScope$1.prototype.group_po2tbv_k$ = group;
  selectorScope$1.prototype.descendant_x63x3d_k$ = descendant;
  selectorScope$1.prototype.desc_ej3sir_k$ = desc;
  selectorScope$1.prototype.desc_8daddi_k$ = desc_0;
  selectorScope$1.prototype.desc_npizau_k$ = desc_1;
  selectorScope$1.prototype.desc_w7b77z_k$ = desc_2;
  selectorScope$1.prototype.child_4w4v4o_k$ = child;
  selectorScope$1.prototype.sibling_tzh2by_k$ = sibling;
  selectorScope$1.prototype.adjacent_gxbr7y_k$ = adjacent;
  selectorScope$1.prototype.returnHoverSelector = returnHoverSelector;
  selectorScope$1.prototype.hover_gby0bi_k$ = hover;
  selectorScope$1.prototype.get_hover_islez7_k$ = get_hover;
  selectorScope$1.prototype.get_anyLink_cofd2b_k$ = get_anyLink;
  selectorScope$1.prototype.get_link_wopumb_k$ = get_link;
  selectorScope$1.prototype.get_visited_8zg8qp_k$ = get_visited;
  selectorScope$1.prototype.get_localLink_bf63s4_k$ = get_localLink;
  selectorScope$1.prototype.get_target_juba8q_k$ = get_target;
  selectorScope$1.prototype.get_targetWithin_2o3zvf_k$ = get_targetWithin;
  selectorScope$1.prototype.get_scope_iyfcq3_k$ = get_scope;
  selectorScope$1.prototype.get_active_avldsf_k$ = get_active;
  selectorScope$1.prototype.get_focus_irhg33_k$ = get_focus;
  selectorScope$1.prototype.get_focusVisible_5vnmwz_k$ = get_focusVisible;
  selectorScope$1.prototype.get_playing_6wau9n_k$ = get_playing;
  selectorScope$1.prototype.get_paused_hy6yif_k$ = get_paused;
  selectorScope$1.prototype.get_autofill_801dad_k$ = get_autofill;
  selectorScope$1.prototype.get_enabled_pcr8o8_k$ = get_enabled;
  selectorScope$1.prototype.get_disabled_rbmjej_k$ = get_disabled;
  selectorScope$1.prototype.get_readOnly_ovku97_k$ = get_readOnly;
  selectorScope$1.prototype.get_readWrite_a0tpds_k$ = get_readWrite;
  selectorScope$1.prototype.get_placeholderShown_1kc3x5_k$ = get_placeholderShown;
  selectorScope$1.prototype.get_default_qtagd4_k$ = get_default;
  selectorScope$1.prototype.get_checked_djib3y_k$ = get_checked;
  selectorScope$1.prototype.get_indeterminate_997h5e_k$ = get_indeterminate;
  selectorScope$1.prototype.get_blank_ip8b3f_k$ = get_blank;
  selectorScope$1.prototype.get_valid_j01e4z_k$ = get_valid;
  selectorScope$1.prototype.get_invalid_xocxse_k$ = get_invalid;
  selectorScope$1.prototype.get_inRange_x4kdv3_k$ = get_inRange;
  selectorScope$1.prototype.get_outOfRange_z0zuv5_k$ = get_outOfRange;
  selectorScope$1.prototype.get_required_wq3z3c_k$ = get_required;
  selectorScope$1.prototype.get_optional_x3zcnr_k$ = get_optional;
  selectorScope$1.prototype.get_userInvalid_tptv3x_k$ = get_userInvalid;
  selectorScope$1.prototype.get_root_wott0r_k$ = get_root;
  selectorScope$1.prototype.get_empty_iqwn50_k$ = get_empty;
  selectorScope$1.prototype.get_first_irdx8n_k$ = get_first;
  selectorScope$1.prototype.get_firstChild_n9lgdn_k$ = get_firstChild;
  selectorScope$1.prototype.get_lastChild_tniydf_k$ = get_lastChild;
  selectorScope$1.prototype.get_onlyChild_cxh5if_k$ = get_onlyChild;
  selectorScope$1.prototype.get_firstOfType_5b9t60_k$ = get_firstOfType;
  selectorScope$1.prototype.get_lastOfType_9s7uy8_k$ = get_lastOfType;
  selectorScope$1.prototype.get_onlyOfType_jptu62_k$ = get_onlyOfType;
  selectorScope$1.prototype.get_host_wonf8x_k$ = get_host;
  selectorScope$1.prototype.host_93x8z6_k$ = host;
  selectorScope$1.prototype.get_defined_qtfew0_k$ = get_defined;
  selectorScope$1.prototype.get_left_woprgw_k$ = get_left;
  selectorScope$1.prototype.get_right_ixz7xv_k$ = get_right;
  selectorScope$1.prototype.lang_xkki7h_k$ = lang_0;
  selectorScope$1.prototype.nthChild_tigwrk_k$ = nthChild;
  selectorScope$1.prototype.nthLastChild_4qjl06_k$ = nthLastChild;
  selectorScope$1.prototype.nthOfType_n46p53_k$ = nthOfType;
  selectorScope$1.prototype.nthLastOfType_jex6dt_k$ = nthLastOfType;
  selectorScope$1.prototype.not_di0wzr_k$ = not;
  selectorScope$1.prototype.get_after_iol2gj_k$ = get_after;
  selectorScope$1.prototype.get_before_bdhrwo_k$ = get_before;
  selectorScope$1.prototype.get_cue_18j7sm_k$ = get_cue;
  selectorScope$1.prototype.get_cueRegion_qinivy_k$ = get_cueRegion;
  selectorScope$1.prototype.get_firstLetter_6qe5bn_k$ = get_firstLetter;
  selectorScope$1.prototype.get_firstLine_apktuj_k$ = get_firstLine;
  selectorScope$1.prototype.get_fileSelectorButton_ul3x92_k$ = get_fileSelectorButton;
  selectorScope$1.prototype.get_selection_jv4aal_k$ = get_selection;
  selectorScope$1.prototype.slotted_iujblx_k$ = slotted;
  ElementScopeBase.prototype.DisposableRefEffect_s9xzts_k$ = DisposableRefEffect;
  ElementScopeBase.prototype.DisposableRefEffect$composable_ofuxkt_k$ = DisposableRefEffect$composable;
  ElementScopeImpl.prototype.DisposableRefEffect_s9xzts_k$ = DisposableRefEffect;
  ElementScopeImpl.prototype.DisposableRefEffect$composable_ofuxkt_k$ = DisposableRefEffect$composable;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = A$composable;
  _.$_$.b = Div$composable;
  _.$_$.c = Text$composable;
  //endregion
  return _;
}));
