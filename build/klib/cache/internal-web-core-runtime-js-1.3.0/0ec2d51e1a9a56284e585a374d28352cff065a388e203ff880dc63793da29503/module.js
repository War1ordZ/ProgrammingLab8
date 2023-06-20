(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-runtime.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-runtime.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'web-internal-web-core-runtime'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'web-internal-web-core-runtime'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'web-internal-web-core-runtime'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'web-internal-web-core-runtime'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'web-internal-web-core-runtime'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'web-internal-web-core-runtime'.");
    }
    root['web-internal-web-core-runtime'] = factory(typeof this['web-internal-web-core-runtime'] === 'undefined' ? {} : this['web-internal-web-core-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-runtime'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var interfaceMeta = kotlin_kotlin.$_$.r7;
  var setMetadataFor = kotlin_kotlin.$_$.i8;
  var THROW_CCE = kotlin_kotlin.$_$.v9;
  var Annotation = kotlin_kotlin.$_$.i9;
  var classMeta = kotlin_kotlin.$_$.i7;
  var Unit_getInstance = kotlin_kotlin.$_$.c3;
  var ensureNotNull = kotlin_kotlin.$_$.da;
  var AbstractApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var clear = kotlin_kotlin.$_$.na;
  var onBeginChanges = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var onEndChanges = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var CoroutineImpl = kotlin_kotlin.$_$.x6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var isInterface = kotlin_kotlin.$_$.a8;
  var SupervisorJob$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var objectMeta = kotlin_kotlin.$_$.h8;
  var CoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var plus = kotlin_kotlin.$_$.w6;
  var get = kotlin_kotlin.$_$.n6;
  var fold = kotlin_kotlin.$_$.r6;
  var minusKey = kotlin_kotlin.$_$.o6;
  var Recomposer = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var ControlledComposition = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var get_DefaultMonotonicFrameClock = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h6;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DOMScope, 'DOMScope', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ComposeWebInternalApi, 'ComposeWebInternalApi', classMeta, undefined, [Annotation], undefined, undefined, []);
  setMetadataFor(DomNodeWrapper, 'DomNodeWrapper', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DomApplier, 'DomApplier', classMeta, AbstractApplier, undefined, undefined, undefined, []);
  setMetadataFor(NamedEventListener, 'NamedEventListener', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(GlobalSnapshotManager$schedule$slambda, 'GlobalSnapshotManager$schedule$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(GlobalSnapshotManager, 'GlobalSnapshotManager', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsMicrotasksDispatcher, 'JsMicrotasksDispatcher', classMeta, CoroutineDispatcher, undefined, undefined, undefined, []);
  setMetadataFor(renderComposable$composable$slambda, 'renderComposable$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [1]);
  setMetadataFor(renderComposable$composable$scope$1, undefined, classMeta, undefined, [DOMScope], undefined, undefined, []);
  //endregion
  function DOMScope() {
  }
  function ComposeWebInternalApi() {
  }
  ComposeWebInternalApi.prototype.equals = function (other) {
    if (!(other instanceof ComposeWebInternalApi))
      return false;
    var tmp0_other_with_cast = other instanceof ComposeWebInternalApi ? other : THROW_CCE();
    return true;
  };
  ComposeWebInternalApi.prototype.hashCode = function () {
    return 0;
  };
  ComposeWebInternalApi.prototype.toString = function () {
    return '@org.jetbrains.compose.web.internal.runtime.ComposeWebInternalApi()';
  };
  function get_$stableprop() {
    return 0;
  }
  function DomNodeWrapper(node) {
    this.node_1 = node;
    this.$stable_1 = 0;
  }
  DomNodeWrapper.prototype.get_node_wor8sr_k$ = function () {
    return this.node_1;
  };
  DomNodeWrapper.prototype.insert_ftugtm_k$ = function (index, nodeWrapper) {
    var length = this.get_node_wor8sr_k$().childNodes.length;
    if (index < length) {
      var tmp = this.get_node_wor8sr_k$();
      var tmp_0 = nodeWrapper.get_node_wor8sr_k$();
      var tmp$ret$1;
      // Inline function 'org.w3c.dom.get' call
      var tmp0_get = this.get_node_wor8sr_k$().childNodes;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_get;
      tmp$ret$1 = tmp$ret$0[index];
      tmp.insertBefore(tmp_0, ensureNotNull(tmp$ret$1));
    } else {
      this.get_node_wor8sr_k$().appendChild(nodeWrapper.get_node_wor8sr_k$());
    }
  };
  DomNodeWrapper.prototype.remove_fwj0yb_k$ = function (index, count) {
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.internal.runtime.DomNodeWrapper.remove.<anonymous>' call
        var tmp = this.get_node_wor8sr_k$();
        var tmp$ret$1;
        // Inline function 'org.w3c.dom.get' call
        var tmp0_get = this.get_node_wor8sr_k$().childNodes;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_get;
        tmp$ret$1 = tmp$ret$0[index];
        tmp.removeChild(ensureNotNull(tmp$ret$1));
      }
       while (inductionVariable < count);
  };
  DomNodeWrapper.prototype.move_xov2xr_k$ = function (from, to, count) {
    if (from === to) {
      return Unit_getInstance();
    }
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var fromIndex = from > to ? from + i | 0 : from;
        var toIndex = from > to ? to + i | 0 : (to + count | 0) - 2 | 0;
        var tmp = this.get_node_wor8sr_k$();
        var tmp$ret$1;
        // Inline function 'org.w3c.dom.get' call
        var tmp0_get = this.get_node_wor8sr_k$().childNodes;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_get;
        tmp$ret$1 = tmp$ret$0[fromIndex];
        var child = tmp.removeChild(ensureNotNull(tmp$ret$1));
        var tmp_0 = this.get_node_wor8sr_k$();
        var tmp$ret$3;
        // Inline function 'org.w3c.dom.get' call
        var tmp1_get = this.get_node_wor8sr_k$().childNodes;
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp1_get;
        tmp$ret$3 = tmp$ret$2[toIndex];
        tmp_0.insertBefore(child, ensureNotNull(tmp$ret$3));
      }
       while (inductionVariable < count);
  };
  function get_$stableprop_0() {
    return 0;
  }
  function DomApplier(root) {
    AbstractApplier.call(this, root);
    this.$stable_2 = 0;
  }
  DomApplier.prototype.insertTopDown_lynd67_k$ = function (index, instance) {
  };
  DomApplier.prototype.insertTopDown_rvftcx_k$ = function (index, instance) {
    return this.insertTopDown_lynd67_k$(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  DomApplier.prototype.insertBottomUp_wimtyo_k$ = function (index, instance) {
    this.get_current_jwi6j4_k$().insert_ftugtm_k$(index, instance);
  };
  DomApplier.prototype.insertBottomUp_ej3928_k$ = function (index, instance) {
    return this.insertBottomUp_wimtyo_k$(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  DomApplier.prototype.remove_fwj0yb_k$ = function (index, count) {
    this.get_current_jwi6j4_k$().remove_fwj0yb_k$(index, count);
  };
  DomApplier.prototype.move_xov2xr_k$ = function (from, to, count) {
    this.get_current_jwi6j4_k$().move_xov2xr_k$(from, to, count);
  };
  DomApplier.prototype.onClear_8zdhel_k$ = function () {
    clear(this.get_root_wott0r_k$().get_node_wor8sr_k$());
  };
  function NamedEventListener() {
  }
  function _set_started__bivodg($this, _set____db54di) {
    $this.started_1 = _set____db54di;
  }
  function _get_started__e3clzk($this) {
    return $this.started_1;
  }
  function _set_commitPending__h24hyd($this, _set____db54di) {
    $this.commitPending_1 = _set____db54di;
  }
  function _get_commitPending__1uczg1($this) {
    return $this.commitPending_1;
  }
  function _set_removeWriteObserver__20x1n0($this, _set____db54di) {
    $this.removeWriteObserver_1 = _set____db54di;
  }
  function _get_removeWriteObserver__b9t79c($this) {
    return $this.removeWriteObserver_1;
  }
  function _get_scheduleScope__akh4s4($this) {
    return $this.scheduleScope_1;
  }
  function _get_globalWriteObserver__fs5j33($this) {
    return $this.globalWriteObserver_1;
  }
  function _get_scheduledCallbacks__o3ivhy($this) {
    return $this.scheduledCallbacks_1;
  }
  function _set_isSynchronizeScheduled__kzsbyo($this, _set____db54di) {
    $this.isSynchronizeScheduled_1 = _set____db54di;
  }
  function _get_isSynchronizeScheduled__19b4h0($this) {
    return $this.isSynchronizeScheduled_1;
  }
  function synchronize($this) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = $this.scheduledCallbacks_1;
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.compose.web.internal.runtime.GlobalSnapshotManager.synchronize.<anonymous>' call
      element();
    }
    $this.scheduledCallbacks_1.clear_j9y8zo_k$();
    $this.isSynchronizeScheduled_1 = false;
  }
  function schedule($this, block) {
    $this.scheduledCallbacks_1.add_1j60pz_k$(block);
    if (!$this.isSynchronizeScheduled_1) {
      $this.isSynchronizeScheduled_1 = true;
      launch$default($this.scheduleScope_1, null, null, GlobalSnapshotManager$schedule$slambda_0(null), 3, null);
    }
  }
  function get_$stableprop_1() {
    return 8;
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda(it) {
    if (!GlobalSnapshotManager_getInstance().commitPending_1) {
      GlobalSnapshotManager_getInstance().commitPending_1 = true;
      var tmp = GlobalSnapshotManager_getInstance();
      schedule(tmp, GlobalSnapshotManager$globalWriteObserver$lambda$lambda);
    }
    return Unit_getInstance();
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda$lambda() {
    GlobalSnapshotManager_getInstance().commitPending_1 = false;
    Companion_getInstance().sendApplyNotifications_z2a8wf_k$();
    return Unit_getInstance();
  }
  function GlobalSnapshotManager$schedule$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  GlobalSnapshotManager$schedule$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  GlobalSnapshotManager$schedule$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  GlobalSnapshotManager$schedule$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          synchronize(GlobalSnapshotManager_getInstance());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  GlobalSnapshotManager$schedule$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new GlobalSnapshotManager$schedule$slambda(completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  GlobalSnapshotManager$schedule$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function GlobalSnapshotManager$schedule$slambda_0(resultContinuation) {
    var i = new GlobalSnapshotManager$schedule$slambda(resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function GlobalSnapshotManager() {
    GlobalSnapshotManager_instance = this;
    this.started_1 = false;
    this.commitPending_1 = false;
    this.removeWriteObserver_1 = null;
    var tmp = this;
    var tmp_0 = new JsMicrotasksDispatcher();
    tmp.scheduleScope_1 = CoroutineScope_0(tmp_0.plus_rgw9wi_k$(SupervisorJob$default(null, 1, null)));
    var tmp_1 = this;
    tmp_1.globalWriteObserver_1 = GlobalSnapshotManager$globalWriteObserver$lambda;
    var tmp_2 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp_2.scheduledCallbacks_1 = tmp$ret$0;
    this.isSynchronizeScheduled_1 = false;
    this.$stable_1 = 8;
  }
  GlobalSnapshotManager.prototype.ensureStarted_v2hr0y_k$ = function () {
    if (!this.started_1) {
      this.started_1 = true;
      this.removeWriteObserver_1 = Companion_getInstance().registerGlobalWriteObserver_tid1wa_k$(this.globalWriteObserver_1);
    }
  };
  var GlobalSnapshotManager_instance;
  function GlobalSnapshotManager_getInstance() {
    if (GlobalSnapshotManager_instance == null)
      new GlobalSnapshotManager();
    return GlobalSnapshotManager_instance;
  }
  function get_$stableprop_2() {
    return 0;
  }
  function JsMicrotasksDispatcher$dispatch$lambda($block) {
    return function (it) {
      $block.run_mw4iiu_k$();
      return Unit_getInstance();
    };
  }
  function JsMicrotasksDispatcher() {
    CoroutineDispatcher.call(this);
    this.$stable_1 = 0;
  }
  JsMicrotasksDispatcher.prototype.dispatch_o98ux7_k$ = function (context, block) {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(JsMicrotasksDispatcher$dispatch$lambda(block));
  };
  function renderComposable$composable(rootElementId, content) {
    var tmp = ensureNotNull(document.getElementById(rootElementId));
    return renderComposable$composable$default(tmp, null, content, 2, null);
  }
  function renderComposable$composable_0(root, monotonicFrameClock, content) {
    GlobalSnapshotManager_getInstance().ensureStarted_v2hr0y_k$();
    var context = monotonicFrameClock.plus_rgw9wi_k$(new JsMicrotasksDispatcher());
    var recomposer = new Recomposer(context);
    var tmp = CoroutineScope_0(context);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    launch$default(tmp, null, tmp_0, renderComposable$composable$slambda_0(recomposer, null), 1, null);
    var composition = ControlledComposition(new DomApplier(new DomNodeWrapper(root)), recomposer);
    var scope = new renderComposable$composable$scope$1(root);
    composition.setContent$composable_jlpbvd_k$(ComposableLambda$invoke$ref(composableLambdaInstance(-1520853124, true, renderComposable$composable$lambda(content, scope))));
    return composition;
  }
  function renderComposable$composable$default(root, monotonicFrameClock, content, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      monotonicFrameClock = get_DefaultMonotonicFrameClock();
    return renderComposable$composable_0(root, monotonicFrameClock, content);
  }
  function renderComposable$composable$slambda($recomposer, resultContinuation) {
    this.$recomposer_1 = $recomposer;
    CoroutineImpl.call(this, resultContinuation);
  }
  renderComposable$composable$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  renderComposable$composable$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  renderComposable$composable$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$recomposer_1.runRecomposeAndApplyChanges_yzc3et_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  renderComposable$composable$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new renderComposable$composable$slambda(this.$recomposer_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  renderComposable$composable$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function renderComposable$composable$slambda_0($recomposer, resultContinuation) {
    var i = new renderComposable$composable$slambda($recomposer, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function renderComposable$composable$scope$1($root) {
    this.$root_1 = $root;
  }
  renderComposable$composable$scope$1.prototype.get_scopeElement_mn83kc_k$ = function (_this__u8e3s4) {
    return this.$root_1;
  };
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function renderComposable$composable$lambda($content, $scope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1520853124, $changed, -1, 'org.jetbrains.compose.web.renderComposable$composable.<anonymous> (renderComposable.kt:59)');
        }
        $content($scope, $composer_0, 0);
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
  //region block: post-declaration
  DomApplier.prototype.onBeginChanges_yq9v60_k$ = onBeginChanges;
  DomApplier.prototype.onEndChanges_k50imu_k$ = onEndChanges;
  JsMicrotasksDispatcher.prototype.plus_rgw9wi_k$ = plus;
  JsMicrotasksDispatcher.prototype.get_j1ktw6_k$ = get;
  JsMicrotasksDispatcher.prototype.fold_iindx8_k$ = fold;
  JsMicrotasksDispatcher.prototype.minusKey_y21q55_k$ = minusKey;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DOMScope;
  _.$_$.b = DomApplier;
  _.$_$.c = DomNodeWrapper;
  _.$_$.d = NamedEventListener;
  _.$_$.e = renderComposable$composable;
  //endregion
  return _;
}));
