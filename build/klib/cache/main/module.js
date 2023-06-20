(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './web-internal-web-core-runtime.js', './androidx-runtime.js', './web-web-core.js', './routing-compose.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./web-internal-web-core-runtime.js'), require('./androidx-runtime.js'), require('./web-web-core.js'), require('./routing-compose.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Lab8'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Lab8'.");
    }
    if (typeof this['web-internal-web-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'Lab8'. Its dependency 'web-internal-web-core-runtime' was not found. Please, check whether 'web-internal-web-core-runtime' is loaded prior to 'Lab8'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'Lab8'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'Lab8'.");
    }
    if (typeof this['web-web-core'] === 'undefined') {
      throw new Error("Error loading module 'Lab8'. Its dependency 'web-web-core' was not found. Please, check whether 'web-web-core' is loaded prior to 'Lab8'.");
    }
    if (typeof this['routing-compose'] === 'undefined') {
      throw new Error("Error loading module 'Lab8'. Its dependency 'routing-compose' was not found. Please, check whether 'routing-compose' is loaded prior to 'Lab8'.");
    }
    root.Lab8 = factory(typeof Lab8 === 'undefined' ? {} : Lab8, this['kotlin-kotlin-stdlib-js-ir'], this['web-internal-web-core-runtime'], this['androidx-runtime'], this['web-web-core'], this['routing-compose']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_web_internal_web_core_runtime, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_web_web_core, kotlin_app_softwork_routing_compose) {
  'use strict';
  //region block: imports
  var println = kotlin_kotlin.$_$.a7;
  var renderComposable$composable = kotlin_org_jetbrains_compose_web_internal_web_core_runtime.$_$.e;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var Unit_getInstance = kotlin_kotlin.$_$.c3;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var objectMeta = kotlin_kotlin.$_$.h8;
  var setMetadataFor = kotlin_kotlin.$_$.i8;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.e1;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var THROW_CCE = kotlin_kotlin.$_$.v9;
  var isObject = kotlin_kotlin.$_$.c8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var IllegalArgumentException = kotlin_kotlin.$_$.p9;
  var KMutableProperty0 = kotlin_kotlin.$_$.r8;
  var THROW_ISE = kotlin_kotlin.$_$.w9;
  var getLocalDelegateReference = kotlin_kotlin.$_$.m7;
  var Enum = kotlin_kotlin.$_$.m9;
  var classMeta = kotlin_kotlin.$_$.i7;
  var mutableStateOf$default = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Div$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.b;
  var KProperty0 = kotlin_kotlin.$_$.t8;
  var toString = kotlin_kotlin.$_$.la;
  var Text$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.c;
  var NavLink$composable = kotlin_app_softwork_routing_compose.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var BrowserRouter$composable = kotlin_app_softwork_routing_compose.$_$.a;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$AppKt, 'ComposableSingletons$AppKt', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Languages, 'Languages', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(StateManager, 'StateManager', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ComposableSingletons$HeaderKt, 'ComposableSingletons$HeaderKt', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ComposableSingletons$LocaleButtonKt, 'ComposableSingletons$LocaleButtonKt', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ComposableSingletons$RouterKt, 'ComposableSingletons$RouterKt', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Routes, 'Routes', objectMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function main() {
    println(getCookie('lang'));
    renderComposable$composable('root', ComposableSingletons$AppKt_getInstance().lambda_1_r8sbbp_1);
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$AppKt$lambda_1$lambda_ua4ft5($this$renderComposable, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1561033869, $changed, -1, 'ComposableSingletons$AppKt.lambda-1.<anonymous> (App.kt:10)');
      }
      restoreData$composable($composer_0, 0);
      router$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$AppKt() {
    ComposableSingletons$AppKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(1561033869, false, ComposableSingletons$AppKt$lambda_1$lambda_ua4ft5));
  }
  ComposableSingletons$AppKt.prototype.get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$AppKt_instance;
  function ComposableSingletons$AppKt_getInstance() {
    if (ComposableSingletons$AppKt_instance == null)
      new ComposableSingletons$AppKt();
    return ComposableSingletons$AppKt_instance;
  }
  function restoreData() {
    illegalDecoyCallException('restoreData');
  }
  function setCookie(name, value) {
    document.cookie = name + '=' + value + '; path=/;';
  }
  function getCookie(name) {
    var cookies = document.cookie;
    var tmp$ret$0;
    // Inline function 'kotlin.text.toRegex' call
    var tmp0_toRegex = '(?<=' + name + '=).+?(?=;|$|\\s)';
    tmp$ret$0 = Regex_init_$Create$(tmp0_toRegex);
    var regex = tmp$ret$0;
    var tmp0_safe_receiver = regex.find$default_hge8nw_k$(cookies, 0, 2, null);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_value_j01efc_k$();
  }
  function restoreData$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1246213768);
    sourceInformation($composer_0, 'C(restoreData$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1246213768, $changed, -1, 'restoreData$composable (CookiesManager.kt:4)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var $composer_1 = tmp0_remember$composable;
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
        // Inline function 'restoreData$composable.<anonymous>' call
        tmp$ret$0 = StateManager_getInstance().get_language_cjhhk1_k$();
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
      var locale$delegate = tmp$ret$4;
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp1_remember$composable = $composer_0;
      var $composer_2 = tmp1_remember$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp0_let_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$5;
        // Inline function 'restoreData$composable.<anonymous>' call
        tmp$ret$5 = StateManager_getInstance().get_token_iz6pxs_k$();
        var value_0 = tmp$ret$5;
        tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      var tmp_2 = tmp$ret$7;
      tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.endReplaceableGroup_er37p7_k$();
      tmp$ret$9 = tmp0_0;
      var token$delegate = tmp$ret$9;
      var lang = getCookie('lang');
      if (!(lang == null)) {
        try {
          var savedLocale = valueOf(lang);
          restoreData$composable$lambda_0(locale$delegate, savedLocale);
        } catch ($p) {
          if ($p instanceof IllegalArgumentException) {
            // Inline function 'kotlin.error' call
            throw IllegalStateException_init_$Create$("'lang' cookie value is not valid");
          } else {
            throw $p;
          }
        }
      }
      var savedToken = getCookie('token');
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(restoreData$composable$lambda_3($changed));
    }
  }
  function restoreData$composable$lambda($locale$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('locale', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $locale$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function restoreData$composable$lambda_0($locale$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('locale', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $locale$delegate.set_value_rnwamw_k$(value);
  }
  function restoreData$composable$lambda_1($token$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('token', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $token$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function restoreData$composable$lambda_2($token$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('token', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $token$delegate.set_value_rnwamw_k$(value);
  }
  function restoreData$composable$lambda_3($$changed) {
    return function ($composer, $force) {
      restoreData$composable($composer, $$changed | 1);
      return Unit_getInstance();
    };
  }
  var Languages_RUSSIAN_instance;
  var Languages_ENGLISH_instance;
  var Languages_NORWAY_instance;
  var Languages_ALBANIAN_instance;
  var Languages_SPANISH_instance;
  function values() {
    return [Languages_RUSSIAN_getInstance(), Languages_ENGLISH_getInstance(), Languages_NORWAY_getInstance(), Languages_ALBANIAN_getInstance(), Languages_SPANISH_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'RUSSIAN':
        return Languages_RUSSIAN_getInstance();
      case 'ENGLISH':
        return Languages_ENGLISH_getInstance();
      case 'NORWAY':
        return Languages_NORWAY_getInstance();
      case 'ALBANIAN':
        return Languages_ALBANIAN_getInstance();
      case 'SPANISH':
        return Languages_SPANISH_getInstance();
      default:
        Languages_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Languages_entriesInitialized;
  function Languages_initEntries() {
    if (Languages_entriesInitialized)
      return Unit_getInstance();
    Languages_entriesInitialized = true;
    Languages_RUSSIAN_instance = new Languages('RUSSIAN', 0, 'RU', '\u0420\u0443\u0441\u0441\u043A\u0438\u0439');
    Languages_ENGLISH_instance = new Languages('ENGLISH', 1, 'EN', 'English');
    Languages_NORWAY_instance = new Languages('NORWAY', 2, 'NW', 'Norsk');
    Languages_ALBANIAN_instance = new Languages('ALBANIAN', 3, 'AL', 'Shqiptare');
    Languages_SPANISH_instance = new Languages('SPANISH', 4, 'SP', 'Espa\xF1ol');
  }
  function Languages(name, ordinal, code, nativeName) {
    Enum.call(this, name, ordinal);
    this.code_1 = code;
    this.nativeName_1 = nativeName;
  }
  Languages.prototype.get_code_wok7xy_k$ = function () {
    return this.code_1;
  };
  Languages.prototype.get_nativeName_v5six7_k$ = function () {
    return this.nativeName_1;
  };
  function Languages_RUSSIAN_getInstance() {
    Languages_initEntries();
    return Languages_RUSSIAN_instance;
  }
  function Languages_ENGLISH_getInstance() {
    Languages_initEntries();
    return Languages_ENGLISH_instance;
  }
  function Languages_NORWAY_getInstance() {
    Languages_initEntries();
    return Languages_NORWAY_instance;
  }
  function Languages_ALBANIAN_getInstance() {
    Languages_initEntries();
    return Languages_ALBANIAN_instance;
  }
  function Languages_SPANISH_getInstance() {
    Languages_initEntries();
    return Languages_SPANISH_instance;
  }
  function get_$stableprop() {
    return 0;
  }
  function StateManager() {
    StateManager_instance = this;
    var tmp = this;
    var tmp_0 = Languages_RUSSIAN_getInstance();
    tmp.language_1 = mutableStateOf$default(tmp_0, null, 2, null);
    var tmp_1 = this;
    tmp_1.user_1 = mutableStateOf$default(null, null, 2, null);
    var tmp_2 = this;
    tmp_2.token_1 = mutableStateOf$default(null, null, 2, null);
    this.$stable_1 = 0;
  }
  StateManager.prototype.get_language_cjhhk1_k$ = function () {
    return this.language_1;
  };
  StateManager.prototype.get_user_wovspg_k$ = function () {
    return this.user_1;
  };
  StateManager.prototype.get_token_iz6pxs_k$ = function () {
    return this.token_1;
  };
  var StateManager_instance;
  function StateManager_getInstance() {
    if (StateManager_instance == null)
      new StateManager();
    return StateManager_instance;
  }
  function table() {
  }
  function header() {
    illegalDecoyCallException('header');
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$HeaderKt$lambda_1$lambda_fev17j($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(538721521, $changed, -1, 'components.header.ComposableSingletons$HeaderKt.lambda-1.<anonymous> (Header.kt:14)');
      }
      headerButton$composable('Main', '/', $composer_0, 54);
      headerButton$composable('Table', '/table', $composer_0, 54);
      headerButton$composable('Overview', '/overview', $composer_0, 54);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$HeaderKt() {
    ComposableSingletons$HeaderKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(538721521, false, ComposableSingletons$HeaderKt$lambda_1$lambda_fev17j));
  }
  ComposableSingletons$HeaderKt.prototype.get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$HeaderKt_instance;
  function ComposableSingletons$HeaderKt_getInstance() {
    if (ComposableSingletons$HeaderKt_instance == null)
      new ComposableSingletons$HeaderKt();
    return ComposableSingletons$HeaderKt_instance;
  }
  function header$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(793547478);
    sourceInformation($composer_0, 'C(header$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(793547478, $changed, -1, 'components.header.header$composable (Header.kt:11)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var $composer_1 = tmp0_remember$composable;
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
        // Inline function 'components.header.header$composable.<anonymous>' call
        tmp$ret$0 = StateManager_getInstance().get_user_wovspg_k$();
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
      var user$delegate = tmp$ret$4;
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp1_remember$composable = $composer_0;
      var $composer_2 = tmp1_remember$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp0_let_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$5;
        // Inline function 'components.header.header$composable.<anonymous>' call
        tmp$ret$5 = header$composable$lambda_0;
        var value_0 = tmp$ret$5;
        tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      var tmp_2 = tmp$ret$7;
      tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.endReplaceableGroup_er37p7_k$();
      tmp$ret$9 = tmp0_0;
      var tmp_3 = tmp$ret$9;
      var tmp$ret$16;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$15;
      // Inline function 'components.header.header$composable.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, 1700067186, true, header$composable$lambda_1(user$delegate));
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_3 = tmp0_remember$composable_0;
      $composer_3.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_3, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_3;
      var tmp2_cache = $composer_3.changed_ga7h3f_k$(dispatchReceiver);
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = tmp1_cache_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (tmp2_cache ? true : tmp0_let_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$10;
        // Inline function 'components.header.header$composable.<anonymous>.<anonymous>' call
        tmp$ret$10 = ComposableLambda$invoke$ref_3(dispatchReceiver);
        var value_1 = tmp$ret$10;
        tmp1_cache_1.updateRememberedValue_l1colo_k$(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = tmp0_let_1;
      }
      tmp$ret$11 = tmp_5;
      tmp$ret$12 = tmp$ret$11;
      var tmp_6 = tmp$ret$12;
      tmp$ret$13 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      var tmp0_1 = tmp$ret$13;
      $composer_3.endReplaceableGroup_er37p7_k$();
      tmp$ret$14 = tmp0_1;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      Div$composable(tmp_3, tmp$ret$16, $composer_0, 48, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(header$composable$lambda_2($changed));
    }
  }
  function header$composable$lambda($user$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('user', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $user$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function header$composable$lambda_0($this$Div) {
    $this$Div.classes_mog12g_k$(['header']);
    return Unit_getInstance();
  }
  function header$composable$lambda$lambda($this$Div) {
    $this$Div.classes_mog12g_k$(['row-container']);
    return Unit_getInstance();
  }
  function header$composable$lambda$lambda_0($this$Div) {
    $this$Div.classes_mog12g_k$(['row-container']);
    return Unit_getInstance();
  }
  function header$composable$lambda$lambda$lambda($this$Div) {
    $this$Div.classes_mog12g_k$(['user-indicator', 'centered-container']);
    return Unit_getInstance();
  }
  function header$composable$lambda$lambda$lambda_0($user$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(490680743, $changed, -1, 'components.header.header$composable.<anonymous>.<anonymous>.<anonymous> (Header.kt:21)');
        }
        Text$composable(header$composable$lambda($user$delegate) == null ? 'N/A' : toString(header$composable$lambda($user$delegate)), $composer_0, 0);
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
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function header$composable$lambda$lambda_1($user$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-2046665304, $changed, -1, 'components.header.header$composable.<anonymous>.<anonymous> (Header.kt:19)');
        }
        localeButton$composable($composer_0, 0);
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
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
        var tmp_0;
        if (false ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'components.header.header$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = header$composable$lambda$lambda$lambda;
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
        var tmp_2 = tmp$ret$4;
        var tmp$ret$11;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'components.header.header$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, 490680743, true, header$composable$lambda$lambda$lambda_0($user$delegate));
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_2 = tmp0_remember$composable_0;
        $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp2_cache = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var tmp$ret$5;
          // Inline function 'components.header.header$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = ComposableLambda$invoke$ref_1(dispatchReceiver);
          var value_0 = tmp$ret$5;
          tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_4;
        tmp$ret$7 = tmp$ret$6;
        var tmp_5 = tmp$ret$7;
        tmp$ret$8 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.endReplaceableGroup_er37p7_k$();
        tmp$ret$9 = tmp0_0;
        tmp$ret$10 = tmp$ret$9;
        tmp$ret$11 = tmp$ret$10;
        Div$composable(tmp_2, tmp$ret$11, $composer_0, 48, 0);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function header$composable$lambda_1($user$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1700067186, $changed, -1, 'components.header.header$composable.<anonymous> (Header.kt:13)');
        }
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
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
        var tmp_0;
        if (false ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'components.header.header$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = header$composable$lambda$lambda;
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
        Div$composable(tmp$ret$4, ComposableSingletons$HeaderKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_2 = tmp1_remember$composable;
        $composer_2.startReplaceableGroup_rp6air_k$(547886695);
        sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (false ? true : tmp0_let_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var tmp$ret$5;
          // Inline function 'components.header.header$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = header$composable$lambda$lambda_0;
          var value_0 = tmp$ret$5;
          tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_2;
        tmp$ret$7 = tmp$ret$6;
        var tmp_3 = tmp$ret$7;
        tmp$ret$8 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.endReplaceableGroup_er37p7_k$();
        tmp$ret$9 = tmp0_0;
        var tmp_4 = tmp$ret$9;
        var tmp$ret$16;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$15;
        // Inline function 'components.header.header$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_5 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_5, -2046665304, true, header$composable$lambda$lambda_1($user$delegate));
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_3 = tmp0_remember$composable_0;
        $composer_3.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_3, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_1 = $composer_3;
        var tmp2_cache = $composer_3.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$12;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp1_cache_1.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_6;
        if (tmp2_cache ? true : tmp0_let_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var tmp$ret$10;
          // Inline function 'components.header.header$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$10 = ComposableLambda$invoke$ref_2(dispatchReceiver);
          var value_1 = tmp$ret$10;
          tmp1_cache_1.updateRememberedValue_l1colo_k$(value_1);
          tmp_6 = value_1;
        } else {
          tmp_6 = tmp0_let_1;
        }
        tmp$ret$11 = tmp_6;
        tmp$ret$12 = tmp$ret$11;
        var tmp_7 = tmp$ret$12;
        tmp$ret$13 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
        var tmp0_1 = tmp$ret$13;
        $composer_3.endReplaceableGroup_er37p7_k$();
        tmp$ret$14 = tmp0_1;
        tmp$ret$15 = tmp$ret$14;
        tmp$ret$16 = tmp$ret$15;
        Div$composable(tmp_4, tmp$ret$16, $composer_0, 48, 0);
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_getInstance();
        }
        tmp = tmp_8;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function header$composable$lambda_2($$changed) {
    return function ($composer, $force) {
      header$composable($composer, $$changed | 1);
      return Unit_getInstance();
    };
  }
  function headerButton(text, link) {
    illegalDecoyCallException('headerButton');
  }
  function headerButton$composable(text, link, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1511497156);
    sourceInformation($composer_0, 'C(headerButton$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(link) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1511497156, $dirty, -1, 'components.header.headerButton$composable (HeaderButton.kt:9)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var $composer_1 = tmp0_remember$composable;
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
        // Inline function 'components.header.headerButton$composable.<anonymous>' call
        tmp$ret$0 = headerButton$composable$lambda;
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
      var tmp_1 = tmp$ret$4;
      var tmp$ret$11;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$10;
      // Inline function 'components.header.headerButton$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 751479675, true, headerButton$composable$lambda_0(text, $dirty));
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_2 = tmp0_remember$composable_0;
      $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$5;
        // Inline function 'components.header.headerButton$composable.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableLambda$invoke$ref_5(dispatchReceiver);
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
      NavLink$composable(link, tmp_1, tmp$ret$11, $composer_0, 384 | 14 & $dirty >> 3, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(headerButton$composable$lambda_1(text, link, $changed));
    }
  }
  function headerButton$composable$lambda($this$NavLink, it) {
    $this$NavLink.classes_mog12g_k$(['header-button-container', 'centered-container']);
    return Unit_getInstance();
  }
  function headerButton$composable$lambda$lambda($this$Div) {
    $this$Div.classes_mog12g_k$(['header-button', 'centered-container']);
    return Unit_getInstance();
  }
  function headerButton$composable$lambda$lambda_0($text, $$dirty) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-78730660, $changed, -1, 'components.header.headerButton$composable.<anonymous>.<anonymous> (HeaderButton.kt:11)');
        }
        Text$composable($text, $composer_0, 14 & $$dirty);
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
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function headerButton$composable$lambda_0($text, $$dirty) {
    return function ($this$NavLink, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(751479675, $changed, -1, 'components.header.headerButton$composable.<anonymous> (HeaderButton.kt:10)');
        }
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
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
        var tmp_0;
        if (false ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'components.header.headerButton$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = headerButton$composable$lambda$lambda;
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
        var tmp_2 = tmp$ret$4;
        var tmp$ret$11;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'components.header.headerButton$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, -78730660, true, headerButton$composable$lambda$lambda_0($text, $$dirty));
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_2 = tmp0_remember$composable_0;
        $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp2_cache = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var tmp$ret$5;
          // Inline function 'components.header.headerButton$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = ComposableLambda$invoke$ref_4(dispatchReceiver);
          var value_0 = tmp$ret$5;
          tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_4;
        tmp$ret$7 = tmp$ret$6;
        var tmp_5 = tmp$ret$7;
        tmp$ret$8 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.endReplaceableGroup_er37p7_k$();
        tmp$ret$9 = tmp0_0;
        tmp$ret$10 = tmp$ret$9;
        tmp$ret$11 = tmp$ret$10;
        Div$composable(tmp_2, tmp$ret$11, $composer_0, 48, 0);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function headerButton$composable$lambda_1($text, $link, $$changed) {
    return function ($composer, $force) {
      headerButton$composable($text, $link, $composer, $$changed | 1);
      return Unit_getInstance();
    };
  }
  function localeButton() {
    illegalDecoyCallException('localeButton');
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$LocaleButtonKt$lambda_1$lambda_7zo8cg($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(779326963, $changed, -1, 'components.header.ComposableSingletons$LocaleButtonKt.lambda-1.<anonymous> (LocaleButton.kt:16)');
      }
      var tmp$ret$1;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = values();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(tmp0_map.length);
      var indexedObject = tmp0_map;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        localeOption$composable(item, $composer_0, 0);
        tmp0_mapTo.add_1j60pz_k$(Unit_getInstance());
      }
      tmp$ret$0 = tmp0_mapTo;
      tmp$ret$1 = tmp$ret$0;
      var tmp0_group = tmp$ret$1;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$LocaleButtonKt() {
    ComposableSingletons$LocaleButtonKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(779326963, false, ComposableSingletons$LocaleButtonKt$lambda_1$lambda_7zo8cg));
  }
  ComposableSingletons$LocaleButtonKt.prototype.get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$LocaleButtonKt_instance;
  function ComposableSingletons$LocaleButtonKt_getInstance() {
    if (ComposableSingletons$LocaleButtonKt_instance == null)
      new ComposableSingletons$LocaleButtonKt();
    return ComposableSingletons$LocaleButtonKt_instance;
  }
  function localeButton$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-2060685835);
    sourceInformation($composer_0, 'C(localeButton$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2060685835, $changed, -1, 'components.header.localeButton$composable (LocaleButton.kt:12)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var $composer_1 = tmp0_remember$composable;
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
        // Inline function 'components.header.localeButton$composable.<anonymous>' call
        tmp$ret$0 = StateManager_getInstance().get_language_cjhhk1_k$();
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
      var locale$delegate = tmp$ret$4;
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp1_remember$composable = $composer_0;
      var $composer_2 = tmp1_remember$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp0_let_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$5;
        // Inline function 'components.header.localeButton$composable.<anonymous>' call
        tmp$ret$5 = localeButton$composable$lambda_0;
        var value_0 = tmp$ret$5;
        tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      var tmp_2 = tmp$ret$7;
      tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.endReplaceableGroup_er37p7_k$();
      tmp$ret$9 = tmp0_0;
      var tmp_3 = tmp$ret$9;
      var tmp$ret$16;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$15;
      // Inline function 'components.header.localeButton$composable.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, -1033136396, true, localeButton$composable$lambda_1(locale$delegate));
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_3 = tmp0_remember$composable_0;
      $composer_3.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_3, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_3;
      var tmp2_cache = $composer_3.changed_ga7h3f_k$(dispatchReceiver);
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = tmp1_cache_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (tmp2_cache ? true : tmp0_let_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$10;
        // Inline function 'components.header.localeButton$composable.<anonymous>.<anonymous>' call
        tmp$ret$10 = ComposableLambda$invoke$ref_7(dispatchReceiver);
        var value_1 = tmp$ret$10;
        tmp1_cache_1.updateRememberedValue_l1colo_k$(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = tmp0_let_1;
      }
      tmp$ret$11 = tmp_5;
      tmp$ret$12 = tmp$ret$11;
      var tmp_6 = tmp$ret$12;
      tmp$ret$13 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      var tmp0_1 = tmp$ret$13;
      $composer_3.endReplaceableGroup_er37p7_k$();
      tmp$ret$14 = tmp0_1;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      Div$composable(tmp_3, tmp$ret$16, $composer_0, 48, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(localeButton$composable$lambda_2($changed));
    }
  }
  function localeButton$composable$lambda($locale$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('locale', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $locale$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function localeButton$composable$lambda_0($this$Div) {
    $this$Div.classes_mog12g_k$(['header-button', 'centered-container', 'header-locale-button']);
    return Unit_getInstance();
  }
  function localeButton$composable$lambda$lambda($this$Div) {
    $this$Div.classes_mog12g_k$(['locale-menu']);
    return Unit_getInstance();
  }
  function localeButton$composable$lambda_1($locale$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1033136396, $changed, -1, 'components.header.localeButton$composable.<anonymous> (LocaleButton.kt:14)');
        }
        Text$composable(localeButton$composable$lambda($locale$delegate).get_nativeName_v5six7_k$(), $composer_0, 0);
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
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
        var tmp_0;
        if (false ? true : tmp0_let === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var tmp$ret$0;
          // Inline function 'components.header.localeButton$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = localeButton$composable$lambda$lambda;
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
        Div$composable(tmp$ret$4, ComposableSingletons$LocaleButtonKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
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
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function localeButton$composable$lambda_2($$changed) {
    return function ($composer, $force) {
      localeButton$composable($composer, $$changed | 1);
      return Unit_getInstance();
    };
  }
  function localeOption(target) {
    illegalDecoyCallException('localeOption');
  }
  function localeOption$composable(target, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1003702950);
    sourceInformation($composer_0, 'C(localeOption$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(target) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1003702950, $dirty, -1, 'components.header.localeOption$composable (LocaleOption.kt:10)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var $composer_1 = tmp0_remember$composable;
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
        // Inline function 'components.header.localeOption$composable.<anonymous>' call
        tmp$ret$0 = StateManager_getInstance().get_language_cjhhk1_k$();
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
      var locale$delegate = tmp$ret$4;
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp1_remember$composable = $composer_0;
      var tmp2_remember$composable = 112 & $dirty << 3;
      var $composer_2 = tmp1_remember$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(-1124426577);
      sourceInformation($composer_2, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = !!($composer_2.changed_ga7h3f_k$(locale$delegate) | $composer_2.changed_ga7h3f_k$(target));
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$5;
        // Inline function 'components.header.localeOption$composable.<anonymous>' call
        tmp$ret$5 = localeOption$composable$lambda_1(target, locale$delegate);
        var value_0 = tmp$ret$5;
        tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      var tmp_2 = tmp$ret$7;
      tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.endReplaceableGroup_er37p7_k$();
      tmp$ret$9 = tmp0_0;
      var tmp_3 = tmp$ret$9;
      var tmp$ret$16;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$15;
      // Inline function 'components.header.localeOption$composable.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, 2010966549, true, localeOption$composable$lambda_2(target));
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_3 = tmp0_remember$composable_0;
      $composer_3.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_3, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_3;
      var tmp2_cache_0 = $composer_3.changed_ga7h3f_k$(dispatchReceiver);
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = tmp1_cache_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_5;
      if (tmp2_cache_0 ? true : tmp0_let_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$10;
        // Inline function 'components.header.localeOption$composable.<anonymous>.<anonymous>' call
        tmp$ret$10 = ComposableLambda$invoke$ref_8(dispatchReceiver);
        var value_1 = tmp$ret$10;
        tmp1_cache_1.updateRememberedValue_l1colo_k$(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = tmp0_let_1;
      }
      tmp$ret$11 = tmp_5;
      tmp$ret$12 = tmp$ret$11;
      var tmp_6 = tmp$ret$12;
      tmp$ret$13 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      var tmp0_1 = tmp$ret$13;
      $composer_3.endReplaceableGroup_er37p7_k$();
      tmp$ret$14 = tmp0_1;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      Div$composable(tmp_3, tmp$ret$16, $composer_0, 48, 0);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(localeOption$composable$lambda_3(target, $changed));
    }
  }
  function localeOption$composable$lambda($locale$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('locale', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $locale$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function localeOption$composable$lambda_0($locale$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('locale', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $locale$delegate.set_value_rnwamw_k$(value);
  }
  function localeOption$composable$lambda$lambda($target, $locale$delegate) {
    return function (it) {
      localeOption$composable$lambda_0($locale$delegate, $target);
      setCookie('lang', $target.get_name_woqyms_k$());
      return Unit_getInstance();
    };
  }
  function localeOption$composable$lambda_1($target, $locale$delegate) {
    return function ($this$Div) {
      $this$Div.classes_mog12g_k$(['locale-option', 'centered-container']);
      $this$Div.onClick_3adsri_k$(localeOption$composable$lambda$lambda($target, $locale$delegate));
      return Unit_getInstance();
    };
  }
  function localeOption$composable$lambda_2($target) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(2010966549, $changed, -1, 'components.header.localeOption$composable.<anonymous> (LocaleOption.kt:19)');
        }
        Text$composable($target.get_nativeName_v5six7_k$(), $composer_0, 0);
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
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function localeOption$composable$lambda_3($target, $$changed) {
    return function ($composer, $force) {
      localeOption$composable($target, $composer, $$changed | 1);
      return Unit_getInstance();
    };
  }
  function mainPage() {
    illegalDecoyCallException('mainPage');
  }
  function mainPage$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1110028686);
    sourceInformation($composer_0, 'C(mainPage$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1110028686, $changed, -1, 'pages.mainPage$composable (Main.kt:10)');
      }
      var usernameState = mutableStateOf$default('', null, 2, null);
      var passwordState = mutableStateOf$default('', null, 2, null);
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var $composer_1 = tmp0_remember$composable;
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
        // Inline function 'pages.mainPage$composable.<anonymous>' call
        tmp$ret$0 = usernameState;
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
      var username$delegate = tmp$ret$4;
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp1_remember$composable = $composer_0;
      var $composer_2 = tmp1_remember$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp0_let_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp$ret$5;
        // Inline function 'pages.mainPage$composable.<anonymous>' call
        tmp$ret$5 = passwordState;
        var value_0 = tmp$ret$5;
        tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      var tmp_2 = tmp$ret$7;
      tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.endReplaceableGroup_er37p7_k$();
      tmp$ret$9 = tmp0_0;
      var password$delegate = tmp$ret$9;
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(mainPage$composable$lambda_3($changed));
    }
  }
  function mainPage$composable$lambda($username$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('username', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $username$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function mainPage$composable$lambda_0($username$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('username', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $username$delegate.set_value_rnwamw_k$(value);
  }
  function mainPage$composable$lambda_1($password$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('password', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $password$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function mainPage$composable$lambda_2($password$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('password', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $password$delegate.set_value_rnwamw_k$(value);
  }
  function mainPage$composable$lambda_3($$changed) {
    return function ($composer, $force) {
      mainPage$composable($composer, $$changed | 1);
      return Unit_getInstance();
    };
  }
  function router() {
    illegalDecoyCallException('router');
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7($this$route, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1639766707, $changed, -1, 'router.ComposableSingletons$RouterKt.lambda-1.<anonymous> (Router.kt:14)');
      }
      mainPage$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouterKt$lambda_2$lambda_g6ph30($this$route, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(7080246, $changed, -1, 'router.ComposableSingletons$RouterKt.lambda-2.<anonymous> (Router.kt:17)');
      }
      Text$composable('Table', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouterKt$lambda_3$lambda_q0s3tx($this$route, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(701727253, $changed, -1, 'router.ComposableSingletons$RouterKt.lambda-3.<anonymous> (Router.kt:20)');
      }
      Text$composable('Overview', $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_5qf8pc_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$RouterKt$lambda_4$lambda_2sud8a($this$BrowserRouter, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$BrowserRouter) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1312868246, $dirty, -1, 'router.ComposableSingletons$RouterKt.lambda-4.<anonymous> (Router.kt:12)');
      }
      header$composable($composer_0, 0);
      $this$BrowserRouter.route$composable_r4f5k7_k$([Routes_getInstance().get_MAIN_wo57gi_k$()], ComposableSingletons$RouterKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48 | 896 & $dirty << 6);
      $this$BrowserRouter.route$composable_r4f5k7_k$([Routes_getInstance().get_TABLE_igr2it_k$()], ComposableSingletons$RouterKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 48 | 896 & $dirty << 6);
      $this$BrowserRouter.route$composable_r4f5k7_k$([Routes_getInstance().get_OVERVIEW_a3d3um_k$()], ComposableSingletons$RouterKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 48 | 896 & $dirty << 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$RouterKt() {
    ComposableSingletons$RouterKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(-1639766707, false, ComposableSingletons$RouterKt$lambda_1$lambda_cmwzz7));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(7080246, false, ComposableSingletons$RouterKt$lambda_2$lambda_g6ph30));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(701727253, false, ComposableSingletons$RouterKt$lambda_3$lambda_q0s3tx));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-1312868246, false, ComposableSingletons$RouterKt$lambda_4$lambda_2sud8a));
  }
  ComposableSingletons$RouterKt.prototype.get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  ComposableSingletons$RouterKt.prototype.get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  ComposableSingletons$RouterKt.prototype.get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  ComposableSingletons$RouterKt.prototype.get_lambda_4_bzdzzr_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  var ComposableSingletons$RouterKt_instance;
  function ComposableSingletons$RouterKt_getInstance() {
    if (ComposableSingletons$RouterKt_instance == null)
      new ComposableSingletons$RouterKt();
    return ComposableSingletons$RouterKt_instance;
  }
  function router$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1382113838);
    sourceInformation($composer_0, 'C(router$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1382113838, $changed, -1, 'router.router$composable (Router.kt:11)');
      }
      BrowserRouter$composable(Routes_getInstance().get_DEFAULT_wccqmg_k$(), ComposableSingletons$RouterKt_getInstance().lambda_4_r8sbbm_1, $composer_0, 48);
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
      tmp0_safe_receiver.updateScope_xhrf9y_k$(router$composable$lambda($changed));
    }
  }
  function router$composable$lambda($$changed) {
    return function ($composer, $force) {
      router$composable($composer, $$changed | 1);
      return Unit_getInstance();
    };
  }
  function get_$stableprop_0() {
    return 0;
  }
  function Routes() {
    Routes_instance = this;
    this.DEFAULT_1 = '/';
    this.MAIN_1 = '/';
    this.TABLE_1 = '/table';
    this.OVERVIEW_1 = '/overview';
    this.$stable_1 = 0;
  }
  Routes.prototype.get_DEFAULT_wccqmg_k$ = function () {
    return this.DEFAULT_1;
  };
  Routes.prototype.get_MAIN_wo57gi_k$ = function () {
    return this.MAIN_1;
  };
  Routes.prototype.get_TABLE_igr2it_k$ = function () {
    return this.TABLE_1;
  };
  Routes.prototype.get_OVERVIEW_a3d3um_k$ = function () {
    return this.OVERVIEW_1;
  };
  var Routes_instance;
  function Routes_getInstance() {
    if (Routes_instance == null)
      new Routes();
    return Routes_instance;
  }
  main();
  return _;
}));
