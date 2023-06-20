(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-runtime.js', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlinx-uuid-kotlinx-uuid-core.js', './web-web-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-runtime.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlinx-uuid-kotlinx-uuid-core.js'), require('./web-web-core.js'));
  else {
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'routing-compose'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'routing-compose'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'routing-compose'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'routing-compose'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'routing-compose'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'routing-compose'.");
    }
    if (typeof this['kotlinx-uuid-kotlinx-uuid-core'] === 'undefined') {
      throw new Error("Error loading module 'routing-compose'. Its dependency 'kotlinx-uuid-kotlinx-uuid-core' was not found. Please, check whether 'kotlinx-uuid-kotlinx-uuid-core' is loaded prior to 'routing-compose'.");
    }
    if (typeof this['web-web-core'] === 'undefined') {
      throw new Error("Error loading module 'routing-compose'. Its dependency 'web-web-core' was not found. Please, check whether 'web-web-core' is loaded prior to 'routing-compose'.");
    }
    root['routing-compose'] = factory(typeof this['routing-compose'] === 'undefined' ? {} : this['routing-compose'], this['androidx-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlinx-uuid-kotlinx-uuid-core'], this['web-web-core']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_app_softwork_kotlinx_uuid_core, kotlin_org_jetbrains_compose_web_web_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var startsWith$default = kotlin_kotlin.$_$.m;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var classMeta = kotlin_kotlin.$_$.i7;
  var setMetadataFor = kotlin_kotlin.$_$.i8;
  var Unit_getInstance = kotlin_kotlin.$_$.c3;
  var replace$default = kotlin_kotlin.$_$.k;
  var to = kotlin_kotlin.$_$.ma;
  var mapOf = kotlin_kotlin.$_$.k5;
  var split$default = kotlin_kotlin.$_$.l;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.g4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var first = kotlin_kotlin.$_$.a5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var last = kotlin_kotlin.$_$.g5;
  var mapCapacity = kotlin_kotlin.$_$.j5;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var charSequenceLength = kotlin_kotlin.$_$.h7;
  var addAll = kotlin_kotlin.$_$.c4;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var listOf = kotlin_kotlin.$_$.h5;
  var toMap = kotlin_kotlin.$_$.a6;
  var objectMeta = kotlin_kotlin.$_$.h8;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var THROW_CCE = kotlin_kotlin.$_$.v9;
  var getStringHashCode = kotlin_kotlin.$_$.o7;
  var toString = kotlin_kotlin.$_$.k8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var removePrefix = kotlin_kotlin.$_$.a9;
  var dropLast = kotlin_kotlin.$_$.u4;
  var charSequenceGet = kotlin_kotlin.$_$.g7;
  var Char = kotlin_kotlin.$_$.j9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g2;
  var equals = kotlin_kotlin.$_$.k7;
  var THROW_ISE = kotlin_kotlin.$_$.w9;
  var CoroutineImpl = kotlin_kotlin.$_$.x6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var isInterface = kotlin_kotlin.$_$.a8;
  var Enum = kotlin_kotlin.$_$.m9;
  var removeSuffix = kotlin_kotlin.$_$.b9;
  var Collection = kotlin_kotlin.$_$.k3;
  var contains$default = kotlin_kotlin.$_$.j;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var isObject = kotlin_kotlin.$_$.c8;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var mutableStateOf$default = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var toIntOrNull = kotlin_kotlin.$_$.d9;
  var toUUIDOrNull = kotlin_app_softwork_kotlinx_uuid_core.$_$.a;
  var KMutableProperty1 = kotlin_kotlin.$_$.s8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.n7;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var interfaceMeta = kotlin_kotlin.$_$.r7;
  var KProperty0 = kotlin_kotlin.$_$.t8;
  var getLocalDelegateReference = kotlin_kotlin.$_$.m7;
  var compositionLocalOf$default = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Annotation = kotlin_kotlin.$_$.i9;
  var A$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.a;
  //endregion
  //region block: pre-declaration
  function navigate$default(to, hide, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      hide = false;
    var tmp;
    if ($handler == null) {
      this.navigate_o7uyk9_k$(to, hide);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(to, hide);
    }
    return tmp;
  }
  setMetadataFor(Router, 'Router', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DelegateRouter, 'DelegateRouter', classMeta, undefined, [Router], undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Parameters, 'Parameters', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Path, 'Path', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RouteBuilder$NoMatch$redirect$composable$slambda, 'RouteBuilder$NoMatch$redirect$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(Match, 'Match', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(NoMatch, 'NoMatch', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RouteBuilder$redirect$composable$slambda, 'RouteBuilder$redirect$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(RouteBuilder, 'RouteBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Routing, 'Routing', classMeta, undefined, [Annotation], undefined, undefined, []);
  setMetadataFor(BrowserRouter$getPath$composable$slambda, 'BrowserRouter$getPath$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(BrowserRouter, 'BrowserRouter', classMeta, undefined, [Router], undefined, undefined, []);
  //endregion
  function DelegateRouter(basePath, router) {
    this.basePath_1 = basePath;
    this.router_1 = router;
  }
  DelegateRouter.prototype.get_basePath_ar5vfj_k$ = function () {
    return this.basePath_1;
  };
  DelegateRouter.prototype.get_router_j3zccy_k$ = function () {
    return this.router_1;
  };
  DelegateRouter.prototype.get_currentPath_nu33dh_k$ = function () {
    return this.router_1.get_currentPath_nu33dh_k$();
  };
  DelegateRouter.prototype.getPath_iacoii_k$ = function (initPath) {
    illegalDecoyCallException('getPath');
  };
  DelegateRouter.prototype.navigate_o7uyk9_k$ = function (to, hide) {
    if (startsWith$default(to, '/', false, 2, null)) {
      this.router_1.navigate_o7uyk9_k$(to, hide);
    } else {
      if (this.basePath_1 === '/') {
        this.router_1.navigate_o7uyk9_k$('/' + to, hide);
      } else {
        if (startsWith$default(to, '.', false, 2, null)) {
          var newPath = this.router_1.get_currentPath_nu33dh_k$().relative_ecq6j_k$(to);
          var tmp = newPath.get_path_wos8ry_k$();
          this.router_1.navigate$default_kdt1s4_k$(tmp, false, 2, null);
        } else {
          this.router_1.navigate_o7uyk9_k$(this.basePath_1 + '/' + to, hide);
        }
      }
    }
  };
  DelegateRouter.prototype.getPath$composable_2qganj_k$ = function (initPath, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(2105701293);
    sourceInformation($composer_0, 'C(getPath$composable)');
    if (isTraceInProgress()) {
      traceEventStart(2105701293, $changed, -1, 'app.softwork.routingcompose.DelegateRouter.getPath$composable (DelegateRouter.kt:-1)');
    }
    var tmp0 = this.router_1.getPath$composable_2qganj_k$(initPath, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  function _get_reservedCharacters__roqpzt($this) {
    return $this.reservedCharacters_1;
  }
  function percentEncode(_this__u8e3s4, $this) {
    var encoded = _this__u8e3s4;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = $this.reservedCharacters_1;
    tmp$ret$0 = tmp0_iterator.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator_0 = tmp$ret$0;
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var tmp1_loop_parameter = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = tmp1_loop_parameter.get_key_18j28a_k$();
      var replaced = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = tmp1_loop_parameter.get_value_j01efc_k$();
      var value = tmp$ret$2;
      var tmp = encoded;
      encoded = replace$default(tmp, replaced, value, false, 4, null);
    }
    return encoded;
  }
  function percentDecode(_this__u8e3s4, $this) {
    var decoded = _this__u8e3s4;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = $this.reservedCharacters_1;
    tmp$ret$0 = tmp0_iterator.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator_0 = tmp$ret$0;
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var tmp1_loop_parameter = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = tmp1_loop_parameter.get_key_18j28a_k$();
      var value = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = tmp1_loop_parameter.get_value_j01efc_k$();
      var replacement = tmp$ret$2;
      var tmp = decoded;
      decoded = replace$default(tmp, value, replacement, false, 4, null);
    }
    return decoded;
  }
  function Parameters$Companion$from$lambda(it) {
    return percentDecode(it, Companion_getInstance_0());
  }
  function Parameters$Companion$from$lambda_0(it) {
    return percentDecode(it, Companion_getInstance_0());
  }
  function Companion() {
    Companion_instance = this;
    this.reservedCharacters_1 = mapOf([to('+', ' '), to('%20', ' '), to('%21', '!'), to('%22', '"'), to('%23', '#'), to('%24', '$'), to('%25', '%'), to('%26', '&'), to('%27', "'"), to('%28', '('), to('%29', ')'), to('%2A', '*'), to('%2B', '+'), to('%2C', ','), to('%2D', '-'), to('%2E', '.'), to('%2F', '/'), to('%3A', ':'), to('%3B', ';'), to('%3C', '<'), to('%3D', '='), to('%3E', '>'), to('%3F', '?'), to('%40', '@'), to('%5B', '['), to('%5C', '\\'), to('%5D', ']')]);
  }
  Companion.prototype.from_ev2bjd_k$ = function (rawParameters) {
    var parameters = split$default(rawParameters, ['&', ';'], false, 0, 6, null);
    var tmp$ret$31;
    // Inline function 'kotlin.collections.filter' call
    var tmp$ret$26;
    // Inline function 'kotlin.collections.mapValues' call
    var tmp$ret$17;
    // Inline function 'kotlin.collections.mapValues' call
    var tmp$ret$8;
    // Inline function 'kotlin.collections.groupBy' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(parameters, 10));
    var tmp0_iterator = parameters.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'app.softwork.routingcompose.Companion.from.<anonymous>' call
      tmp$ret$0 = split$default(item, ['='], false, 0, 6, null);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp2_groupBy = tmp$ret$2;
    var tmp$ret$7;
    // Inline function 'kotlin.collections.groupByTo' call
    var tmp1_groupByTo = LinkedHashMap_init_$Create$();
    var tmp0_iterator_0 = tmp2_groupBy.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'app.softwork.routingcompose.Companion.from.<anonymous>' call
      tmp$ret$3 = first(element);
      var key = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.getOrPut' call
      var value = tmp1_groupByTo.get_1mhr4y_k$(key);
      var tmp;
      if (value == null) {
        var tmp$ret$4;
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        tmp$ret$4 = ArrayList_init_$Create$_0();
        var answer = tmp$ret$4;
        tmp1_groupByTo.put_3mhbri_k$(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      tmp$ret$5 = tmp;
      var list = tmp$ret$5;
      var tmp$ret$6;
      // Inline function 'app.softwork.routingcompose.Companion.from.<anonymous>' call
      tmp$ret$6 = last(element);
      list.add_1j60pz_k$(tmp$ret$6);
    }
    tmp$ret$7 = tmp1_groupByTo;
    tmp$ret$8 = tmp$ret$7;
    var tmp5_mapValues = tmp$ret$8;
    var tmp$ret$16;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp4_mapValuesTo = LinkedHashMap_init_$Create$_0(mapCapacity(tmp5_mapValues.get_size_woubt6_k$()));
    var tmp$ret$15;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp3_associateByTo = tmp5_mapValues.get_entries_p20ztl_k$();
    var tmp0_iterator_1 = tmp3_associateByTo.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_1.next_20eer_k$();
      var tmp$ret$9;
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      tmp$ret$9 = element_0.get_key_18j28a_k$();
      var tmp_0 = tmp$ret$9;
      var tmp$ret$14;
      // Inline function 'app.softwork.routingcompose.Companion.from.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'kotlin.collections.filter' call
      var tmp1_filter = element_0.get_value_j01efc_k$();
      var tmp$ret$12;
      // Inline function 'kotlin.collections.filterTo' call
      var tmp0_filterTo = ArrayList_init_$Create$_0();
      var tmp0_iterator_2 = tmp1_filter.iterator_jk1svi_k$();
      while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
        var element_1 = tmp0_iterator_2.next_20eer_k$();
        var tmp$ret$11;
        // Inline function 'app.softwork.routingcompose.Companion.from.<anonymous>.<anonymous>' call
        var tmp$ret$10;
        // Inline function 'kotlin.text.isNotEmpty' call
        tmp$ret$10 = charSequenceLength(element_1) > 0;
        tmp$ret$11 = tmp$ret$10;
        if (tmp$ret$11) {
          tmp0_filterTo.add_1j60pz_k$(element_1);
        }
      }
      tmp$ret$12 = tmp0_filterTo;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp4_mapValuesTo.put_3mhbri_k$(tmp_0, tmp$ret$14);
    }
    tmp$ret$15 = tmp4_mapValuesTo;
    tmp$ret$16 = tmp$ret$15;
    tmp$ret$17 = tmp$ret$16;
    var tmp8_mapValues = tmp$ret$17;
    var tmp$ret$25;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp7_mapValuesTo = LinkedHashMap_init_$Create$_0(mapCapacity(tmp8_mapValues.get_size_woubt6_k$()));
    var tmp$ret$24;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp6_associateByTo = tmp8_mapValues.get_entries_p20ztl_k$();
    var tmp0_iterator_3 = tmp6_associateByTo.iterator_jk1svi_k$();
    while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
      var element_2 = tmp0_iterator_3.next_20eer_k$();
      var tmp$ret$18;
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      tmp$ret$18 = element_2.get_key_18j28a_k$();
      var tmp_1 = tmp$ret$18;
      var tmp$ret$23;
      // Inline function 'app.softwork.routingcompose.Companion.from.<anonymous>' call
      var tmp$ret$19;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$19 = element_2.get_value_j01efc_k$();
      var values = tmp$ret$19;
      var tmp$ret$22;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$21;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
      var tmp0_iterator_4 = values.iterator_jk1svi_k$();
      while (tmp0_iterator_4.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_4.next_20eer_k$();
        var tmp$ret$20;
        // Inline function 'app.softwork.routingcompose.Companion.from.<anonymous>.<anonymous>' call
        tmp$ret$20 = percentEncode(item_0, Companion_getInstance_0());
        tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$20);
      }
      tmp$ret$21 = tmp0_mapTo_0;
      tmp$ret$22 = tmp$ret$21;
      tmp$ret$23 = tmp$ret$22;
      tmp7_mapValuesTo.put_3mhbri_k$(tmp_1, tmp$ret$23);
    }
    tmp$ret$24 = tmp7_mapValuesTo;
    tmp$ret$25 = tmp$ret$24;
    tmp$ret$26 = tmp$ret$25;
    var tmp10_filter = tmp$ret$26;
    var tmp$ret$30;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp9_filterTo = LinkedHashMap_init_$Create$();
    var tmp$ret$27;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$27 = tmp10_filter.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator_5 = tmp$ret$27;
    while (tmp0_iterator_5.hasNext_bitz1p_k$()) {
      var element_3 = tmp0_iterator_5.next_20eer_k$();
      var tmp$ret$29;
      // Inline function 'app.softwork.routingcompose.Companion.from.<anonymous>' call
      var tmp$ret$28;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp0_isNotEmpty = element_3.get_value_j01efc_k$();
      tmp$ret$28 = !tmp0_isNotEmpty.isEmpty_y1axqb_k$();
      tmp$ret$29 = tmp$ret$28;
      if (tmp$ret$29) {
        tmp9_filterTo.put_3mhbri_k$(element_3.get_key_18j28a_k$(), element_3.get_value_j01efc_k$());
      }
    }
    tmp$ret$30 = tmp9_filterTo;
    tmp$ret$31 = tmp$ret$30;
    var keyed = tmp$ret$31;
    return new Parameters(rawParameters, keyed);
  };
  Companion.prototype.from_o0q4vt_k$ = function (parameters) {
    var tmp$ret$9;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp1_flatMap = parameters.get_entries_p20ztl_k$();
    var tmp$ret$8;
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp1_flatMap.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$7;
      // Inline function 'app.softwork.routingcompose.Companion.from.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$0 = element.get_key_18j28a_k$();
      var key = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.get_value_j01efc_k$();
      var values = tmp$ret$1;
      var tmp$ret$6;
      // Inline function 'kotlin.collections.mapNotNull' call
      var tmp$ret$5;
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var tmp0_mapNotNullTo = ArrayList_init_$Create$_0();
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = values.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'app.softwork.routingcompose.Companion.from.<anonymous>.<anonymous>' call
        var tmp;
        var tmp$ret$2;
        // Inline function 'kotlin.text.isEmpty' call
        tmp$ret$2 = charSequenceLength(element_0) === 0;
        if (tmp$ret$2) {
          tmp = null;
        } else {
          tmp = key + '=' + element_0;
        }
        tmp$ret$3 = tmp;
        var tmp0_safe_receiver = tmp$ret$3;
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$4;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          tmp0_mapNotNullTo.add_1j60pz_k$(tmp0_safe_receiver);
          tmp$ret$4 = Unit_getInstance();
        }
      }
      tmp$ret$5 = tmp0_mapNotNullTo;
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      var list = tmp$ret$7;
      addAll(tmp0_flatMapTo, list);
    }
    tmp$ret$8 = tmp0_flatMapTo;
    tmp$ret$9 = tmp$ret$8;
    var tmp_0 = tmp$ret$9;
    var raw = joinToString$default(tmp_0, '&', null, null, 0, null, Parameters$Companion$from$lambda, 30, null);
    return new Parameters(raw, parameters);
  };
  Companion.prototype.from_z4qk69_k$ = function (parameters) {
    var tmp$ret$7;
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp$ret$6;
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var tmp0_mapNotNullTo = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = parameters.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      var tmp$ret$4;
      // Inline function 'app.softwork.routingcompose.Companion.from.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.get_key_18j28a_k$();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.get_value_j01efc_k$();
      var value = tmp$ret$2;
      var tmp;
      var tmp$ret$3;
      // Inline function 'kotlin.text.isEmpty' call
      tmp$ret$3 = charSequenceLength(value) === 0;
      if (tmp$ret$3) {
        tmp = null;
      } else {
        tmp = key + '=' + value;
      }
      tmp$ret$4 = tmp;
      var tmp0_safe_receiver = tmp$ret$4;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$5;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_mapNotNullTo.add_1j60pz_k$(tmp0_safe_receiver);
        tmp$ret$5 = Unit_getInstance();
      }
    }
    tmp$ret$6 = tmp0_mapNotNullTo;
    tmp$ret$7 = tmp$ret$6;
    var tmp_0 = tmp$ret$7;
    var raw = joinToString$default(tmp_0, '&', null, null, 0, null, Parameters$Companion$from$lambda_0, 30, null);
    var tmp$ret$12;
    // Inline function 'kotlin.collections.mapValues' call
    var tmp$ret$11;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp2_mapValuesTo = LinkedHashMap_init_$Create$_0(mapCapacity(parameters.get_size_woubt6_k$()));
    var tmp$ret$10;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp1_associateByTo = parameters.get_entries_p20ztl_k$();
    var tmp0_iterator_0 = tmp1_associateByTo.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$8;
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      tmp$ret$8 = element_0.get_key_18j28a_k$();
      var tmp_1 = tmp$ret$8;
      var tmp$ret$9;
      // Inline function 'app.softwork.routingcompose.Companion.from.<anonymous>' call
      tmp$ret$9 = listOf(element_0.get_value_j01efc_k$());
      tmp2_mapValuesTo.put_3mhbri_k$(tmp_1, tmp$ret$9);
    }
    tmp$ret$10 = tmp2_mapValuesTo;
    tmp$ret$11 = tmp$ret$10;
    tmp$ret$12 = tmp$ret$11;
    return new Parameters(raw, tmp$ret$12);
  };
  Companion.prototype.from_98pm5u_k$ = function (parameters) {
    return this.from_z4qk69_k$(toMap(parameters));
  };
  Companion.prototype.from_y2bee0_k$ = function (parameters) {
    return this.from_o0q4vt_k$(toMap(parameters));
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Parameters(raw, map) {
    Companion_getInstance_0();
    this.raw_1 = raw;
    this.map_1 = map;
    this.$stable_1 = 8;
  }
  Parameters.prototype.get_raw_18ix4x_k$ = function () {
    return this.raw_1;
  };
  Parameters.prototype.get_map_18j0ul_k$ = function () {
    return this.map_1;
  };
  Parameters.prototype.toString = function () {
    return this.raw_1;
  };
  Parameters.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof Parameters)
      other;
    else
      THROW_CCE();
    if (!(this.raw_1 === other.raw_1))
      return false;
    return true;
  };
  Parameters.prototype.hashCode = function () {
    return getStringHashCode(this.raw_1);
  };
  function addPrefix(_this__u8e3s4, $this, prefix) {
    var tmp;
    if (startsWith$default(_this__u8e3s4, prefix, false, 2, null)) {
      tmp = _this__u8e3s4;
    } else {
      tmp = prefix + _this__u8e3s4;
    }
    return tmp;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.from_ev2bjd_k$ = function (rawPath) {
    var pathAndQuery = split$default(rawPath, ['?'], false, 0, 6, null);
    var tmp0_subject = pathAndQuery.get_size_woubt6_k$();
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = to(first(pathAndQuery), null);
        break;
      case 2:
        var tmp_0 = first(pathAndQuery);
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        var tmp0_let = last(pathAndQuery);
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'app.softwork.routingcompose.Companion.from.<anonymous>' call
        tmp$ret$0 = Companion_getInstance_0().from_ev2bjd_k$(tmp0_let);
        tmp$ret$1 = tmp$ret$0;

        tmp = to(tmp_0, tmp$ret$1);
        break;
      default:
        var tmp1_error = "path contains more than 1 '?' delimiter: " + rawPath;
        throw IllegalStateException_init_$Create$(toString(tmp1_error));
    }
    var tmp1_container = tmp;
    var path = tmp1_container.component1_7eebsc_k$();
    var rawParameters = tmp1_container.component2_7eebsb_k$();
    return new Path(addPrefix(path, this, '/'), rawParameters);
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Path$relative$lambda(it) {
    return it;
  }
  function Path(path, parameters) {
    Companion_getInstance_1();
    this.path_1 = path;
    this.parameters_1 = parameters;
    this.$stable_1 = 8;
  }
  Path.prototype.get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  Path.prototype.get_parameters_cl4rkd_k$ = function () {
    return this.parameters_1;
  };
  Path.prototype.newPath_uuodg_k$ = function (currentPath) {
    return new Path(removePrefix(this.path_1, '/' + currentPath), this.parameters_1);
  };
  Path.prototype.relative_ecq6j_k$ = function (to) {
    var paths = split$default(this.path_1, ['/'], false, 0, 6, null);
    var split = split$default(to, ['./'], false, 0, 6, null);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = last(split);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'app.softwork.routingcompose.Path.relative.<anonymous>' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$0 = charSequenceLength(tmp0_let) > 0;
    if (tmp$ret$0) {
      tmp = '/' + tmp0_let;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var result = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.count' call
    tmp$ret$3 = split.get_size_woubt6_k$();
    var number = tmp$ret$3 - 1 | 0;
    var tmp_0 = Companion_getInstance_1();
    var tmp_1 = dropLast(paths, number);
    return tmp_0.from_ev2bjd_k$(joinToString$default(tmp_1, '/', null, result, 0, null, Path$relative$lambda, 26, null));
  };
  Path.prototype.toString = function () {
    var tmp;
    if (this.parameters_1 == null) {
      tmp = this.path_1;
    } else {
      tmp = this.path_1 + '?' + this.parameters_1;
    }
    return tmp;
  };
  Path.prototype.get_currentPath_nu33dh_k$ = function () {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.text.takeWhile' call
      var tmp0_takeWhile = removePrefix(this.path_1, '/');
      var inductionVariable = 0;
      var last = tmp0_takeWhile.length;
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          // Inline function 'app.softwork.routingcompose.Path.<get-currentPath>.<anonymous>' call
          var tmp1__anonymous__uwfjfc = charSequenceGet(tmp0_takeWhile, index);
          tmp$ret$0 = !equals(new Char(tmp1__anonymous__uwfjfc), new Char(_Char___init__impl__6a9atx(47)));
          if (!tmp$ret$0) {
            var tmp$ret$2;
            // Inline function 'kotlin.text.substring' call
            var tmp$ret$1;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$1 = tmp0_takeWhile;
            tmp$ret$2 = tmp$ret$1.substring(0, index);
            tmp$ret$3 = tmp$ret$2;
            break $l$block;
          }
        }
         while (inductionVariable < last);
      tmp$ret$3 = tmp0_takeWhile;
    }
    return tmp$ret$3;
  };
  Path.prototype.component1_7eebsc_k$ = function () {
    return this.path_1;
  };
  Path.prototype.component2_7eebsb_k$ = function () {
    return this.parameters_1;
  };
  Path.prototype.copy_aatl3i_k$ = function (path, parameters) {
    return new Path(path, parameters);
  };
  Path.prototype.copy$default_86tpgm_k$ = function (path, parameters, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      path = this.path_1;
    if (!(($mask0 & 2) === 0))
      parameters = this.parameters_1;
    return this.copy_aatl3i_k$(path, parameters);
  };
  Path.prototype.hashCode = function () {
    var result = getStringHashCode(this.path_1);
    result = imul(result, 31) + (this.parameters_1 == null ? 0 : this.parameters_1.hashCode()) | 0;
    return result;
  };
  Path.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Path))
      return false;
    var tmp0_other_with_cast = other instanceof Path ? other : THROW_CCE();
    if (!(this.path_1 === tmp0_other_with_cast.path_1))
      return false;
    if (!equals(this.parameters_1, tmp0_other_with_cast.parameters_1))
      return false;
    return true;
  };
  var Match_Constant_instance;
  var Match_Integer_instance;
  var Match_String_instance;
  var Match_Uuid_instance;
  var Match_NoMatch_instance;
  function values() {
    return [Match_Constant_getInstance(), Match_Integer_getInstance(), Match_String_getInstance(), Match_Uuid_getInstance(), Match_NoMatch_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Constant':
        return Match_Constant_getInstance();
      case 'Integer':
        return Match_Integer_getInstance();
      case 'String':
        return Match_String_getInstance();
      case 'Uuid':
        return Match_Uuid_getInstance();
      case 'NoMatch':
        return Match_NoMatch_getInstance();
      default:
        Match_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Match_entriesInitialized;
  function Match_initEntries() {
    if (Match_entriesInitialized)
      return Unit_getInstance();
    Match_entriesInitialized = true;
    Match_Constant_instance = new Match('Constant', 0);
    Match_Integer_instance = new Match('Integer', 1);
    Match_String_instance = new Match('String', 2);
    Match_Uuid_instance = new Match('Uuid', 3);
    Match_NoMatch_instance = new Match('NoMatch', 4);
  }
  function RouteBuilder$NoMatch$redirect$composable$slambda($router, $target, $hide, resultContinuation) {
    this.$router_1 = $router;
    this.$target_1 = $target;
    this.$hide_1 = $hide;
    CoroutineImpl.call(this, resultContinuation);
  }
  RouteBuilder$NoMatch$redirect$composable$slambda.prototype.invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $cont) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  RouteBuilder$NoMatch$redirect$composable$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RouteBuilder$NoMatch$redirect$composable$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          this.$router_1.navigate_o7uyk9_k$(this.$target_1, this.$hide_1._v);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  RouteBuilder$NoMatch$redirect$composable$slambda.prototype.create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new RouteBuilder$NoMatch$redirect$composable$slambda(this.$router_1, this.$target_1, this.$hide_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  RouteBuilder$NoMatch$redirect$composable$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RouteBuilder$NoMatch$redirect$composable$slambda_0($router, $target, $hide, resultContinuation) {
    var i = new RouteBuilder$NoMatch$redirect$composable$slambda($router, $target, $hide, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RouteBuilder$NoMatch$redirect$composable$lambda($tmp0_rcvr, $target, $hide, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.redirect$composable_k47wcw_k$($target, $hide._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function _get_basePath__5rs5xn($this) {
    return $this.basePath_1;
  }
  function _get_remainingPath__vexgqe($this) {
    return $this.remainingPath_1;
  }
  function _set_match__hnr2g0($this, _set____db54di) {
    var tmp0_setValue = match$factory();
    return $this.match$delegate_1.set_value_rnwamw_k$(_set____db54di);
  }
  function _get_match__edde1g($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = match$factory_0();
    tmp$ret$0 = $this.match$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function Match(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function check(_this__u8e3s4, $this) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(_this__u8e3s4.length);
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'app.softwork.routingcompose.RouteBuilder.check.<anonymous>' call
      tmp$ret$0 = removeSuffix(removePrefix(item, '/'), '/');
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var relaxedRoute = tmp$ret$2;
    // Inline function 'kotlin.require' call
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.none' call
      var tmp;
      if (isInterface(relaxedRoute, Collection)) {
        tmp = relaxedRoute.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$3 = true;
        break $l$block_0;
      }
      var tmp0_iterator = relaxedRoute.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$4;
        // Inline function 'app.softwork.routingcompose.RouteBuilder.check.<anonymous>' call
        tmp$ret$4 = contains$default(element, '/', false, 2, null);
        if (tmp$ret$4) {
          tmp$ret$3 = false;
          break $l$block_0;
        }
      }
      tmp$ret$3 = true;
    }
    var tmp1_require = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$5;
      // Inline function 'app.softwork.routingcompose.RouteBuilder.check.<anonymous>' call
      tmp$ret$5 = 'To use nested routes, use route() { route() { } } instead.';
      var message = tmp$ret$5;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return relaxedRoute;
  }
  function execute($this, currentPath, nestedRoute) {
    illegalDecoyCallException('execute');
  }
  function NoMatch(remainingPath, parameters) {
    this.remainingPath_1 = remainingPath;
    this.parameters_1 = parameters;
    this.$stable_1 = 8;
  }
  NoMatch.prototype.get_remainingPath_6e3wnm_k$ = function () {
    return this.remainingPath_1;
  };
  NoMatch.prototype.get_parameters_cl4rkd_k$ = function () {
    return this.parameters_1;
  };
  NoMatch.prototype.redirect_wyfcvi_k$ = function (target, hide) {
    illegalDecoyCallException('redirect');
  };
  NoMatch.prototype.redirect$composable_k47wcw_k$ = function (target, hide, $composer, $changed, $default) {
    var hide_0 = {_v: hide};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-206401817);
    sourceInformation($composer_0, 'C(redirect$composable)P(1)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(target) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(hide_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        hide_0._v = false;
      }
      if (isTraceInProgress()) {
        traceEventStart(-206401817, $changed, -1, 'app.softwork.routingcompose.RouteBuilder.NoMatch.redirect$composable (RouteBuilder.kt:156)');
      }
      var router = Companion_getInstance_2().$get_current$$composable_lr7uxx_k$($composer_0, 6);
      LaunchedEffect$composable(Unit_getInstance(), RouteBuilder$NoMatch$redirect$composable$slambda_0(router, target, hide_0, null), $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(RouteBuilder$NoMatch$redirect$composable$lambda(tmp0_rcvr, target, hide_0, $changed, $default));
    }
  };
  function execute$composable($this, currentPath, nestedRoute, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-943158333);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(currentPath) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(nestedRoute) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-943158333, $dirty, -1, 'app.softwork.routingcompose.RouteBuilder.execute$composable (RouteBuilder.kt:84)');
      }
      var newPath = $this.remainingPath_1.newPath_uuodg_k$(currentPath);
      var currentRouter = Companion_getInstance_2().$get_current$$composable_lr7uxx_k$($composer_0, 6);
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.changed_ga7h3f_k$(newPath);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'app.softwork.routingcompose.RouteBuilder.execute$composable.<anonymous>' call
        tmp$ret$0 = new DelegateRouter($this.basePath_1, currentRouter);
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
      var delegatingRouter = tmp$ret$4;
      var tmp_1 = [get_RouterCompositionLocal().provides_3e53yf_k$(delegatingRouter)];
      var tmp$ret$11;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$10;
      // Inline function 'app.softwork.routingcompose.RouteBuilder.execute$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 93719673, true, RouteBuilder$execute$composable$lambda($this, newPath, nestedRoute, $dirty));
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable_0 = $composer_0;
      var $composer_2 = tmp3_remember$composable_0;
      $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$5;
        // Inline function 'app.softwork.routingcompose.RouteBuilder.execute$composable.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableLambda$invoke$ref(dispatchReceiver);
        var value_0 = tmp$ret$5;
        tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = tmp0_let_0;
      }
      tmp$ret$6 = tmp_3;
      tmp$ret$7 = tmp$ret$6;
      var tmp_4 = tmp$ret$7;
      tmp$ret$8 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.endReplaceableGroup_er37p7_k$();
      tmp$ret$9 = tmp0_0;
      tmp$ret$10 = tmp$ret$9;
      tmp$ret$11 = tmp$ret$10;
      CompositionLocalProvider$composable(tmp_1, tmp$ret$11, $composer_0, 48);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_rcvr = $this;
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(RouteBuilder$execute$composable$lambda_0(tmp0_rcvr, currentPath, nestedRoute, $changed));
    }
  }
  function RouteBuilder$route$composable$lambda($tmp0_rcvr, $route, $nestedRoute, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.route$composable_r4f5k7_k$($route.slice(), $nestedRoute, $composer, $$changed | 1);
      return Unit_getInstance();
    };
  }
  function RouteBuilder$redirect$composable$slambda($router, $target, $hide, resultContinuation) {
    this.$router_1 = $router;
    this.$target_1 = $target;
    this.$hide_1 = $hide;
    CoroutineImpl.call(this, resultContinuation);
  }
  RouteBuilder$redirect$composable$slambda.prototype.invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $cont) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  RouteBuilder$redirect$composable$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RouteBuilder$redirect$composable$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          this.$router_1.navigate_o7uyk9_k$(this.$target_1, this.$hide_1._v);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  RouteBuilder$redirect$composable$slambda.prototype.create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new RouteBuilder$redirect$composable$slambda(this.$router_1, this.$target_1, this.$hide_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  RouteBuilder$redirect$composable$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RouteBuilder$redirect$composable$slambda_0($router, $target, $hide, resultContinuation) {
    var i = new RouteBuilder$redirect$composable$slambda($router, $target, $hide, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RouteBuilder$redirect$composable$lambda($tmp0_rcvr, $route, $target, $hide, $$changed, $$default) {
    return function ($composer, $force) {
      $tmp0_rcvr.redirect$composable_8trvu5_k$($route.slice(), $target, $hide._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function RouteBuilder$execute$composable$lambda(this$0, $newPath, $nestedRoute, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(93719673, $changed, -1, 'app.softwork.routingcompose.RouteBuilder.execute$composable.<anonymous> (RouteBuilder.kt:88)');
        }
        var newState = new RouteBuilder(this$0.basePath_1, $newPath);
        $nestedRoute(newState, $composer_0, 112 & $$dirty);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function RouteBuilder$execute$composable$lambda_0($tmp0_rcvr, $currentPath, $nestedRoute, $$changed) {
    return function ($composer, $force) {
      execute$composable($tmp0_rcvr, $currentPath, $nestedRoute, $composer, $$changed | 1);
      return Unit_getInstance();
    };
  }
  function RouteBuilder$string$composable$lambda($nestedRoute, $currentPath, $$dirty) {
    return function ($this$execute, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$execute) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1608782891, $dirty, -1, 'app.softwork.routingcompose.RouteBuilder.string$composable.<anonymous> (RouteBuilder.kt:102)');
        }
        $nestedRoute($this$execute, $currentPath, $composer_0, 14 & $dirty | 896 & $$dirty << 6);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function RouteBuilder$string$composable$lambda_0($tmp0_rcvr, $nestedRoute, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.string$composable_p36gtv_k$($nestedRoute, $composer, $$changed | 1);
      return Unit_getInstance();
    };
  }
  function RouteBuilder$int$composable$lambda($nestedRoute, $int, $$dirty) {
    return function ($this$execute, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$execute) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1300983967, $dirty, -1, 'app.softwork.routingcompose.RouteBuilder.int$composable.<anonymous> (RouteBuilder.kt:118)');
        }
        $nestedRoute($this$execute, $int, $composer_0, 14 & $dirty | 896 & $$dirty << 6);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function RouteBuilder$int$composable$lambda_0($tmp0_rcvr, $nestedRoute, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.int$composable_evb4of_k$($nestedRoute, $composer, $$changed | 1);
      return Unit_getInstance();
    };
  }
  function RouteBuilder$uuid$composable$lambda($nestedRoute, $uuid, $$dirty) {
    return function ($this$execute, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$execute) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1964291777, $dirty, -1, 'app.softwork.routingcompose.RouteBuilder.uuid$composable.<anonymous> (RouteBuilder.kt:134)');
        }
        $nestedRoute($this$execute, $uuid, $composer_0, 14 & $dirty | 896 & $$dirty << 6);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function RouteBuilder$uuid$composable$lambda_0($tmp0_rcvr, $nestedRoute, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.uuid$composable_1fr50c_k$($nestedRoute, $composer, $$changed | 1);
      return Unit_getInstance();
    };
  }
  function RouteBuilder$noMatch$composable$lambda($tmp0_rcvr, $content, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.noMatch$composable_bbyymj_k$($content, $composer, $$changed | 1);
      return Unit_getInstance();
    };
  }
  function Match_Constant_getInstance() {
    Match_initEntries();
    return Match_Constant_instance;
  }
  function Match_Integer_getInstance() {
    Match_initEntries();
    return Match_Integer_instance;
  }
  function Match_String_getInstance() {
    Match_initEntries();
    return Match_String_instance;
  }
  function Match_Uuid_getInstance() {
    Match_initEntries();
    return Match_Uuid_instance;
  }
  function Match_NoMatch_getInstance() {
    Match_initEntries();
    return Match_NoMatch_instance;
  }
  function RouteBuilder(basePath, remainingPath) {
    this.basePath_1 = basePath;
    this.remainingPath_1 = remainingPath;
    this.parameters_1 = this.remainingPath_1.get_parameters_cl4rkd_k$();
    var tmp = this;
    var tmp_0 = Match_NoMatch_getInstance();
    tmp.match$delegate_1 = mutableStateOf$default(tmp_0, null, 2, null);
    this.$stable_1 = 0;
  }
  RouteBuilder.prototype.get_parameters_cl4rkd_k$ = function () {
    return this.parameters_1;
  };
  RouteBuilder.prototype.route_rc68t_k$ = function (route, nestedRoute) {
    illegalDecoyCallException('route');
  };
  RouteBuilder.prototype.redirect_4o9157_k$ = function (route, target, hide) {
    illegalDecoyCallException('redirect');
  };
  RouteBuilder.prototype.string_ge24bd_k$ = function (nestedRoute) {
    illegalDecoyCallException('string');
  };
  RouteBuilder.prototype.int_qxwji1_k$ = function (nestedRoute) {
    illegalDecoyCallException('int');
  };
  RouteBuilder.prototype.uuid_zdfecc_k$ = function (nestedRoute) {
    illegalDecoyCallException('uuid');
  };
  RouteBuilder.prototype.noMatch_a2gkl1_k$ = function (content) {
    illegalDecoyCallException('noMatch');
  };
  RouteBuilder.prototype.route$composable_r4f5k7_k$ = function (route, nestedRoute, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-922082958);
    sourceInformation($composer_0, 'C(route$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(nestedRoute) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 256 : 128);
    $composer_0.startMovableGroup_rpq74u_k$(1094008379, route.length);
    var indexedObject = route;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var value = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 4 : 0);
    }
    $composer_0.endMovableGroup_kciorf_k$();
    if (($dirty & 14) === 0)
      $dirty = $dirty | 2;
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-922082958, $dirty, -1, 'app.softwork.routingcompose.RouteBuilder.route$composable (RouteBuilder.kt:52)');
      }
      var relaxedRoute = check(route, this);
      var currentPath = this.remainingPath_1.get_currentPath_nu33dh_k$();
      if ((_get_match__edde1g(this).equals(Match_NoMatch_getInstance()) ? true : _get_match__edde1g(this).equals(Match_Constant_getInstance())) ? relaxedRoute.contains_2ehdt1_k$(currentPath) : false) {
        execute$composable(this, currentPath, nestedRoute, $composer_0, 112 & $dirty | 896 & $dirty);
        _set_match__hnr2g0(this, Match_Constant_getInstance());
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(RouteBuilder$route$composable$lambda(tmp0_rcvr, route, nestedRoute, $changed));
    }
  };
  RouteBuilder.prototype.redirect$composable_8trvu5_k$ = function (route, target, hide, $composer, $changed, $default) {
    var hide_0 = {_v: hide};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(607927292);
    sourceInformation($composer_0, 'C(redirect$composable)P(1,2)');
    var $dirty = $changed;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(target) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(hide_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 2048 : 1024);
    $composer_0.startMovableGroup_rpq74u_k$(1200791899, route.length);
    var indexedObject = route;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var value = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 4 : 0);
    }
    $composer_0.endMovableGroup_kciorf_k$();
    if (($dirty & 14) === 0)
      $dirty = $dirty | 2;
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 4) === 0)) {
        hide_0._v = false;
      }
      if (isTraceInProgress()) {
        traceEventStart(607927292, $changed, -1, 'app.softwork.routingcompose.RouteBuilder.redirect$composable (RouteBuilder.kt:72)');
      }
      var routes = check(route, this);
      var currentPath = this.remainingPath_1.get_currentPath_nu33dh_k$();
      if (_get_match__edde1g(this).equals(Match_NoMatch_getInstance()) ? routes.contains_2ehdt1_k$(currentPath) : false) {
        var router = Companion_getInstance_2().$get_current$$composable_lr7uxx_k$($composer_0, 6);
        LaunchedEffect$composable(Unit_getInstance(), RouteBuilder$redirect$composable$slambda_0(router, target, hide_0, null), $composer_0, 6);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(RouteBuilder$redirect$composable$lambda(tmp0_rcvr, route, target, hide_0, $changed, $default));
    }
  };
  RouteBuilder.prototype.string$composable_p36gtv_k$ = function (nestedRoute, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-427238156);
    sourceInformation($composer_0, 'C(string$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(nestedRoute) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-427238156, $dirty, -1, 'app.softwork.routingcompose.RouteBuilder.string$composable (RouteBuilder.kt:99)');
      }
      var currentPath = this.remainingPath_1.get_currentPath_nu33dh_k$();
      var tmp;
      if (_get_match__edde1g(this).equals(Match_NoMatch_getInstance()) ? true : _get_match__edde1g(this).equals(Match_String_getInstance())) {
        var tmp$ret$0;
        // Inline function 'kotlin.text.isNotEmpty' call
        tmp$ret$0 = charSequenceLength(currentPath) > 0;
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        var tmp$ret$7;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'app.softwork.routingcompose.RouteBuilder.string$composable.<anonymous>' call
        var tmp_0 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_0, 1608782891, true, RouteBuilder$string$composable$lambda(nestedRoute, currentPath, $dirty));
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_1 = tmp3_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var tmp$ret$1;
          // Inline function 'app.softwork.routingcompose.RouteBuilder.string$composable.<anonymous>.<anonymous>' call
          tmp$ret$1 = ComposableLambda$invoke$ref_0(dispatchReceiver);
          var value = tmp$ret$1;
          tmp1_cache.updateRememberedValue_l1colo_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$2 = tmp_1;
        tmp$ret$3 = tmp$ret$2;
        var tmp_2 = tmp$ret$3;
        tmp$ret$4 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0 = tmp$ret$4;
        $composer_1.endReplaceableGroup_er37p7_k$();
        tmp$ret$5 = tmp0;
        tmp$ret$6 = tmp$ret$5;
        tmp$ret$7 = tmp$ret$6;
        execute$composable(this, currentPath, tmp$ret$7, $composer_0, 48 | 896 & $dirty << 3);
        _set_match__hnr2g0(this, Match_String_getInstance());
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(RouteBuilder$string$composable$lambda_0(tmp0_rcvr, nestedRoute, $changed));
    }
  };
  RouteBuilder.prototype.int$composable_evb4of_k$ = function (nestedRoute, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1209931246);
    sourceInformation($composer_0, 'C(int$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(nestedRoute) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1209931246, $dirty, -1, 'app.softwork.routingcompose.RouteBuilder.int$composable (RouteBuilder.kt:114)');
      }
      var currentPath = this.remainingPath_1.get_currentPath_nu33dh_k$();
      var int = toIntOrNull(currentPath);
      if ((_get_match__edde1g(this).equals(Match_NoMatch_getInstance()) ? true : _get_match__edde1g(this).equals(Match_Integer_getInstance())) ? !(int == null) : false) {
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'app.softwork.routingcompose.RouteBuilder.int$composable.<anonymous>' call
        var tmp = $composer_0;
        var dispatchReceiver = composableLambda(tmp, -1300983967, true, RouteBuilder$int$composable$lambda(nestedRoute, int, $dirty));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_1 = tmp3_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'app.softwork.routingcompose.RouteBuilder.int$composable.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
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
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        execute$composable(this, currentPath, tmp$ret$6, $composer_0, 48 | 896 & $dirty << 3);
        _set_match__hnr2g0(this, Match_Integer_getInstance());
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(RouteBuilder$int$composable$lambda_0(tmp0_rcvr, nestedRoute, $changed));
    }
  };
  RouteBuilder.prototype.uuid$composable_1fr50c_k$ = function (nestedRoute, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-526765538);
    sourceInformation($composer_0, 'C(uuid$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(nestedRoute) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-526765538, $dirty, -1, 'app.softwork.routingcompose.RouteBuilder.uuid$composable (RouteBuilder.kt:130)');
      }
      var currentPath = this.remainingPath_1.get_currentPath_nu33dh_k$();
      var uuid = toUUIDOrNull(currentPath);
      if ((_get_match__edde1g(this).equals(Match_NoMatch_getInstance()) ? true : _get_match__edde1g(this).equals(Match_Uuid_getInstance())) ? !(uuid == null) : false) {
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'app.softwork.routingcompose.RouteBuilder.uuid$composable.<anonymous>' call
        var tmp = $composer_0;
        var dispatchReceiver = composableLambda(tmp, 1964291777, true, RouteBuilder$uuid$composable$lambda(nestedRoute, uuid, $dirty));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_1 = tmp3_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'app.softwork.routingcompose.RouteBuilder.uuid$composable.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_2(dispatchReceiver);
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
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        execute$composable(this, currentPath, tmp$ret$6, $composer_0, 48 | 896 & $dirty << 3);
        _set_match__hnr2g0(this, Match_Uuid_getInstance());
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(RouteBuilder$uuid$composable$lambda_0(tmp0_rcvr, nestedRoute, $changed));
    }
  };
  RouteBuilder.prototype.noMatch$composable_bbyymj_k$ = function (content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(715471496);
    sourceInformation($composer_0, 'C(noMatch$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(content) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(715471496, $dirty, -1, 'app.softwork.routingcompose.RouteBuilder.noMatch$composable (RouteBuilder.kt:146)');
      }
      if (_get_match__edde1g(this).equals(Match_NoMatch_getInstance())) {
        content(new NoMatch(this.remainingPath_1.get_path_wos8ry_k$(), this.remainingPath_1.get_parameters_cl4rkd_k$()), $composer_0, 112 & $dirty << 3);
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(RouteBuilder$noMatch$composable$lambda(tmp0_rcvr, content, $changed));
    }
  };
  function match$factory() {
    return getPropertyCallableRef('match', 1, KMutableProperty1, function (receiver) {
      return _get_match__edde1g(receiver);
    }, function (receiver, value) {
      return _set_match__hnr2g0(receiver, value);
    });
  }
  function match$factory_0() {
    return getPropertyCallableRef('match', 1, KMutableProperty1, function (receiver) {
      return _get_match__edde1g(receiver);
    }, function (receiver, value) {
      return _set_match__hnr2g0(receiver, value);
    });
  }
  function get_RouterCompositionLocal() {
    init_properties_Router_kt_3tl4s1();
    return RouterCompositionLocal;
  }
  var RouterCompositionLocal;
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.prototype.get_current_jwi6j4_k$ = function () {
    illegalDecoyCallException('<get-current>');
  };
  Companion_1.prototype.$get_current$$composable_lr7uxx_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1443999548);
    sourceInformation($composer_0, 'C($get-current$$composable)');
    if (isTraceInProgress()) {
      traceEventStart(-1443999548, $changed, -1, 'app.softwork.routingcompose.Router.Companion.$get-current$$composable (Router.kt:28)');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_RouterCompositionLocal();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var tmp0_0 = tmp$ret$0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Router() {
    Companion_getInstance_2();
  }
  function route$composable(_this__u8e3s4, initRoute, routing, $composer, $changed) {
    init_properties_Router_kt_3tl4s1();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1005602596);
    sourceInformation($composer_0, 'C(route$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(_this__u8e3s4) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(initRoute) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(routing) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1005602596, $dirty, -1, 'app.softwork.routingcompose.route$composable (Router.kt:36)');
      }
      var tmp = [get_RouterCompositionLocal().provides_3e53yf_k$(_this__u8e3s4)];
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'app.softwork.routingcompose.route$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 1744162961, true, route$composable$lambda(_this__u8e3s4, initRoute, $dirty, routing));
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_1 = tmp3_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'app.softwork.routingcompose.route$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_3(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      tmp$ret$1 = tmp_1;
      tmp$ret$2 = tmp$ret$1;
      var tmp_2 = tmp$ret$2;
      tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      CompositionLocalProvider$composable(tmp, tmp$ret$6, $composer_0, 48);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(route$composable$lambda_0(_this__u8e3s4, initRoute, routing, $changed));
    }
  }
  function route$composable$_anonymous_$_anonymous_$lambda$0_85cly5($rawPath$delegate) {
    init_properties_Router_kt_3tl4s1();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('rawPath', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $rawPath$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function RouterCompositionLocal$lambda() {
    init_properties_Router_kt_3tl4s1();
    throw IllegalStateException_init_$Create$('Router not defined, cannot provide through RouterCompositionLocal.');
  }
  function route$composable$lambda($this_route$composable, $initRoute, $$dirty, $routing) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1744162961, $changed, -1, 'app.softwork.routingcompose.route$composable.<anonymous> (Router.kt:40)');
        }
        var rawPath$delegate = $this_route$composable.getPath$composable_2qganj_k$($initRoute, $composer_0, 14 & $$dirty >> 3 | 112 & $$dirty << 3);
        var path = Companion_getInstance_1().from_ev2bjd_k$(route$composable$_anonymous_$_anonymous_$lambda$0_85cly5(rawPath$delegate));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_1 = tmp3_remember$composable;
        $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.changed_ga7h3f_k$(path);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'app.softwork.routingcompose.route$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = new RouteBuilder(path.get_path_wos8ry_k$(), path);
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
        var node = tmp$ret$4;
        $routing(node, $composer_0, 112 & $$dirty >> 3);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function route$composable$lambda_0($this_route$composable, $initRoute, $routing, $$changed) {
    return function ($composer, $force) {
      route$composable($this_route$composable, $initRoute, $routing, $composer, $$changed | 1);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Router_kt_w3eu7f;
  function init_properties_Router_kt_3tl4s1() {
    if (properties_initialized_Router_kt_w3eu7f) {
    } else {
      properties_initialized_Router_kt_w3eu7f = true;
      RouterCompositionLocal = compositionLocalOf$default(null, RouterCompositionLocal$lambda, 1, null);
    }
  }
  function Routing() {
  }
  Routing.prototype.equals = function (other) {
    if (!(other instanceof Routing))
      return false;
    var tmp0_other_with_cast = other instanceof Routing ? other : THROW_CCE();
    return true;
  };
  Routing.prototype.hashCode = function () {
    return 0;
  };
  Routing.prototype.toString = function () {
    return '@app.softwork.routingcompose.Routing()';
  };
  function BrowserRouter$composable(initPath, routeBuilder, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1367440067);
    sourceInformation($composer_0, 'C(BrowserRouter$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(initPath) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(routeBuilder) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1367440067, $dirty, -1, 'app.softwork.routingcompose.BrowserRouter$composable (BrowserRouter.kt:24)');
      }
      route$composable(new BrowserRouter(), initPath, routeBuilder, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(BrowserRouter$composable$lambda(initPath, routeBuilder, $changed));
    }
  }
  function BrowserRouter$getPath$composable$slambda$lambda(this$0) {
    return function (it) {
      this$0.currentLocation_1.set_value_rnwamw_k$(newPath(window.location, this$0));
      return Unit_getInstance();
    };
  }
  function _get_currentLocation__xnxc3h($this) {
    return $this.currentLocation_1;
  }
  function newPath(_this__u8e3s4, $this) {
    return _this__u8e3s4.pathname + _this__u8e3s4.search;
  }
  function BrowserRouter$getPath$composable$slambda(this$0, $initPath, resultContinuation) {
    this.this$0__1 = this$0;
    this.$initPath_1 = $initPath;
    CoroutineImpl.call(this, resultContinuation);
  }
  BrowserRouter$getPath$composable$slambda.prototype.invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $cont) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  BrowserRouter$getPath$composable$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  BrowserRouter$getPath$composable$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          var tmp0_takeUnless = newPath(window.location, this.this$0__1);
          var tmp_0;
          if (!(tmp0_takeUnless === '/')) {
            tmp_0 = tmp0_takeUnless;
          } else {
            tmp_0 = null;
          }
          var tmp0_elvis_lhs = tmp_0;
          this.this$0__1.currentLocation_1.set_value_rnwamw_k$(tmp0_elvis_lhs == null ? this.$initPath_1 : tmp0_elvis_lhs);
          var tmp_1 = window;
          tmp_1.onpopstate = BrowserRouter$getPath$composable$slambda$lambda(this.this$0__1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  BrowserRouter$getPath$composable$slambda.prototype.create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new BrowserRouter$getPath$composable$slambda(this.this$0__1, this.$initPath_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  BrowserRouter$getPath$composable$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function BrowserRouter$getPath$composable$slambda_0(this$0, $initPath, resultContinuation) {
    var i = new BrowserRouter$getPath$composable$slambda(this$0, $initPath, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function BrowserRouter() {
    var tmp = this;
    var tmp_0 = newPath(window.location, this);
    tmp.currentLocation_1 = mutableStateOf$default(tmp_0, null, 2, null);
  }
  BrowserRouter.prototype.get_currentPath_nu33dh_k$ = function () {
    return Companion_getInstance_1().from_ev2bjd_k$(this.currentLocation_1.get_value_j01efc_k$());
  };
  BrowserRouter.prototype.getPath_iacoii_k$ = function (initPath) {
    illegalDecoyCallException('getPath');
  };
  BrowserRouter.prototype.navigate_o7uyk9_k$ = function (to, hide) {
    if (hide) {
      this.currentLocation_1.set_value_rnwamw_k$(to);
    } else {
      window.history.pushState(null, '', to);
      this.currentLocation_1.set_value_rnwamw_k$(newPath(window.location, this));
    }
  };
  BrowserRouter.prototype.getPath$composable_2qganj_k$ = function (initPath, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1388521630);
    sourceInformation($composer_0, 'C(getPath$composable)');
    if (isTraceInProgress()) {
      traceEventStart(-1388521630, $changed, -1, 'app.softwork.routingcompose.BrowserRouter.getPath$composable (BrowserRouter.kt:38)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var tmp4_remember$composable = 14 & $changed >> 3 | 112 & $changed << 3;
    var $composer_1 = tmp3_remember$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
    sourceInformation($composer_1, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = !!($composer_1.changed_ga7h3f_k$(this) | $composer_1.changed_ga7h3f_k$(initPath));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
      var tmp$ret$0;
      // Inline function 'app.softwork.routingcompose.BrowserRouter.getPath$composable.<anonymous>' call
      tmp$ret$0 = BrowserRouter$getPath$composable$slambda_0(this, initPath, null);
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
    LaunchedEffect$composable(Unit_getInstance(), tmp$ret$4, $composer_0, 6);
    var tmp0_0 = this.currentLocation_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  };
  function BrowserRouter$composable$lambda($initPath, $routeBuilder, $$changed) {
    return function ($composer, $force) {
      BrowserRouter$composable($initPath, $routeBuilder, $composer, $$changed | 1);
      return Unit_getInstance();
    };
  }
  function NavLink$composable(to, attrs, content, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1451423471);
    sourceInformation($composer_0, 'C(NavLink$composable)P(2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(to) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(content_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1451423471, $dirty, -1, 'app.softwork.routingcompose.NavLink$composable (NavLink.kt:13)');
      }
      var router = Companion_getInstance_2().$get_current$$composable_lr7uxx_k$($composer_0, 6);
      A$composable(to, NavLink$composable$lambda(router, to, attrs_0), content_0._v, $composer_0, 14 & $dirty | 896 & $dirty, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(NavLink$composable$lambda_0(to, attrs_0, content_0, $changed, $default));
    }
  }
  function NavLink$composable$lambda$lambda($router, $to) {
    return function (it) {
      var tmp;
      if (it.get_ctrlKey_jfc6q3_k$() ? true : it.get_metaKey_h2b5f5_k$()) {
        return Unit_getInstance();
      }
      $router.navigate$default_kdt1s4_k$($to, false, 2, null);
      it.preventDefault_xrmx2w_k$();
      return Unit_getInstance();
    };
  }
  function NavLink$composable$lambda($router, $to, $attrs) {
    return function ($this$A) {
      var currentPath = $router.get_currentPath_nu33dh_k$().get_path_wos8ry_k$();
      var tmp;
      if ($to === '/') {
        tmp = currentPath === $to;
      } else {
        tmp = startsWith$default(currentPath, $to, false, 2, null);
      }
      var selected = tmp;
      $this$A.onClick_3adsri_k$(NavLink$composable$lambda$lambda($router, $to));
      var tmp0_safe_receiver = $attrs._v;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$A, selected);
      return Unit_getInstance();
    };
  }
  function NavLink$composable$lambda_0($to, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      NavLink$composable($to, $attrs._v, $content._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  //region block: post-declaration
  DelegateRouter.prototype.navigate$default_kdt1s4_k$ = navigate$default;
  BrowserRouter.prototype.navigate$default_kdt1s4_k$ = navigate$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BrowserRouter$composable;
  _.$_$.b = NavLink$composable;
  //endregion
  return _;
}));
