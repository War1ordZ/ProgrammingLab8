(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-uuid-kotlinx-uuid-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-uuid-kotlinx-uuid-core'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-uuid-kotlinx-uuid-core'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'kotlinx-uuid-kotlinx-uuid-core'.");
    }
    root['kotlinx-uuid-kotlinx-uuid-core'] = factory(typeof this['kotlinx-uuid-kotlinx-uuid-core'] === 'undefined' ? {} : this['kotlinx-uuid-kotlinx-uuid-core'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.f1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g2;
  var Long = kotlin_kotlin.$_$.r9;
  var Unit_getInstance = kotlin_kotlin.$_$.c3;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.j2;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.i2;
  var charSequenceGet = kotlin_kotlin.$_$.g7;
  var Char = kotlin_kotlin.$_$.j9;
  var equals = kotlin_kotlin.$_$.k7;
  var Char__minus_impl_a2frrh_0 = kotlin_kotlin.$_$.h2;
  var toLong = kotlin_kotlin.$_$.j8;
  var objectMeta = kotlin_kotlin.$_$.h8;
  var setMetadataFor = kotlin_kotlin.$_$.i8;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var THROW_CCE = kotlin_kotlin.$_$.v9;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var classMeta = kotlin_kotlin.$_$.i7;
  var THROW_ISE = kotlin_kotlin.$_$.w9;
  var toString = kotlin_kotlin.$_$.k8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var Enum = kotlin_kotlin.$_$.m9;
  var Comparable = kotlin_kotlin.$_$.k9;
  var Exception = kotlin_kotlin.$_$.o9;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.l1;
  var captureStack = kotlin_kotlin.$_$.e7;
  var Random = kotlin_kotlin.$_$.l8;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Serializer, 'Serializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(Default, 'Default', objectMeta, Serializer, undefined, undefined, undefined, []);
  setMetadataFor(WrappedCurlyBrackets, 'WrappedCurlyBrackets', objectMeta, Serializer, undefined, undefined, undefined, []);
  setMetadataFor(Version, 'Version', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(UUID, 'UUID', classMeta, undefined, [Comparable], undefined, {0: Default_getInstance}, []);
  setMetadataFor(UUIDFormatException, 'UUIDFormatException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(SecureRandomJs, 'SecureRandomJs', objectMeta, Random, undefined, undefined, undefined, []);
  //endregion
  function formatUUID(timeStampAndVersionRaw, clockSequenceVariantAndNodeRaw, includeBrackets) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$(38);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.uuid.formatUUID.<anonymous>' call
    if (includeBrackets) {
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(123));
    }
    dumpHex(timeStampAndVersionRaw.ushr_rr8rvr_k$(32), 4, tmp0_apply);
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(45));
    dumpHex(timeStampAndVersionRaw.ushr_rr8rvr_k$(16).and_jhajnj_k$(new Long(65535, 0)), 2, tmp0_apply);
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(45));
    dumpHex(timeStampAndVersionRaw.and_jhajnj_k$(new Long(65535, 0)), 2, tmp0_apply);
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(45));
    dumpHex(clockSequenceVariantAndNodeRaw.shr_wjue3g_k$(48).and_jhajnj_k$(new Long(65535, 0)), 2, tmp0_apply);
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(45));
    dumpHex(clockSequenceVariantAndNodeRaw.and_jhajnj_k$(new Long(-1, 65535)), 6, tmp0_apply);
    if (includeBrackets) {
      tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(125));
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function dumpHex(value, numberOfOctets, out) {
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < numberOfOctets)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.uuid.dumpHex.<anonymous>' call
        var octet = value.ushr_rr8rvr_k$(imul((numberOfOctets - index | 0) - 1 | 0, 8));
        dumpHalfByte(octet.toInt_1tsl84_k$() >> 4, out);
        dumpHalfByte(octet.toInt_1tsl84_k$(), out);
      }
       while (inductionVariable < numberOfOctets);
  }
  function dumpHalfByte(value, out) {
    var half = value & 15;
    out.append_t8oh9e_k$(half <= 9 ? Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(48), half) : Char__minus_impl_a2frrh(Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(97), half), 10));
  }
  function parseUUID(text) {
    var textIndex = skipCharacters(text, 0, _Char___init__impl__6a9atx(123));
    var timeStampAndVersionRaw = parseOctetStride(text, textIndex, 4, 32);
    textIndex = skipCharacters(text, textIndex + 8 | 0, _Char___init__impl__6a9atx(45));
    timeStampAndVersionRaw = timeStampAndVersionRaw.or_s401rn_k$(parseOctetStride(text, textIndex, 2, 16));
    textIndex = skipCharacters(text, textIndex + 4 | 0, _Char___init__impl__6a9atx(45));
    timeStampAndVersionRaw = timeStampAndVersionRaw.or_s401rn_k$(parseOctetStride(text, textIndex, 2, 0));
    textIndex = skipCharacters(text, textIndex + 4 | 0, _Char___init__impl__6a9atx(45));
    var clockSequenceVariantAndNodeRaw = parseOctetStride(text, textIndex, 2, 48);
    textIndex = skipCharacters(text, textIndex + 4 | 0, _Char___init__impl__6a9atx(45));
    clockSequenceVariantAndNodeRaw = clockSequenceVariantAndNodeRaw.or_s401rn_k$(parseOctetStride(text, textIndex, 6, 0));
    textIndex = skipCharacters(text, textIndex + 12 | 0, _Char___init__impl__6a9atx(125));
    if (textIndex < text.length) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = textIndex;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = text;
      tmp$ret$1 = tmp$ret$0.substring(tmp0_substring);
      error('extra trailing characters ' + tmp$ret$1, text, textIndex);
    }
    return Companion_getInstance().create_qjl3rk_k$(timeStampAndVersionRaw, clockSequenceVariantAndNodeRaw);
  }
  function skipCharacters(text, startIndex, a) {
    var inductionVariable = startIndex;
    var last = text.length;
    if (inductionVariable < last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var character = charSequenceGet(text, index);
        if ((equals(new Char(character), new Char(a)) ? true : equals(new Char(character), new Char(_Char___init__impl__6a9atx(32)))) ? true : equals(new Char(character), new Char(_Char___init__impl__6a9atx(9)))) {
          continue $l$loop;
        }
        return index;
      }
       while (inductionVariable < last);
    return text.length;
  }
  function parseOctetStride(text, textIndex, numberOfOctets, shift) {
    if ((text.length - textIndex | 0) < imul(numberOfOctets, 2)) {
      errorTooShort(text);
    }
    var result = new Long(0, 0);
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = imul(numberOfOctets, 2);
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.uuid.parseOctetStride.<anonymous>' call
        var character = charSequenceGet(text, textIndex + index | 0);
        var tmp;
        if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
          tmp = Char__minus_impl_a2frrh_0(character, _Char___init__impl__6a9atx(48));
        } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
          tmp = Char__minus_impl_a2frrh_0(character, _Char___init__impl__6a9atx(97)) + 10 | 0;
        } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
          tmp = Char__minus_impl_a2frrh_0(character, _Char___init__impl__6a9atx(65)) + 10 | 0;
        } else {
          error('Unexpected octet character ' + new Char(character), text, textIndex + index | 0);
        }
        var halfByte = tmp;
        result = result.shl_po5ip6_k$(4).or_s401rn_k$(toLong(halfByte));
      }
       while (inductionVariable < tmp0_repeat);
    return result.shl_po5ip6_k$(shift);
  }
  function error(message, text, index) {
    var tmp0_subject = index;
    throw new UUIDFormatException(tmp0_subject === -1 ? 'Failed to parse UUID ' + text + ': ' + message : 'Failed to parse UUID ' + text + ' at position ' + index + ': ' + message);
  }
  function errorTooShort(text) {
    error('UUID string is too short', text, -1);
  }
  function nextUUID(_this__u8e3s4) {
    return generateUUID(Companion_getInstance(), _this__u8e3s4);
  }
  function generateUUID(_this__u8e3s4, random) {
    var timeStampAndVersionRaw = random.nextLong_njwv0v_k$().and_jhajnj_k$(new Long(-61441, -1)).or_s401rn_k$(new Long(16384, 0));
    var clockSequenceVariantAndNodeRaw = random.nextLong_njwv0v_k$().and_jhajnj_k$(new Long(-1, 1073741823)).or_s401rn_k$(new Long(0, -2147483648));
    return _this__u8e3s4.create_qjl3rk_k$(timeStampAndVersionRaw, clockSequenceVariantAndNodeRaw);
  }
  function generateUUID$default(_this__u8e3s4, random, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      random = get_SecureRandom();
    return generateUUID(_this__u8e3s4, random);
  }
  function _get_includeBrackets__6o23oi($this) {
    return $this.includeBrackets_1;
  }
  function Default() {
    Default_instance = this;
    Serializer.call(this, false);
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function WrappedCurlyBrackets() {
    WrappedCurlyBrackets_instance = this;
    Serializer.call(this, true);
  }
  var WrappedCurlyBrackets_instance;
  function WrappedCurlyBrackets_getInstance() {
    if (WrappedCurlyBrackets_instance == null)
      new WrappedCurlyBrackets();
    return WrappedCurlyBrackets_instance;
  }
  function Serializer(includeBrackets) {
    this.includeBrackets_1 = includeBrackets;
    this.descriptor_1 = PrimitiveSerialDescriptor('UUID', STRING_getInstance());
  }
  Serializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  Serializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return UUID_init_$Create$_0(decoder.decodeString_x3hxsx_k$());
  };
  Serializer.prototype.serialize_ur3sl8_k$ = function (encoder, value) {
    encoder.encodeString_90sumj_k$(value.toString_43c40e_k$(this.includeBrackets_1));
  };
  Serializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_ur3sl8_k$(encoder, value instanceof UUID ? value : THROW_CCE());
  };
  var Version_TIME_BASED_instance;
  var Version_DCE_SECURITY_instance;
  var Version_NAME_BASED_MD5_instance;
  var Version_RANDOM_BASED_instance;
  var Version_NAME_BASED_SHA1_instance;
  function values() {
    return [Version_TIME_BASED_getInstance(), Version_DCE_SECURITY_getInstance(), Version_NAME_BASED_MD5_getInstance(), Version_RANDOM_BASED_getInstance(), Version_NAME_BASED_SHA1_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'TIME_BASED':
        return Version_TIME_BASED_getInstance();
      case 'DCE_SECURITY':
        return Version_DCE_SECURITY_getInstance();
      case 'NAME_BASED_MD5':
        return Version_NAME_BASED_MD5_getInstance();
      case 'RANDOM_BASED':
        return Version_RANDOM_BASED_getInstance();
      case 'NAME_BASED_SHA1':
        return Version_NAME_BASED_SHA1_getInstance();
      default:
        Version_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Version_entriesInitialized;
  function Version_initEntries() {
    if (Version_entriesInitialized)
      return Unit_getInstance();
    Version_entriesInitialized = true;
    Version_TIME_BASED_instance = new Version('TIME_BASED', 0, 1);
    Version_DCE_SECURITY_instance = new Version('DCE_SECURITY', 1, 2);
    Version_NAME_BASED_MD5_instance = new Version('NAME_BASED_MD5', 2, 3);
    Version_RANDOM_BASED_instance = new Version('RANDOM_BASED', 3, 4);
    Version_NAME_BASED_SHA1_instance = new Version('NAME_BASED_SHA1', 4, 5);
  }
  function versionFor($this, id) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = values();
      var indexedObject = tmp0_firstOrNull;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlinx.uuid.Companion.versionFor.<anonymous>' call
        tmp$ret$0 = element.id_1 === id;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function UUID_init_$Init$(helper, $this) {
    UUID.call($this, helper.timeStampAndVersionRaw_1, helper.clockSequenceVariantAndNodeRaw_1);
    return $this;
  }
  function UUID_init_$Create$(helper) {
    return UUID_init_$Init$(helper, Object.create(UUID.prototype));
  }
  function UUID_init_$Init$_0(uuid, $this) {
    UUID_init_$Init$(parseUUID(uuid), $this);
    return $this;
  }
  function UUID_init_$Create$_0(uuid) {
    return UUID_init_$Init$_0(uuid, Object.create(UUID.prototype));
  }
  function UUID_init_$Init$_1($this) {
    UUID_init_$Init$(nextUUID(get_SecureRandom()), $this);
    return $this;
  }
  function UUID_init_$Create$_1() {
    return UUID_init_$Init$_1(Object.create(UUID.prototype));
  }
  function UUID_init_$Init$_2(versionNumber, timeStamp, clockSequence, node, variant, $this) {
    UUID.call($this, timeStamp.shl_po5ip6_k$(32).or_s401rn_k$(timeStamp.and_jhajnj_k$(new Long(0, 65535)).shr_wjue3g_k$(16)).or_s401rn_k$(timeStamp.shr_wjue3g_k$(48)).or_s401rn_k$(toLong(versionNumber).shl_po5ip6_k$(12)), toLong(clockSequence).shl_po5ip6_k$(48).or_s401rn_k$(toLong(variant).shl_po5ip6_k$(61)).or_s401rn_k$(node));
    // Inline function 'kotlin.require' call
    var tmp0_require = 0 <= versionNumber ? versionNumber <= 15 : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = 0 <= variant ? variant <= 7 : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$1 = 'Failed requirement.';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = (new Long(0, 0)).compareTo_n4fqi2_k$(timeStamp) <= 0 ? timeStamp.compareTo_n4fqi2_k$(new Long(0, 268435456)) < 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$2;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$2 = 'Failed requirement.';
      var message_1 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.require' call
    var tmp3_require = (new Long(0, 0)).compareTo_n4fqi2_k$(node) <= 0 ? node.compareTo_n4fqi2_k$(new Long(0, 65536)) < 0 : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_require) {
      var tmp$ret$3;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$3 = 'Failed requirement.';
      var message_2 = tmp$ret$3;
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
    // Inline function 'kotlin.require' call
    var tmp4_require = 0 <= clockSequence ? clockSequence < 8192 : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp4_require) {
      var tmp$ret$4;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$4 = 'Failed requirement.';
      var message_3 = tmp$ret$4;
      throw IllegalArgumentException_init_$Create$(toString(message_3));
    }
    return $this;
  }
  function UUID_init_$Create$_2(versionNumber, timeStamp, clockSequence, node, variant) {
    return UUID_init_$Init$_2(versionNumber, timeStamp, clockSequence, node, variant, Object.create(UUID.prototype));
  }
  function UUID_init_$Init$_3(versionNumber, timeStamp, clockSequence, node, variant, $mask0, $marker, $this) {
    if (!(($mask0 & 16) === 0))
      variant = 5;
    UUID_init_$Init$_2(versionNumber, timeStamp, clockSequence, node, variant, $this);
    return $this;
  }
  function UUID_init_$Create$_3(versionNumber, timeStamp, clockSequence, node, variant, $mask0, $marker) {
    return UUID_init_$Init$_3(versionNumber, timeStamp, clockSequence, node, variant, $mask0, $marker, Object.create(UUID.prototype));
  }
  function UUID_init_$Init$_4(version, timeStamp, clockSequence, node, variant, $this) {
    UUID_init_$Init$_2(version.id_1, timeStamp, clockSequence, node, variant, $this);
    return $this;
  }
  function UUID_init_$Create$_4(version, timeStamp, clockSequence, node, variant) {
    return UUID_init_$Init$_4(version, timeStamp, clockSequence, node, variant, Object.create(UUID.prototype));
  }
  function UUID_init_$Init$_5(version, timeStamp, clockSequence, node, variant, $mask0, $marker, $this) {
    if (!(($mask0 & 16) === 0))
      variant = 5;
    UUID_init_$Init$_4(version, timeStamp, clockSequence, node, variant, $this);
    return $this;
  }
  function UUID_init_$Create$_5(version, timeStamp, clockSequence, node, variant, $mask0, $marker) {
    return UUID_init_$Init$_5(version, timeStamp, clockSequence, node, variant, $mask0, $marker, Object.create(UUID.prototype));
  }
  function Version(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.id_1 = id;
  }
  Version.prototype.get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  function Companion() {
    Companion_instance = this;
    this.NIL_1 = this.create_qjl3rk_k$(new Long(0, 0), new Long(0, 0));
  }
  Companion.prototype.get_NIL_18jofs_k$ = function () {
    return this.NIL_1;
  };
  Companion.prototype.isValidUUIDString_yixr31_k$ = function (spec) {
    var tmp;
    try {
      parseUUID(spec);
      tmp = true;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UUIDFormatException) {
        tmp_0 = false;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  Companion.prototype.create_qjl3rk_k$ = function (timeStampAndVersionRaw, clockSequenceVariantAndNodeRaw) {
    return new UUID(timeStampAndVersionRaw, clockSequenceVariantAndNodeRaw);
  };
  Companion.prototype.serializer_9w0wvi_k$ = function () {
    return Default_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Version_TIME_BASED_getInstance() {
    Version_initEntries();
    return Version_TIME_BASED_instance;
  }
  function Version_DCE_SECURITY_getInstance() {
    Version_initEntries();
    return Version_DCE_SECURITY_instance;
  }
  function Version_NAME_BASED_MD5_getInstance() {
    Version_initEntries();
    return Version_NAME_BASED_MD5_instance;
  }
  function Version_RANDOM_BASED_getInstance() {
    Version_initEntries();
    return Version_RANDOM_BASED_instance;
  }
  function Version_NAME_BASED_SHA1_getInstance() {
    Version_initEntries();
    return Version_NAME_BASED_SHA1_instance;
  }
  function UUID(timeStampAndVersionRaw, clockSequenceVariantAndNodeRaw) {
    Companion_getInstance();
    this.timeStampAndVersionRaw_1 = timeStampAndVersionRaw;
    this.clockSequenceVariantAndNodeRaw_1 = clockSequenceVariantAndNodeRaw;
  }
  UUID.prototype.get_timeStampAndVersionRaw_ncj0fa_k$ = function () {
    return this.timeStampAndVersionRaw_1;
  };
  UUID.prototype.get_clockSequenceVariantAndNodeRaw_to6ejy_k$ = function () {
    return this.clockSequenceVariantAndNodeRaw_1;
  };
  UUID.prototype.get_timeStamp_8xqxxp_k$ = function () {
    return this.timeStampAndVersionRaw_1.ushr_rr8rvr_k$(32).or_s401rn_k$(this.timeStampAndVersionRaw_1.and_jhajnj_k$(new Long(-65536, 0)).shl_po5ip6_k$(16)).or_s401rn_k$(this.timeStampAndVersionRaw_1.and_jhajnj_k$(new Long(4095, 0)).shl_po5ip6_k$(48));
  };
  UUID.prototype.get_clockSequence_eigzsq_k$ = function () {
    return this.clockSequenceVariantAndNodeRaw_1.shr_wjue3g_k$(48).and_jhajnj_k$(new Long(8191, 0)).toInt_1tsl84_k$();
  };
  UUID.prototype.get_versionNumber_98p5p4_k$ = function () {
    return this.timeStampAndVersionRaw_1.and_jhajnj_k$(new Long(61440, 0)).shr_wjue3g_k$(12).toInt_1tsl84_k$();
  };
  UUID.prototype.get_version_72w4j3_k$ = function () {
    return this.get_isRfcVariant_33nj6x_k$() ? versionFor(Companion_getInstance(), this.get_versionNumber_98p5p4_k$()) : null;
  };
  UUID.prototype.get_variant_56j34s_k$ = function () {
    return this.clockSequenceVariantAndNodeRaw_1.ushr_rr8rvr_k$(61).toInt_1tsl84_k$();
  };
  UUID.prototype.get_isRfcVariant_33nj6x_k$ = function () {
    var containsArg = this.get_variant_56j34s_k$();
    return 4 <= containsArg ? containsArg <= 5 : false;
  };
  UUID.prototype.get_node_wor8sr_k$ = function () {
    return this.clockSequenceVariantAndNodeRaw_1.and_jhajnj_k$(new Long(-1, 65535));
  };
  UUID.prototype.toString = function () {
    return this.toString_43c40e_k$(false);
  };
  UUID.prototype.toString_43c40e_k$ = function (includeBrackets) {
    return formatUUID(this.timeStampAndVersionRaw_1, this.clockSequenceVariantAndNodeRaw_1, includeBrackets);
  };
  UUID.prototype.hashCode = function () {
    return this.timeStampAndVersionRaw_1.hashCode() + this.clockSequenceVariantAndNodeRaw_1.hashCode() | 0;
  };
  UUID.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof UUID) {
      tmp_0 = other.clockSequenceVariantAndNodeRaw_1.equals(this.clockSequenceVariantAndNodeRaw_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.timeStampAndVersionRaw_1.equals(this.timeStampAndVersionRaw_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  UUID.prototype.compareTo_u5umrs_k$ = function (other) {
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.timeStampAndVersionRaw_1.compareTo_n4fqi2_k$(other.timeStampAndVersionRaw_1);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!(tmp0_let === 0)) {
      return tmp0_let;
    }
    tmp$ret$0 = tmp;
    return this.clockSequenceVariantAndNodeRaw_1.compareTo_n4fqi2_k$(other.clockSequenceVariantAndNodeRaw_1);
  };
  UUID.prototype.compareTo_6thzaj_k$ = function (other) {
    return this.compareTo_u5umrs_k$(other instanceof UUID ? other : THROW_CCE());
  };
  function toUUIDOrNull(_this__u8e3s4) {
    var tmp;
    try {
      tmp = parseUUID(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UUIDFormatException) {
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function UUIDFormatException(message) {
    Exception_init_$Init$(message, this);
    this.message_1 = message;
    captureStack(this, UUIDFormatException);
  }
  UUIDFormatException.prototype.get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  Object.defineProperty(UUIDFormatException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.get_message_h23axq_k$();
    }
  });
  function get_SecureRandom() {
    init_properties_SecureRandom_kt_urhxvk();
    return SecureRandom;
  }
  var SecureRandom;
  function _get_crypto__fwud1y(_this__u8e3s4, $this) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var tmp0_unsafeCast = tmp$ret$0.crypto;
    tmp$ret$1 = tmp0_unsafeCast;
    return tmp$ret$1;
  }
  function takeUpperBits(_this__u8e3s4, $this, bitCount) {
    return (_this__u8e3s4 >>> (32 - bitCount | 0) | 0) & (-bitCount | 0) >> 31;
  }
  function SecureRandomJs() {
    SecureRandomJs_instance = this;
    Random.call(this);
  }
  SecureRandomJs.prototype.nextBits_30zi6g_k$ = function (bitCount) {
    return takeUpperBits(this.nextInt_ujorgc_k$(), this, bitCount);
  };
  SecureRandomJs.prototype.nextInt_ujorgc_k$ = function () {
    var tmp$ret$4;
    // Inline function 'org.khronos.webgl.get' call
    var tmp$ret$2;
    // Inline function 'kotlinx.uuid.SecureRandomJs.crypto' call
    var tmp0__get_crypto__whd6vk = window;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_crypto__whd6vk;
    var tmp0_unsafeCast = tmp$ret$0.crypto;
    tmp$ret$1 = tmp0_unsafeCast;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_get = tmp$ret$2.getRandomValues(new Uint32Array(1));
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = tmp1_get;
    tmp$ret$4 = tmp$ret$3[0];
    return tmp$ret$4;
  };
  var SecureRandomJs_instance;
  function SecureRandomJs_getInstance() {
    if (SecureRandomJs_instance == null)
      new SecureRandomJs();
    return SecureRandomJs_instance;
  }
  var properties_initialized_SecureRandom_kt_h6trfg;
  function init_properties_SecureRandom_kt_urhxvk() {
    if (properties_initialized_SecureRandom_kt_h6trfg) {
    } else {
      properties_initialized_SecureRandom_kt_h6trfg = true;
      SecureRandom = SecureRandomJs_getInstance();
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = toUUIDOrNull;
  //endregion
  return _;
}));
