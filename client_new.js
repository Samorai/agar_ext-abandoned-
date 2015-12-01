
(function(self, $) {


  /**
   * @return {undefined}
   */
  function init() {
    /** @type {boolean} */
    Ua = true;
    $scope.google.da();
    $scope.V.init();
    search();
    setInterval(search, 18E4);
    /** @type {(HTMLElement|null)} */
    canvas = cv = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    /**
     * @param {Event} e
     * @return {undefined}
     */
    canvas.onmousedown = function(e) {
      if (options) {
        /** @type {number} */
        var z0 = e.clientX - (5 + width / 5 / 2);
        /** @type {number} */
        var z1 = e.clientY - (5 + width / 5 / 2);
        if (Math.sqrt(z0 * z0 + z1 * z1) <= width / 5 / 2) {
          handler();
          registerEvent(17);
          return;
        }
      }
      /** @type {number} */
      cx = 1 * e.clientX;
      /** @type {number} */
      cy = 1 * e.clientY;
      preventDefault();
      handler();
    };
    /**
     * @param {Event} e
     * @return {undefined}
     */
    canvas.onmousemove = function(e) {
      /** @type {number} */
      cx = 1 * e.clientX;
      /** @type {number} */
      cy = 1 * e.clientY;
      preventDefault();
    };
    /**
     * @return {undefined}
     */
    canvas.onmouseup = function() {
    };
    if (/firefox/i.test(navigator.userAgent)) {
      document.addEventListener("DOMMouseScroll", handleMousewheel, false);
    } else {
      /** @type {function (Event): undefined} */
      document.body.onmousewheel = handleMousewheel;
    }
    /** @type {boolean} */
    var c = false;
    /** @type {boolean} */
    var b = false;
    /** @type {boolean} */
    var g = false;
    /**
     * @param {Object} evt
     * @return {undefined}
     */
    self.onkeydown = function(evt) {
      if (!(32 != evt.keyCode)) {
        if (!c) {
          if ("nick" != evt.target.id) {
            evt.preventDefault();
          }
          handler();
          registerEvent(17);
          /** @type {boolean} */
          c = true;
        }
      }
      if (!(81 != evt.keyCode)) {
        if (!b) {
          registerEvent(18);
          /** @type {boolean} */
          b = true;
        }
      }
      if (!(87 != evt.keyCode)) {
        if (!g) {
          handler();
          registerEvent(21);
          /** @type {boolean} */
          g = true;
        }
      }
      if (27 == evt.keyCode) {
        evt.preventDefault();
        send(300);
      }
    };
    /**
     * @param {?} event
     * @return {undefined}
     */
    self.onkeyup = function(event) {
      if (32 == event.keyCode) {
        /** @type {boolean} */
        c = false;
      }
      if (87 == event.keyCode) {
        /** @type {boolean} */
        g = false;
      }
      if (81 == event.keyCode) {
        if (b) {
          registerEvent(19);
          /** @type {boolean} */
          b = false;
        }
      }
    };
    /**
     * @return {undefined}
     */
    self.onblur = function() {
      registerEvent(19);
      /** @type {boolean} */
      g = b = c = false;
    };
    /** @type {function (): undefined} */
    self.onresize = update;
    self.requestAnimationFrame(which);
    setInterval(handler, 40);
    if (fx) {
      $("#region").val(fx);
    }
    refresh();
    reset($("#region").val());
    if (0 == last) {
      if (fx) {
        animate();
      }
    }
    wellKnownWords.ABGroupDFP = getURL("AB9");
    wellKnownWords.ABGroupRubicon = getURL("AB10_Rubicon");
    self.location.search.indexOf("fb");
    obj.w = self.hasBottomAd;
    if (debugads) {
      console.log("Init ads");
    }
    createAds();
    load();
    if (debugads) {
      console.log("Ads initted");
    }
    if (debugads) {
      console.log("Your group: ", each() ? "rubicon" : "dfp");
    }
    inject();
    send(0);
    update();
    if (self.location.hash) {
      if (6 <= self.location.hash.length) {
        remove(self.location.hash);
      }
    }
  }
  /**
   * @param {Event} e
   * @return {undefined}
   */
  function handleMousewheel(e) {
    e.preventDefault();
    ratio *= Math.pow(0.9, e.wheelDelta / -120 || (e.detail || 0));
    if (1 > ratio) {
      /** @type {number} */
      ratio = 1;
    }
    if (ratio > 4 / scale) {
      /** @type {number} */
      ratio = 4 / scale;
    }
  }
  /**
   * @return {undefined}
   */
  function createObjects() {
    if (0.4 > scale) {
      /** @type {null} */
      c = null;
    } else {
      /** @type {number} */
      var n = Number.POSITIVE_INFINITY;
      /** @type {number} */
      var left = Number.POSITIVE_INFINITY;
      /** @type {number} */
      var maxY = Number.NEGATIVE_INFINITY;
      /** @type {number} */
      var bottom = Number.NEGATIVE_INFINITY;
      /** @type {number} */
      var i = 0;

      for (;i < codeSegments.length;i++) {
        var options = codeSegments[i];
        if (!!options.H()) {
          if (!options.M) {
            if (!(20 >= options.size * scale)) {
              /** @type {number} */
              n = Math.min(options.x - options.size, n);
              /** @type {number} */
              left = Math.min(options.y - options.size, left);
              /** @type {number} */
              maxY = Math.max(options.x + options.size, maxY);
              /** @type {number} */
              bottom = Math.max(options.y + options.size, bottom);
            }
          }
        }
      }
      c = proto.init({
        ia : n - 10,
        ja : left - 10,
        fa : maxY + 10,
        ha : bottom + 10,
        ta : 2,
        ua : 4
      });
      /** @type {number} */
      i = 0;
      for (;i < codeSegments.length;i++) {
        if (options = codeSegments[i], options.H() && !(20 >= options.size * scale)) {
          /** @type {number} */
          n = 0;
          for (;n < options.a.length;++n) {
            left = options.a[n].x;
            maxY = options.a[n].y;
            if (!(left < x - width / 2 / scale)) {
              if (!(maxY < r - height / 2 / scale)) {
                if (!(left > x + width / 2 / scale)) {
                  if (!(maxY > r + height / 2 / scale)) {
                    c.ca(options.a[n]);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  /**
   * @return {undefined}
   */
  function preventDefault() {
    idx = (cx - width / 2) / scale + x;
    value = (cy - height / 2) / scale + r;
  }
  /**
   * @return {undefined}
   */
  function search() {
    if (null == old) {
      old = {};
      $("#region").children().each(function() {
        var option = $(this);
        var name = option.val();
        if (name) {
          old[name] = option.text();
        }
      });
    }
    $.get(url + "info", function(b) {
      var testSource = {};
      var name;
      for (name in b.regions) {
        /** @type {string} */
        var sourceName = name.split(":")[0];
        testSource[sourceName] = testSource[sourceName] || 0;
        testSource[sourceName] += b.regions[name].numPlayers;
      }
      for (name in testSource) {
        $('#region option[value="' + name + '"]').text(old[name] + " (" + testSource[name] + " players)");
      }
    }, "json");
  }
  /**
   * @return {undefined}
   */
  function onchange() {
    $("#adsBottom").hide();
    $("#overlays").hide();
    $("#stats").hide();
    $("#mainPanel").hide();
    /** @type {boolean} */
    from = to = false;
    refresh();
    /** @type {Array} */
    var pdataCur = user.aa;
    draw(pdataCur);
    emit(pdataCur);
    /** @type {Array} */
    pdataCur = user.ac;
    draw(pdataCur);
    emit(pdataCur);
  }
  /**
   * @param {(Object|string)} type
   * @return {undefined}
   */
  function reset(type) {
    if (type) {
      if (type == fx) {
        $(".btn-needs-server").prop("disabled", false);
      } else {
        if ($("#region").val() != type) {
          $("#region").val(type);
        }
        fx = self.localStorage.location = type;
        $(".region-message").hide();
        $(".region-message." + type).show();
        $(".btn-needs-server").prop("disabled", false);
        if (Ua) {
          animate();
        }
      }
    }
  }
  /**
   * @param {number} expectedHashCode
   * @return {undefined}
   */
  function send(expectedHashCode) {
    if (!to) {
      if (!from) {
        if (Ea) {
          $(".btn-spectate").prop("disabled", true);
        } else {
          $(".btn-spectate").prop("disabled", false);
        }
        /** @type {null} */
        chars = null;
        if (!isGoal) {
          $("#adsBottom").show();
          $("#g300x250").hide();
          $("#a300x250").show();
          $("#g728x90").hide();
          $("#a728x90").show();
        }
        next(isGoal ? user.ac : user.aa);
        /** @type {boolean} */
        isGoal = false;
        if (1E3 > expectedHashCode) {
          /** @type {number} */
          alpha = 1;
        }
        /** @type {boolean} */
        to = true;
        $("#mainPanel").show();
        if (0 < expectedHashCode) {
          $("#overlays").fadeIn(expectedHashCode);
        } else {
          $("#overlays").show();
        }
      }
    }
  }
  /**
   * @param {number} url
   * @return {undefined}
   */
  function get(url) {
    $("#helloContainer").attr("data-gamemode", url);
    /** @type {number} */
    reply = url;
    $("#gamemode").val(url);
  }
  /**
   * @return {undefined}
   */
  function refresh() {
    if ($("#region").val()) {
      self.localStorage.location = $("#region").val();
    } else {
      if (self.localStorage.location) {
        $("#region").val(self.localStorage.location);
      }
    }
    if ($("#region").val()) {
      $("#locationKnown").append($("#region"));
    } else {
      $("#locationUnknown").append($("#region"));
    }
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function test(name) {
    return self.i18n[name] || (self.i18n_dict.en[name] || name);
  }
  /**
   * @return {undefined}
   */
  function inject() {
    /** @type {boolean} */
    var a = -1 != self.location.search.indexOf("fb");
    a = each() && !a;
    googletag.cmd.push(function() {
      googletag.display("g300x250");
    });
    if (Ib) {
      googletag.cmd.push(function() {
        googletag.display("g728x90");
      });
    }
    if (!a) {
      googletag.cmd.push(function() {
        googletag.display("s300x250");
      });
      googletag.cmd.push(function() {
        googletag.display("a300x250");
      });
      if (Ib) {
        googletag.cmd.push(function() {
          googletag.display("a728x90");
        });
      }
    }
  }
  /**
   * @return {?}
   */
  function each() {
    return!(50 > cell("ABGroupRubicon"));
  }
  /**
   * @param {string} w
   * @return {?}
   */
  function cell(w) {
    return w in wellKnownWords ? wellKnownWords[w] : 0;
  }
  /**
   * @param {Array} d
   * @return {undefined}
   */
  function next(d) {
    run(d);
    /** @type {number} */
    var j = 0;
    for (;j < d.length;j++) {
      if (!("type" in d[j] && "rubicon" != d[j].type)) {
        var options = d[j].data;
        if (debugads) {
          console.log("Rubicon: refreshing:" + options.id);
        }
        res.F(options.id, options.size, options.json);
      }
    }
  }
  /**
   * @return {undefined}
   */
  function createAds() {
    var pdataCur = {};
    /** @type {null} */
    var camelKey = null;
    /** @type {null} */
    var memory = null;
    /** @type {null} */
    var udataCur = null;
    /** @type {null} */
    var pdataOld = null;
    /** @type {boolean} */
    var t = -1 != self.location.search.indexOf("fb");
    var k = each() && !t;
    var tmp = obj.w;
    if (t) {
      /** @type {string} */
      pdataCur = "/53945695/agar_facebook/agar/300x250";
      /** @type {string} */
      udataCur = "/53945695/agar_facebook/agar/300x250_Stats";
      /** @type {string} */
      pdataOld = "/53945695/agar_facebook/agar/300x250";
    } else {
      /** @type {string} */
      pdataOld = "/116850162/300x250_init";
      /** @type {string} */
      camelKey = "/116850162/728x90_init";
      /** @type {string} */
      pdataCur = "/116850162/300x250_login";
      /** @type {string} */
      udataCur = "/116850162/300x250_stats";
      /** @type {string} */
      memory = "/116850162/728x90_login";
    }
    var i = self.googletag;
    i.cmd.push(function() {
      i.pubads().setTargeting("abtest", cell("ABGroupDFP") + "");
      user.ac.push(store.defineSlot(pdataOld, [300, 250], "g300x250"));
      if (tmp) {
        user.ac.push(store.defineSlot(camelKey, [728, 90], "g728x90"));
      }
      if (!k) {
        user.ab.push(store.defineSlot(udataCur, [300, 250], "s300x250"));
        user.aa.push(store.defineSlot(pdataCur, [300, 250], "a300x250"));
        if (tmp) {
          user.aa.push(store.defineSlot(memory, [728, 90], "a728x90"));
        }
      }
      i.pubads().enableSingleRequest();
      i.pubads().disableInitialLoad();
      i.enableServices();
      /** @type {boolean} */
      testName = true;
      if (null != dir) {
        console.log("refreshing from queue");
        run(dir);
      }
    });
  }
  /**
   * @param {Array} d
   * @return {undefined}
   */
  function run(d) {
    console.log("dfpInitialized=" + testName);
    if (!testName) {
      console.log("queuing refresh");
      /** @type {Array} */
      dir = d;
    }
    /** @type {Array} */
    var records = [];
    /** @type {number} */
    var j = 0;
    for (;j < d.length;j++) {
      if ("type" in d[j] && "dfpads" != d[j].type) {
        console.log("trying to refresh a non dfp ad. continue");
      } else {
        if (debugads) {
          console.log("DFP: refreshing:" + d[j].data.A);
        }
        records.push(d[j].data);
      }
    }
    if (!(0 >= records.length)) {
      if (!!self.googletag) {
        self.googletag.cmd.push(function() {
          if (eb) {
            /** @type {boolean} */
            eb = false;
            setTimeout(function() {
              /** @type {boolean} */
              eb = true;
            }, 6E4 * maxWait);
            if (self.googletag) {
              if (self.googletag.pubads) {
                if (self.googletag.pubads().refresh) {
                  self.googletag.pubads().refresh(records);
                }
              }
            }
          }
        });
      }
    }
  }
  /**
   * @param {Array} data
   * @return {undefined}
   */
  function draw(data) {
    /** @type {Array} */
    var params = [];
    /** @type {number} */
    var i = 0;
    for (;i < data.length;i++) {
      if (!("type" in data[i] && "dfpads" != data[i].type)) {
        if (debugads) {
          console.log("DFP: destroying:" + data[i].data.A);
        }
        params.push(data[i].data);
      }
    }
    if (self.googletag) {
      if (self.googletag.pubads) {
        if (self.googletag.pubads().clear) {
          self.googletag.pubads().clear(params);
        }
      }
    }
  }
  /**
   * @return {undefined}
   */
  function load() {
    if (each()) {
      var data = {
        acct : 13694,
        site : 73068,
        zone : 346604,
        size : 15
      };
      var info = {
        acct : 13694,
        site : 73068,
        zone : 363786,
        size : 2
      };
      self.location.search.indexOf("fb");
      var tmp = obj.w;
      user.ab.push(res.defineSlot(data, "300x250", "s300x250"));
      user.aa.push(res.defineSlot(data, "300x250", "a300x250"));
      if (tmp) {
        user.aa.push(res.defineSlot(info, "728x90", "a728x90"));
      }
    }
  }
  /**
   * @return {undefined}
   */
  function poll() {
    /** @type {number} */
    var i = ++last;
    console.log("Find " + fx + reply);
    bind();
    $.ajax(url + "findServer", {
      /**
       * @return {undefined}
       */
      error : function() {
        setTimeout(poll, 3E4);
      },
      /**
       * @param {Object} data
       * @return {undefined}
       */
      success : function(data) {
        if (i == last) {
          if (data.alert) {
            alert(data.alert);
          }
          var method = data.ip;
          if (void 0 != item.$) {
            /** @type {string} */
            method = self.location.hostname + ":" + item.$;
          }
          open("ws" + (ssl ? "s" : "") + "://" + method, data.token);
        }
      },
      dataType : "json",
      method : "POST",
      cache : false,
      crossDomain : true,
      data : (fx + reply || "?") + "\n2200049715"
    });
  }
  /**
   * @return {undefined}
   */
  function animate() {
    if (Ua) {
      if (fx) {
        $("#connecting").show();
        poll();
      }
    }
  }
  /**
   * @return {undefined}
   */
  function bind() {
    if (ws) {
      /** @type {null} */
      ws.onopen = null;
      /** @type {null} */
      ws.onmessage = null;
      /** @type {null} */
      ws.onclose = null;
      try {
        ws.close();
      } catch (a) {
      }
      /** @type {null} */
      ws = null;
    }
  }
  /**
   * @param {string} url
   * @param {string} a
   * @return {undefined}
   */
  function open(url, a) {
    bind();
    if (results.ip) {
      /** @type {string} */
      url = "ws" + (ssl ? "s" : "") + "://" + results.ip;
    }
    if (null != success) {
      var callback = success;
      /**
       * @return {undefined}
       */
      success = function() {
        callback(a);
      };
    }
    if (ssl && (!item.env_development && !item.env_local)) {
      var attrList = url.split(":");
      /** @type {string} */
      url = "wss://ip-" + attrList[1].replace(/\./g, "-").replace(/\//g, "") + ".tech.agar.io:" + +attrList[2];
    }
    /** @type {Array} */
    result = [];
    /** @type {Array} */
    items = [];
    nodes = {};
    /** @type {Array} */
    codeSegments = [];
    /** @type {Array} */
    plugins = [];
    /** @type {Array} */
    users = [];
    /** @type {null} */
    img = angles = null;
    /** @type {number} */
    closingAnimationTime = 0;
    /** @type {boolean} */
    na = false;
    console.log("Connecting to " + url);
    /** @type {WebSocket} */
    ws = new WebSocket(url);
    /** @type {string} */
    ws.binaryType = "arraybuffer";
    /**
     * @return {undefined}
     */
    ws.onopen = function() {
      var data;
      console.log("socket open");
      data = stringify(5);
      data.setUint8(0, 254);
      data.setUint32(1, 5, true);
      log(data);
      data = stringify(5);
      data.setUint8(0, 255);
      data.setUint32(1, 2200049715, true);
      log(data);
      data = stringify(1 + a.length);
      data.setUint8(0, 80);
      /** @type {number} */
      var i = 0;
      for (;i < a.length;++i) {
        data.setUint8(i + 1, a.charCodeAt(i));
      }
      log(data);
      onSuccess();
    };
    /** @type {function (MessageEvent): undefined} */
    ws.onmessage = onmessage;
    /** @type {function (): undefined} */
    ws.onclose = listener;
    /**
     * @return {undefined}
     */
    ws.onerror = function() {
      console.log("socket error");
    };
  }
  /**
   * @param {number} expectedNumberOfNonCommentArgs
   * @return {?}
   */
  function stringify(expectedNumberOfNonCommentArgs) {
    return new DataView(new ArrayBuffer(expectedNumberOfNonCommentArgs));
  }
  /**
   * @param {Object} data
   * @return {undefined}
   */
  function log(data) {
    ws.send(data.buffer);
  }
  /**
   * @return {undefined}
   */
  function listener() {
    if (na) {
      /** @type {number} */
      backoff = 500;
    }
    console.log("socket close");
    setTimeout(animate, backoff);
    backoff *= 2;
  }
  /**
   * @param {MessageEvent} a
   * @return {undefined}
   */
  function onmessage(a) {
    parse(new DataView(a.data));
  }
  /**
   * @param {DataView} data
   * @return {undefined}
   */
  function parse(data) {
    /**
     * @return {?}
     */
    function encode() {
      /** @type {string} */
      var str = "";
      for (;;) {
        var b = data.getUint16(offset, true);
        offset += 2;
        if (0 == b) {
          break;
        }
        str += String.fromCharCode(b);
      }
      return str;
    }
    /** @type {number} */
    var offset = 0;
    if (240 == data.getUint8(offset)) {
      offset += 5;
    }
    switch(data.getUint8(offset++)) {
      case 16:
        fn(data, offset);
        break;
      case 17:
        b = data.getFloat32(offset, true);
        offset += 4;
        val = data.getFloat32(offset, true);
        offset += 4;
        arg = data.getFloat32(offset, true);
        offset += 4;
        break;
      case 20:
        /** @type {Array} */
        items = [];
        /** @type {Array} */
        result = [];
        break;
      case 21:
        chunk = data.getInt16(offset, true);
        offset += 2;
        cur = data.getInt16(offset, true);
        offset += 2;
        if (!jb) {
          /** @type {boolean} */
          jb = true;
          xr = chunk;
          tmp = cur;
        }
        break;
      case 32:
        result.push(data.getUint32(offset, true));
        offset += 4;
        break;
      case 49:
        if (null != angles) {
          break;
        }
        var len = data.getUint32(offset, true);
        offset = offset + 4;
        /** @type {Array} */
        users = [];
        /** @type {number} */
        var i = 0;
        for (;i < len;++i) {
          var token = data.getUint32(offset, true);
          offset = offset + 4;
          users.push({
            id : token,
            name : encode()
          });
        }
        create();
        break;
      case 50:
        /** @type {Array} */
        angles = [];
        len = data.getUint32(offset, true);
        offset += 4;
        /** @type {number} */
        i = 0;
        for (;i < len;++i) {
          angles.push(data.getFloat32(offset, true));
          offset += 4;
        }
        create();
        break;
      case 64:
        max = data.getFloat64(offset, true);
        offset += 8;
        low = data.getFloat64(offset, true);
        offset += 8;
        min = data.getFloat64(offset, true);
        offset += 8;
        high = data.getFloat64(offset, true);
        offset += 8;
        /** @type {number} */
        b = (min + max) / 2;
        /** @type {number} */
        val = (high + low) / 2;
        /** @type {number} */
        arg = 1;
        if (0 == items.length) {
          /** @type {number} */
          x = b;
          /** @type {number} */
          r = val;
          /** @type {number} */
          scale = arg;
        }
        if (data.byteLength > offset) {
          len = data.getUint32(offset, true);
          offset += 4;
          /** @type {boolean} */
          Ob = !!(len & 1);
          passes = encode();
          self.MC.updateServerVersion(passes);
          console.log("Server version " + passes);
        }
        break;
      case 81:
        var level = data.getUint32(offset, true);
        offset = offset + 4;
        var bytes = data.getUint32(offset, true);
        offset = offset + 4;
        var firstBuf = data.getUint32(offset, true);
        offset = offset + 4;
        setTimeout(function() {
          var memory = {
            level : level,
            xp : bytes,
            xpNeeded : firstBuf
          };
          self.MC.updateUserXPInfo(memory);
          start(memory, null);
        }, 1200);
    }
  }
  /**
   * @param {DataView} dataView
   * @param {number} offset
   * @return {undefined}
   */
  function fn(dataView, offset) {
    /**
     * @return {?}
     */
    function parse() {
      /** @type {string} */
      var str = "";
      for (;;) {
        var b = dataView.getUint16(offset, true);
        offset += 2;
        if (0 == b) {
          break;
        }
        str += String.fromCharCode(b);
      }
      return str;
    }
    /**
     * @return {?}
     */
    function getString() {
      /** @type {string} */
      var str = "";
      for (;;) {
        var b = dataView.getUint8(offset++);
        if (0 == b) {
          break;
        }
        str += String.fromCharCode(b);
      }
      return str;
    }
    /** @type {number} */
    id = className = Date.now();
    if (!na) {
      /** @type {boolean} */
      na = true;
      $("#connecting").hide();
      handle();
      if (success) {
        success();
        /** @type {null} */
        success = null;
      }
    }
    /** @type {boolean} */
    lb = false;
    var j = dataView.getUint16(offset, true);
    offset += 2;
    /** @type {number} */
    var i = 0;
    for (;i < j;++i) {
      var node = nodes[dataView.getUint32(offset, true)];
      var data = nodes[dataView.getUint32(offset + 4, true)];
      offset += 8;
      if (node) {
        if (data) {
          data.S();
          data.l = data.x;
          data.m = data.y;
          data.k = data.size;
          data.B = node.x;
          data.C = node.y;
          data.e = data.size;
          /** @type {number} */
          data.L = className;
          setData(node, data);
        }
      }
    }
    /** @type {number} */
    i = 0;
    for (;;) {
      j = dataView.getUint32(offset, true);
      offset += 4;
      if (0 == j) {
        break;
      }
      ++i;
      var e;
      node = dataView.getInt32(offset, true);
      offset += 4;
      data = dataView.getInt32(offset, true);
      offset += 4;
      e = dataView.getInt16(offset, true);
      offset += 2;
      var o = dataView.getUint8(offset++);
      var color = dataView.getUint8(offset++);
      var lvl = dataView.getUint8(offset++);
      color = repeat(o << 16 | color << 8 | lvl);
      lvl = dataView.getUint8(offset++);
      /** @type {boolean} */
      var c = !!(lvl & 1);
      /** @type {boolean} */
      var h = !!(lvl & 16);
      /** @type {null} */
      var tmp = null;
      if (lvl & 2) {
        offset += 4 + dataView.getUint32(offset, true);
      }
      if (lvl & 4) {
        tmp = getString();
      }
      var url = parse();
      /** @type {null} */
      o = null;
      if (nodes.hasOwnProperty(j)) {
        o = nodes[j];
        o.K();
        o.l = o.x;
        o.m = o.y;
        o.k = o.size;
        o.color = color;
      } else {
        o = new Node(j, node, data, e, color, url);
        codeSegments.push(o);
        nodes[j] = o;
        o.va = node;
        o.wa = data;
      }
      /** @type isVirus {boolean} */
      o.c = c;
      /** @type {boolean} */
      o.h = h;
      o.B = node;
      o.C = data;
      o.e = e;
      /** @type {number} */
      o.L = className;
      o.U = lvl;
      if (tmp) {
        o.J = tmp;
      }
      if (url) {
        o.q(url);
      }
      if (-1 != result.indexOf(j)) {
        if (-1 == items.indexOf(o)) {
          items.push(o);
          if (1 == items.length) {
            x = o.x;
            r = o.y;
            flush();
            /** @type {string} */
            document.getElementById("overlays").style.display = "none";
            /** @type {Array} */
            a = [];
            /** @type {number} */
            pauseText = 0;
            col = items[0].color;
            /** @type {boolean} */
            Ea = true;
            /** @type {number} */
            left = Date.now();
            /** @type {number} */
            count = path = name = 0;
          }
        }
      }
    }
    node = dataView.getUint32(offset, true);
    offset += 4;
    /** @type {number} */
    i = 0;
    for (;i < node;i++) {
      j = dataView.getUint32(offset, true);
      offset += 4;
      o = nodes[j];
      if (null != o) {
        o.S();
      }
    }
    if (lb) {
      if (0 == items.length) {
        if (null == self.storageInfo) {
          self.createDefaultStorage();
        }
        /** @type {number} */
        right = Date.now();
        /** @type {boolean} */
        Ea = false;
        go();
        self.MC.deltaUpdateStats({
          games_played : 1,
          total_mass : ~~(closingAnimationTime / 100),
          turn_time : (right - left) / 1E3,
          cells_eaten : path
        });
      }
    }
  }
  /**
   * @return {undefined}
   */
  function handler() {
    if (addEventListener()) {
      /** @type {number} */
      var x = cx - width / 2;
      /** @type {number} */
      var y = cy - height / 2;
      if (!(64 > x * x + y * y)) {
        if (!(0.01 > Math.abs(index - idx) && 0.01 > Math.abs(closest - value))) {
          index = idx;
          closest = value;
          x = stringify(13);
          x.setUint8(0, 16);
          x.setInt32(1, idx, true);
          x.setInt32(5, value, true);
          x.setUint32(9, 0, true);
          log(x);
        }
      }
    }
  }
  /**
   * @return {undefined}
   */
  function handle() {
    if (addEventListener() && (na && null != chars)) {
      var data = stringify(1 + 2 * chars.length);
      data.setUint8(0, 0);
      /** @type {number} */
      var y = 0;
      for (;y < chars.length;++y) {
        data.setUint16(1 + 2 * y, chars.charCodeAt(y), true);
      }
      log(data);
      /** @type {null} */
      chars = null;
    }
  }
  /**
   * @return {?}
   */
  function addEventListener() {
    return null != ws && ws.readyState == ws.OPEN;
  }
  /**
   * @param {number} expectedNumberOfNonCommentArgs
   * @return {undefined}
   */
  function registerEvent(expectedNumberOfNonCommentArgs) {
    if (addEventListener()) {
      var data = stringify(1);
      data.setUint8(0, expectedNumberOfNonCommentArgs);
      log(data);
    }
  }
  /**
   * @return {undefined}
   */
  function onSuccess() {
    if (addEventListener() && null != bytes) {
      var data = stringify(1 + bytes.length);
      data.setUint8(0, 81);
      /** @type {number} */
      var i = 0;
      for (;i < bytes.length;++i) {
        data.setUint8(i + 1, bytes.charCodeAt(i));
      }
      log(data);
    }
  }
  /**
   * @return {undefined}
   */
  function update() {
    /** @type {number} */
    width = 1 * self.innerWidth;
    /** @type {number} */
    height = 1 * self.innerHeight;
    /** @type {number} */
    cv.width = canvas.width = width;
    /** @type {number} */
    cv.height = canvas.height = height;
    var child = $("#helloContainer");
    child.css("transform", "none");
    var reversed = child.height();
    /** @type {number} */
    var win = self.innerHeight;
    if (0 != reversed / 2 % 2) {
      reversed++;
      child.height(reversed);
    }
    if (reversed > win / 1.1) {
      child.css("transform", "translate(-50%, -50%) scale(" + win / reversed / 1.1 + ")");
    } else {
      child.css("transform", "translate(-50%, -50%)");
    }
    render();
  }
  /**
   * @return {?}
   */
  function requestAnimationFrame() {
    var setSize;
    /** @type {number} */
    setSize = 1 * Math.max(height / 1080, width / 1920);
    return setSize *= ratio;
  }
  /**
   * @return {undefined}
   */
  function frame() {
    if (0 != items.length) {
      /** @type {number} */
      var offset = 0;
      /** @type {number} */
      var i = 0;
      for (;i < items.length;i++) {
        offset += items[i].size;
      }
      /** @type {number} */
      offset = Math.pow(Math.min(64 / offset, 1), 0.4) * requestAnimationFrame();
      /** @type {number} */
      scale = (9 * scale + offset) / 10;
    }
  }
  /**
   * @return {undefined}
   */
  function render() {
    var size;
    /** @type {number} */
    var imageWidth = Date.now();
    ++Ac;
    /** @type {number} */
    className = imageWidth;
    if (0 < items.length) {
      frame();
      /** @type {number} */
      var a = size = 0;
      /** @type {number} */
      var i = 0;
      for (;i < items.length;i++) {
        items[i].K();
        size += items[i].x / items.length;
        a += items[i].y / items.length;
      }
      /** @type {number} */
      b = size;
      /** @type {number} */
      val = a;
      arg = scale;
      /** @type {number} */
      x = (x + size) / 2;
      /** @type {number} */
      r = (r + a) / 2;
    } else {
      /** @type {number} */
      x = (29 * x + b) / 30;
      /** @type {number} */
      r = (29 * r + val) / 30;
      /** @type {number} */
      scale = (9 * scale + arg * requestAnimationFrame()) / 10;
    }
    createObjects();
    preventDefault();
    if (!dest) {
      ctx.clearRect(0, 0, width, height);
    }
    if (dest) {
      /** @type {string} */
      ctx.fillStyle = color ? "#111111" : "#F2FBFF";
      /** @type {number} */
      ctx.globalAlpha = 0.05;
      ctx.fillRect(0, 0, width, height);
      /** @type {number} */
      ctx.globalAlpha = 1;
    } else {
      redraw();
    }
    codeSegments.sort(function(a, b) {
      return a.size == b.size ? a.id - b.id : a.size - b.size;
    });
    window.addon.redraw(items, codeSegments, ctx, this);

    ctx.save();
    ctx.translate(width / 2, height / 2);
    ctx.scale(scale, scale);
    ctx.translate(-x, -r);
    /** @type {number} */
    i = 0;
    for (;i < plugins.length;i++) {
      plugins[i].p(ctx);
    }
    /** @type {number} */
    i = 0;
    for (;i < codeSegments.length;i++) {
      codeSegments[i].p(ctx);
      window.addon.drawMass(codeSegments[i]);
    }
    if (jb) {
      /** @type {number} */
      xr = (3 * xr + chunk) / 4;
      /** @type {number} */
      tmp = (3 * tmp + cur) / 4;
      ctx.save();
      /** @type {string} */
      ctx.strokeStyle = "#FFAAAA";
      /** @type {number} */
      ctx.lineWidth = 10;
      /** @type {string} */
      ctx.lineCap = "round";
      /** @type {string} */
      ctx.lineJoin = "round";
      /** @type {number} */
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      /** @type {number} */
      i = 0;
      for (;i < items.length;i++) {
        ctx.moveTo(items[i].x, items[i].y);
        ctx.lineTo(xr, tmp);
      }
      ctx.stroke();
      ctx.restore();
    }
    ctx.restore();
    if (img) {
      if (img.width) {
        ctx.drawImage(img, width - img.width - 10, 10);
      }
    }
    /** @type {number} */
    closingAnimationTime = Math.max(closingAnimationTime, pick());
    if (0 != closingAnimationTime) {
      if (null == s) {
        s = new t(24, "#FFFFFF");
      }
      s.r(test("score") + ": " + ~~(closingAnimationTime / 100));
      a = s.D();
      size = a.width;
      /** @type {number} */
      ctx.globalAlpha = 0.2;
      /** @type {string} */
      ctx.fillStyle = "#000000";
      ctx.fillRect(10, height - 10 - 24 - 10, size + 10, 34);
      /** @type {number} */
      ctx.globalAlpha = 1;
      ctx.drawImage(a, 15, height - 10 - 24 - 5);
    }
    drawBackground();
    /** @type {number} */
    imageWidth = Date.now() - imageWidth;
    if (imageWidth > 1E3 / 60) {
      resolutionScale -= 0.01;
    } else {
      if (imageWidth < 1E3 / 65) {
        resolutionScale += 0.01;
      }
    }
    if (0.4 > resolutionScale) {
      /** @type {number} */
      resolutionScale = 0.4;
    }
    if (1 < resolutionScale) {
      /** @type {number} */
      resolutionScale = 1;
    }
    /** @type {number} */
    imageWidth = className - cond;
    if (!addEventListener() || (to || from)) {
      alpha += imageWidth / 2E3;
      if (1 < alpha) {
        /** @type {number} */
        alpha = 1;
      }
    } else {
      alpha -= imageWidth / 300;
      if (0 > alpha) {
        /** @type {number} */
        alpha = 0;
      }
    }
    if (0 < alpha) {
      /** @type {string} */
      ctx.fillStyle = "#000000";
      if (Yb) {
        ctx.globalAlpha = alpha;
        ctx.fillRect(0, 0, width, height);
        if (image.complete) {
          if (image.width) {
            if (image.width / image.height < width / height) {
              imageWidth = width;
              /** @type {number} */
              size = image.height * width / image.width;
            } else {
              /** @type {number} */
              imageWidth = image.width * height / image.height;
              size = height;
            }
            ctx.drawImage(image, (width - imageWidth) / 2, (height - size) / 2, imageWidth, size);
            /** @type {number} */
            ctx.globalAlpha = 0.5 * alpha;
            ctx.fillRect(0, 0, width, height);
          }
        }
      } else {
        /** @type {number} */
        ctx.globalAlpha = 0.5 * alpha;
        ctx.fillRect(0, 0, width, height);
      }
      /** @type {number} */
      ctx.globalAlpha = 1;
    } else {
      /** @type {boolean} */
      Yb = false;
    }
    /** @type {number} */
    cond = className;
  }
  /**
   * @return {undefined}
   */
  function redraw() {
    /** @type {string} */
    ctx.fillStyle = color ? "#111111" : "#F2FBFF";
    ctx.fillRect(0, 0, width, height);
    ctx.save();
    /** @type {string} */
    ctx.strokeStyle = color ? "#AAAAAA" : "#000000";
    /** @type {number} */
    ctx.globalAlpha = 0.2 * scale;
    /** @type {number} */
    var w2 = width / scale;
    /** @type {number} */
    var y = height / scale;
    /** @type {number} */
    var y2 = (-x + w2 / 2) % 50;
    for (;y2 < w2;y2 += 50) {
      ctx.beginPath();
      ctx.moveTo(y2 * scale - 0.5, 0);
      ctx.lineTo(y2 * scale - 0.5, y * scale);
      ctx.stroke();
    }
    /** @type {number} */
    y2 = (-r + y / 2) % 50;
    for (;y2 < y;y2 += 50) {
      ctx.beginPath();
      ctx.moveTo(0, y2 * scale - 0.5);
      ctx.lineTo(w2 * scale, y2 * scale - 0.5);
      ctx.stroke();
    }
    ctx.restore();
  }
  /**
   * @return {undefined}
   */
  function drawBackground() {
    if (options && copy.width) {
      /** @type {number} */
      var dim = width / 5;
      ctx.drawImage(copy, 5, 5, dim, dim);
    }
  }
  /**
   * @return {?}
   */
  function pick() {
    /** @type {number} */
    var result = 0;
    /** @type {number} */
    var i = 0;
    for (;i < items.length;i++) {
      result += items[i].e * items[i].e;
    }
    return result;
  }
  /**
   * @return {undefined}
   */
  function create() {
    /** @type {null} */
    img = null;
    if (null != angles || 0 != users.length) {
      if (null != angles || error) {
        /** @type {Element} */
        img = document.createElement("canvas");
        var ctx = img.getContext("2d");
        /** @type {number} */
        var i = 60;
        /** @type {number} */
        i = null == angles ? i + 24 * users.length : i + 180;
        /** @type {number} */
        var t = Math.min(200, 0.3 * width) / 200;
        /** @type {number} */
        img.width = 200 * t;
        /** @type {number} */
        img.height = i * t;
        ctx.scale(t, t);
        /** @type {number} */
        ctx.globalAlpha = 0.4;
        /** @type {string} */
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, 200, i);
        /** @type {number} */
        ctx.globalAlpha = 1;
        /** @type {string} */
        ctx.fillStyle = "#FFFFFF";
        /** @type {null} */
        t = null;
        t = test("leaderboard");
        /** @type {string} */
        ctx.font = "30px Ubuntu";
        ctx.fillText(t, 100 - ctx.measureText(t).width / 2, 40);
        if (null == angles) {
          /** @type {string} */
          ctx.font = "20px Ubuntu";
          /** @type {number} */
          i = 0;
          for (;i < users.length;++i) {
            t = users[i].name || test("unnamed_cell");
            if (!error) {
              t = test("unnamed_cell");
            }
            if (-1 != result.indexOf(users[i].id)) {
              if (items[0].name) {
                t = items[0].name;
              }
              /** @type {string} */
              ctx.fillStyle = "#FFAAAA";
            } else {
              /** @type {string} */
              ctx.fillStyle = "#FFFFFF";
            }
            /** @type {string} */
            t = i + 1 + ". " + t;
            ctx.fillText(t, 100 - ctx.measureText(t).width / 2, 70 + 24 * i);
          }
        } else {
          /** @type {number} */
          i = t = 0;
          for (;i < angles.length;++i) {
            /** @type {number} */
            var t1 = t + angles[i] * Math.PI * 2;
            ctx.fillStyle = cs[i + 1];
            ctx.beginPath();
            ctx.moveTo(100, 140);
            ctx.arc(100, 140, 80, t, t1, false);
            ctx.fill();
            /** @type {number} */
            t = t1;
          }
        }
      }
    }
  }
  /**
   * @param {string} f
   * @return {?}
   */
  function tryIt(f) {
    if (null == f || 0 == f.length) {
      return null;
    }
    if ("%" == f[0]) {
      if (!self.MC || !self.MC.getSkinInfo) {
        return null;
      }
      f = self.MC.getSkinInfo("skin_" + f.slice(1));
      if (null == f) {
        return null;
      }
      /** @type {string} */
      f = (+f.color).toString(16);
      for (;6 > f.length;) {
        /** @type {string} */
        f = "0" + f;
      }
      return "#" + f;
    }
    return null;
  }
  /**
   * @param {string} x
   * @return {?}
   */
  function loop(x) {
    if (null == x || 0 == x.length) {
      return null;
    }
    if (!actual.hasOwnProperty(x)) {
      /** @type {Image} */
      var obj = new Image;
      if (":" == x[0]) {
        obj.src = x.slice(1);
      } else {
        if ("%" == x[0]) {
          if (!self.MC || !self.MC.getSkinInfo) {
            return null;
          }
          var request = self.MC.getSkinInfo("skin_" + x.slice(1));
          if (null == request) {
            return null;
          }
          /** @type {string} */
          obj.src = self.ASSETS_ROOT + "skins/premium/" + request.url;
        }
      }
      /** @type {Image} */
      actual[x] = obj;
    }
    return 0 != actual[x].width && actual[x].complete ? actual[x] : null;
  }
  /**
   * @param {?} opt_vars
   * @param {number} x
   * @param {number} y
   * @param {number} d
   * @param {number} b
   * @return {undefined}
   */
  function Player(opt_vars, x, y, d, b) {
    this.Q = opt_vars;
    /** @type {number} */
    this.x = x;
    /** @type {number} */
    this.y = y;
    /** @type {number} */
    this.d = d;
    /** @type {number} */
    this.b = b;
  }
  /**
   * @param {number} id
   * @param {number} xp
   * @param {number} yp
   * @param {number} size
   * @param {number} value
   * @param {number} tagName
   * @return {undefined}
   */
  function Node(id, xp, yp, size, value, tagName) {
    /** @type {number} */
    this.id = id;
    this.l = this.x = xp;
    this.m = this.y = yp;
    this.k = this.size = size;
    /** @type {number} */
    this.color = value;
    /** @type {Array} */
    this.a = [];
    this.R();
    this.q(tagName);
  }
  /**
   * @param {?} str
   * @return {?}
   */
  function repeat(str) {
    str = str.toString(16);
    for (;6 > str.length;) {
      /** @type {string} */
      str = "0" + str;
    }
    return "#" + str;
  }
  /**
   * @param {number} n
   * @param {number} a
   * @param {?} off
   * @param {number} o
   * @return {undefined}
   */
  function t(n, a, off, o) {
    if (n) {
      /** @type {number} */
      this.n = n;
    }
    if (a) {
      /** @type {number} */
      this.N = a;
    }
    /** @type {boolean} */
    this.P = !!off;
    if (o) {
      /** @type {number} */
      this.o = o;
    }
  }
  /**
   * @param {Array} arr
   * @return {undefined}
   */
  function shuffle(arr) {
    var total = arr.length;
    var tmp1;
    var rnd;
    for (;0 < total;) {
      /** @type {number} */
      rnd = Math.floor(Math.random() * total);
      total--;
      tmp1 = arr[total];
      arr[total] = arr[rnd];
      arr[rnd] = tmp1;
    }
  }
  /**
   * @return {undefined}
   */
  function compassResult() {
    data = filtered;
  }
  /**
   * @param {string} opts
   * @return {undefined}
   */
  function d(opts) {
    /** @type {string} */
    data.context = "google" == opts ? "google" : "facebook";
    done();
  }
  /**
   * @return {undefined}
   */
  function done() {
    /** @type {string} */
    self.localStorage[i] = JSON.stringify(data);
    /** @type {*} */
    data = JSON.parse(self.localStorage[i]);
    /** @type {*} */
    self.storageInfo = data;
    if ("google" == data.context) {
      $("#gPlusShare").show();
      $("#fbShare").hide();
    } else {
      $("#gPlusShare").hide();
      $("#fbShare").show();
    }
  }
  /**
   * @param {Object} data
   * @return {undefined}
   */
  function show(data) {
    $("#helloContainer").attr("data-has-account-data");
    $("#helloContainer").attr("data-has-account-data", "1");
    $("#helloContainer").attr("data-logged-in", "1");
    $(".agario-profile-panel .progress-bar-star").text(data.level);
    $(".agario-exp-bar .progress-bar-text").text(data.xp + "/" + data.xpNeeded + " XP");
    $(".agario-exp-bar .progress-bar").css("width", (88 * data.xp / data.xpNeeded).toFixed(2) + "%");
    $(".agario-profile-name").text(data.name);
    $(".agario-profile-picture").attr("src", data.picture);
    $("#instructions").show();
  }
  /**
   * @param {?} options
   * @param {Function} lab
   * @return {undefined}
   */
  function start(options, lab) {
    /** @type {boolean} */
    var xpgen = "1" == $("#helloContainer").attr("data-has-account-data");
    $("#helloContainer").attr("data-has-account-data", "1");
    data.userInfo.xp = options.xp;
    data.userInfo.xpNeeded = options.xpNeeded;
    data.userInfo.level = options.level;
    done();
    if (xpgen) {
      /** @type {number} */
      var val = +$(".agario-exp-bar .progress-bar-text").first().text().split("/")[0];
      /** @type {number} */
      xpgen = +$(".agario-exp-bar .progress-bar-text").first().text().split("/")[1].split(" ")[0];
      var level = $(".agario-profile-panel .progress-bar-star").first().text();
      if (level != options.level) {
        start({
          xp : xpgen,
          xpNeeded : xpgen,
          level : level
        }, function() {
          $(".agario-profile-panel .progress-bar-star").text(options.level);
          $(".agario-exp-bar .progress-bar").css("width", "100%");
          $(".progress-bar-star").addClass("animated tada").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
            $(".progress-bar-star").removeClass("animated tada");
          });
          setTimeout(function() {
            $(".agario-exp-bar .progress-bar-text").text(options.xpNeeded + "/" + options.xpNeeded + " XP");
            start({
              xp : 0,
              xpNeeded : options.xpNeeded,
              level : options.level
            }, function() {
              start(options, null);
            });
          }, 1E3);
        });
      } else {
        /** @type {number} */
        var f = Date.now();
        /**
         * @return {undefined}
         */
        var update = function() {
          var t;
          /** @type {number} */
          t = (Date.now() - f) / 1E3;
          /** @type {number} */
          t = 0 > t ? 0 : 1 < t ? 1 : t;
          /** @type {number} */
          t = t * t * (3 - 2 * t);
          $(".agario-exp-bar .progress-bar-text").text(~~(val + (options.xp - val) * t) + "/" + options.xpNeeded + " XP");
          $(".agario-exp-bar .progress-bar").css("width", (88 * (val + (options.xp - val) * t) / options.xpNeeded).toFixed(2) + "%");
          if (lab) {
            lab();
          }
          if (1 > t) {
            self.requestAnimationFrame(update);
          }
        };
        self.requestAnimationFrame(update);
      }
    } else {
      $(".agario-profile-panel .progress-bar-star").text(options.level);
      $(".agario-exp-bar .progress-bar-text").text(options.xp + "/" + options.xpNeeded + " XP");
      $(".agario-exp-bar .progress-bar").css("width", (88 * options.xp / options.xpNeeded).toFixed(2) + "%");
    }
  }
  /**
   * @return {undefined}
   */
  function renderPage() {
    if ("none" == $("#settings").css("display")) {
      if ("none" == $("#socialLoginContainer").css("display")) {
        $("#instructions").show();
      }
    }
  }
  /**
   * @param {Object} response
   * @return {undefined}
   */
  function check(response) {
    if ("connected" == response.status) {
      var value = response.authResponse.accessToken;
      if (null == value || ("undefined" == value || "" == value)) {
        if (3 > cc) {
          cc++;
          self.facebookRelogin();
        }
        self.logout();
      } else {
        self.MC.doLoginWithFB(value);
        self.FB.api("/me/picture?width=180&height=180", function(messageEvent) {
          data.userInfo.picture = messageEvent.data.url;
          self.updateStorage();
          $(".agario-profile-picture").attr("src", messageEvent.data.url);
        });
        $("#helloContainer").attr("data-logged-in", "1");
        /** @type {string} */
        data.context = "facebook";
        /** @type {string} */
        data.loginIntent = "1";
        self.updateStorage();
        if (null != bytes) {
          self.checkSocialAPIToken(response);
        } else {
          self.getSocialAPIToken("facebookLogin", value);
        }
      }
    }
  }
  /**
   * @param {string} param
   * @return {undefined}
   */
  function remove(param) {
    get(":party");
    $("#helloContainer").attr("data-party-state", "4");
    /** @type {string} */
    param = decodeURIComponent(param).replace(/.*#/gim, "");
    callback("#" + self.encodeURIComponent(param));
    $.ajax(url + "getToken", {
      /**
       * @return {undefined}
       */
      error : function() {
        $("#helloContainer").attr("data-party-state", "6");
      },
      /**
       * @param {string} status
       * @return {undefined}
       */
      success : function(status) {
        status = status.split("\n");
        $(".partyToken").val("agar.io/#" + self.encodeURIComponent(param));
        $("#helloContainer").attr("data-party-state", "5");
        get(":party");
        open("ws://" + status[0], param);
      },
      dataType : "text",
      method : "POST",
      cache : false,
      crossDomain : true,
      data : param
    });
  }
  /**
   * @param {string} href
   * @return {undefined}
   */
  function callback(href) {
    if (self.history) {
      if (self.history.replaceState) {
        self.history.replaceState({}, self.document.title, href);
      }
    }
  }
  /**
   * @param {Element} o
   * @param {Object} node
   * @return {undefined}
   */
  function setData(o, node) {
    /** @type {boolean} */
    var b = -1 != result.indexOf(o.id);
    /** @type {boolean} */
    var d = -1 != result.indexOf(node.id);
    /** @type {boolean} */
    var e = 30 > node.size;
    if (b) {
      if (e) {
        ++pauseText;
      }
    }
    if (!e) {
      if (!!b) {
        if (!d) {
          if (!(node.U & 32)) {
            ++path;
          }
        }
      }
    }
  }
  /**
   * @param {number} i
   * @return {?}
   */
  function fill(i) {
    /** @type {number} */
    i = ~~i;
    /** @type {string} */
    var lineNumber = (i % 60).toString();
    /** @type {string} */
    i = (~~(i / 60)).toString();
    if (2 > lineNumber.length) {
      /** @type {string} */
      lineNumber = "0" + lineNumber;
    }
    return i + ":" + lineNumber;
  }
  /**
   * @return {?}
   */
  function endsWith() {
    if (null == users) {
      return 0;
    }
    /** @type {number} */
    var i = 0;
    for (;i < users.length;++i) {
      if (-1 != result.indexOf(users[i].id)) {
        return i + 1;
      }
    }
    return 0;
  }
  /**
   * @return {undefined}
   */
  function DrawPolyline() {
    $(".stats-food-eaten").text(pauseText);
    $(".stats-time-alive").text(fill((right - left) / 1E3));
    $(".stats-leaderboard-time").text(fill(name));
    $(".stats-highest-mass").text(~~(closingAnimationTime / 100));
    $(".stats-cells-eaten").text(path);
    $(".stats-top-position").text(0 == count ? ":(" : count);
    /** @type {(HTMLElement|null)} */
    var h = document.getElementById("statsGraph");
    if (h) {
      var ctx = h.getContext("2d");
      var width = h.width;
      h = h.height;
      ctx.clearRect(0, 0, width, h);
      if (2 < a.length) {
        /** @type {number} */
        var n = 200;
        /** @type {number} */
        var i = 0;
        for (;i < a.length;i++) {
          /** @type {number} */
          n = Math.max(a[i], n);
        }
        /** @type {number} */
        ctx.lineWidth = 3;
        /** @type {string} */
        ctx.lineCap = "round";
        /** @type {string} */
        ctx.lineJoin = "round";
        ctx.strokeStyle = col;
        ctx.fillStyle = col;
        ctx.beginPath();
        ctx.moveTo(0, h - a[0] / n * (h - 10) + 10);
        /** @type {number} */
        i = 1;
        for (;i < a.length;i += Math.max(~~(a.length / width), 1)) {
          /** @type {number} */
          var x = i / (a.length - 1) * width;
          /** @type {Array} */
          var r = [];
          /** @type {number} */
          var offset = -20;
          for (;20 >= offset;++offset) {
            if (!(0 > i + offset)) {
              if (!(i + offset >= a.length)) {
                r.push(a[i + offset]);
              }
            }
          }
          /** @type {number} */
          r = r.reduce(function(far, near) {
            return far + near;
          }) / r.length / n;
          ctx.lineTo(x, h - r * (h - 10) + 10);
        }
        ctx.stroke();
        /** @type {number} */
        ctx.globalAlpha = 0.5;
        ctx.lineTo(width, h);
        ctx.lineTo(0, h);
        ctx.fill();
        /** @type {number} */
        ctx.globalAlpha = 1;
      }
    }
  }
  /**
   * @return {undefined}
   */
  function go() {
    if (!to && !from) {
      if (connected) {
        next(user.ab);
        DrawPolyline();
        /** @type {boolean} */
        from = true;
        $("#overlays").fadeIn(3E3);
        $("#stats").show();
        var which = stop("g_plus_share_stats");
        self.fillSocialValues(which, "gPlusShare");
      } else {
        send(3E3);
      }
    }
  }
  /**
   * @param {string} gotoEnd
   * @return {?}
   */
  function stop(gotoEnd) {
    var uHostName = $(".stats-time-alive").text();
    return self.parseString(gotoEnd, "%@", [uHostName.split(":")[0], uHostName.split(":")[1], $(".stats-highest-mass").text()]);
  }
  /**
   * @return {undefined}
   */
  function onMouseMove() {
    self.open("https://plus.google.com/share?url=www.agar.io&hl=en-US", "Agar.io", "width=484,height=580,menubar=no,toolbar=no,resizable=yes,scrollbars=no,left=" + (self.screenX + self.innerWidth / 2 - 242) + ",top=" + (self.innerHeight - 580) / 2);
  }
  var results = {};
  (function() {
    /** @type {string} */
    var params = self.location.search;
    if ("?" == params.charAt(0)) {
      /** @type {string} */
      params = params.slice(1);
    }
    /** @type {Array.<string>} */
    params = params.split("&");
    /** @type {number} */
    var i = 0;
    for (;i < params.length;i++) {
      /** @type {Array.<string>} */
      var iterable = params[i].split("=");
      /** @type {string} */
      results[iterable[0]] = iterable[1];
    }
  })();
  if (!("fb" in results)) {
    if (!("miniclip" in results)) {
      if (!("http:" == self.location.protocol)) {
        /** @type {string} */
        self.location.href = "http:" + self.location.href.substring(self.location.protocol.length);
      }
    }
  }
  /**
   * @return {undefined}
   */
  self.MC = function() {
  };
  if (void 0 != self.EnvConfig) {
    var item = self.EnvConfig;
    self.EnvConfig = item;
  }
  if (!self.agarioNoInit) {
    /** @type {string} */
    var base = self.location.protocol;
    /** @type {boolean} */
    var ssl = "https:" == base;
    if (results.master) {
      item.master_url = results.master;
    }
    /** @type {string} */
    var url = base + "//" + item.master_url + "/";
    /** @type {string} */
    var userAgent = self.navigator.userAgent;
    if (-1 != userAgent.indexOf("Android")) {
      if (self.ga) {
        self.ga("send", "event", "MobileRedirect", "PlayStore");
      }
      setTimeout(function() {
        /** @type {string} */
        self.location.href = "https://play.google.com/store/apps/details?id=com.miniclip.agar.io";
      }, 1E3);
    } else {
      if (-1 != userAgent.indexOf("iPhone") || (-1 != userAgent.indexOf("iPad") || -1 != userAgent.indexOf("iPod"))) {
        if (self.ga) {
          self.ga("send", "event", "MobileRedirect", "AppStore");
        }
        setTimeout(function() {
          /** @type {string} */
          self.location.href = "https://itunes.apple.com/app/agar.io/id995999703?mt=8&at=1l3vajp";
        }, 1E3);
      } else {
        var $scope = {};
        self.agarApp = $scope;
        var cv;
        var ctx;
        var canvas;
        var width;
        var height;
        /** @type {null} */
        var c = null;
        /** @type {null} */
        var ws = null;
        /** @type {number} */
        var x = 0;
        /** @type {number} */
        var r = 0;
        /** @type {Array} */
        var result = [];
        /** @type {Array} */
        var items = [];
        var nodes = {};
        /** @type {Array} */
        var codeSegments = [];
        /** @type {Array} */
        var plugins = [];
        /** @type {Array} */
        var users = [];
        /** @type {number} */
        var cx = 0;
        /** @type {number} */
        var cy = 0;
        /** @type {number} */
        var idx = -1;
        /** @type {number} */
        var value = -1;
        /** @type {number} */
        var Ac = 0;
        /** @type {number} */
        var className = 0;
        /** @type {number} */
        var cond = 0;
        /** @type {null} */
        var chars = null;
        /** @type {number} */
        var max = 0;
        /** @type {number} */
        var low = 0;
        /** @type {number} */
        var min = 1E4;
        /** @type {number} */
        var high = 1E4;
        /** @type {number} */
        var scale = 1;
        /** @type {null} */
        var fx = null;
        /** @type {boolean} */
        var $timeout = true;
        /** @type {boolean} */
        var error = true;
        /** @type {boolean} */
        var doneResults = false;
        /** @type {boolean} */
        var lb = false;
        /** @type {number} */
        var closingAnimationTime = 0;
        /** @type {boolean} */
        var color = false;
        /** @type {boolean} */
        var text = false;
        /** @type {number} */
        var b = x = ~~((max + min) / 2);
        /** @type {number} */
        var val = r = ~~((low + high) / 2);
        /** @type {number} */
        var arg = 1;
        /** @type {string} */
        var reply = "";
        /** @type {null} */
        var angles = null;
        /** @type {boolean} */
        var Ua = false;
        /** @type {boolean} */
        var jb = false;
        /** @type {number} */
        var chunk = 0;
        /** @type {number} */
        var cur = 0;
        /** @type {number} */
        var xr = 0;
        /** @type {number} */
        var tmp = 0;
        /** @type {Array} */
        var cs = ["#333333", "#FF3333", "#33FF33", "#3333FF"];
        /** @type {boolean} */
        var dest = false;
        /** @type {boolean} */
        var na = false;
        /** @type {number} */
        var id = 0;
        /** @type {null} */
        var bytes = null;
        /** @type {number} */
        var ratio = 1;
        /** @type {number} */
        var alpha = 1;
        /** @type {boolean} */
        var to = false;
        /** @type {number} */
        var last = 0;
        /** @type {boolean} */
        var Yb = true;
        /** @type {null} */
        var passes = null;
        /** @type {boolean} */
        var Ob = false;
        /** @type {Image} */
        var image = new Image;
        /** @type {string} */
        image.src = "/img/background.png";
        /** @type {boolean} */
        var options = "ontouchstart" in self && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(self.navigator.userAgent);
        /** @type {Image} */
        var copy = new Image;
        /** @type {string} */
        copy.src = "/img/split.png";
        /** @type {Element} */
        var test_canvas = document.createElement("canvas");
        if ("undefined" == typeof console || ("undefined" == typeof DataView || ("undefined" == typeof WebSocket || (null == test_canvas || (null == test_canvas.getContext || null == self.localStorage))))) {
          alert("You browser does not support this game, we recommend you to use Firefox to play this");
        } else {
          /** @type {null} */
          var old = null;
          /**
           * @param {Function} str
           * @return {undefined}
           */
          self.setNick = function(str) {
            if (self.ga) {
              self.ga("send", "event", "Nick", str.toLowerCase());
            }
            onchange();
            /** @type {Function} */
            chars = str;
            handle();
            /** @type {number} */
            closingAnimationTime = 0;
          };
          /** @type {function ((Object|string)): undefined} */
          self.setRegion = reset;
          /** @type {boolean} */
          var isGoal = true;
          /**
           * @param {boolean} _$timeout_
           * @return {undefined}
           */
          self.setSkins = function(_$timeout_) {
            /** @type {boolean} */
            $timeout = _$timeout_;
          };
          /**
           * @param {string} err
           * @return {undefined}
           */
          self.setNames = function(err) {
            /** @type {string} */
            error = err;
          };
          /**
           * @param {boolean} newColor
           * @return {undefined}
           */
          self.setDarkTheme = function(newColor) {
            /** @type {boolean} */
            color = newColor;
          };
          /**
           * @param {boolean} data
           * @return {undefined}
           */
          self.setColors = function(data) {
            /** @type {boolean} */
            doneResults = data;
          };
          /**
           * @param {boolean} textAlt
           * @return {undefined}
           */
          self.setShowMass = function(textAlt) {
            /** @type {boolean} */
            text = textAlt;
          };
          /**
           * @return {undefined}
           */
          self.spectate = function() {
            /** @type {null} */
            chars = null;
            registerEvent(1);
            onchange();
          };
          /**
           * @param {string} id
           * @return {undefined}
           */
          self.setGameMode = function(id) {
            if (id != reply) {
              if (":party" == reply) {
                $("#helloContainer").attr("data-party-state", "0");
              }
              get(id);
              if (":party" != id) {
                animate();
              }
            }
          };
          /**
           * @param {boolean} vec
           * @return {undefined}
           */
          self.setAcid = function(vec) {
            /** @type {boolean} */
            dest = vec;
          };
          $.get(base + "//gc.agar.io", function(prop) {
            var name = prop.split(" ");
            prop = name[0];
            name = name[1] || "";
            if (-1 == ["UA"].indexOf(prop)) {
              numbers.push("ussr");
            }
            if (input.hasOwnProperty(prop)) {
              if ("string" == typeof input[prop]) {
                if (!fx) {
                  reset(input[prop]);
                }
              } else {
                if (input[prop].hasOwnProperty(name)) {
                  if (!fx) {
                    reset(input[prop][name]);
                  }
                }
              }
            }
          }, "text");
          /**
           * @param {string} key
           * @return {?}
           */
          var getURL = function(key) {
            return key in results ? +results[key] : null != self.localStorage ? (null == self.localStorage[key] && (self.localStorage[key] = 0 + ~~(100 * Math.random())), +self.localStorage[key]) : 0;
          };
          /** @type {boolean} */
          var debugads = "debugads" in results;
          var wellKnownWords = {};
          /** @type {boolean} */
          var eb = true;
          /** @type {number} */
          var maxWait = 0;
          /** @type {boolean} */
          var Ib = false;
          var user = {
            aa : [],
            ab : [],
            ac : []
          };
          self.adSlots = user;
          /** @type {function (string): ?} */
          self.getABGroup = cell;
          /** @type {function (Array): undefined} */
          self.refreshAd = next;
          var obj = {
            w : false
          };
          self.agarAdModule = obj;
          /** @type {boolean} */
          var testName = false;
          /** @type {null} */
          var dir = null;
          var store = function(opt_attributes) {
            /**
             * @param {Object} data
             * @param {?} opt_attributes
             * @param {string} deepDataAndEvents
             * @return {?}
             */
            opt_attributes.defineSlot = function(data, opt_attributes, deepDataAndEvents) {
              var jQuery = self.googletag;
              return{
                type : "dfpads",
                data : jQuery.defineSlot(data, opt_attributes, deepDataAndEvents).addService(jQuery.pubads())
              };
            };
            return opt_attributes;
          }({});
          self.googleAdsModule = store;
          /**
           * @param {Array} data
           * @return {undefined}
           */
          var emit = function(data) {
            /** @type {number} */
            var i = 0;
            for (;i < data.length;i++) {
              if (!("type" in data[i] && "rubicon" != data[i].type)) {
                if (debugads) {
                  console.log("Rubicon: destroying:" + data[i].data.id, data[i]);
                }
                res.Y(data[i].data.id);
              }
            }
          };
          var res = function(item) {
            /**
             * @param {string} el
             * @param {string} arg
             * @param {Object} data
             * @return {undefined}
             */
            item.F = function(el, arg, data) {
              /** @type {string} */
              var e = "https:" == document.location.protocol ? "https:" : "http:";
              arg = arg.split("x");
              /** @type {string} */
              var id = el + "-fif";
              /** @type {Element} */
              var frame = document.createElement("iframe");
              /** @type {string} */
              frame.style.cssText = "width: " + arg[0] + "px; height: " + arg[1] + "px; border: 0; margin: 0; padding: 0; overflow: hidden;";
              frame.setAttribute("scrolling", "no");
              /** @type {string} */
              frame.src = "about:blank";
              /** @type {string} */
              frame.id = id;
              document.getElementById(el).appendChild(frame);
              el = frame.contentWindow ? frame.contentWindow.document : frame.contentDocument.document;
              el.open().write("<html>\n<head>\n<script type='text/javascript'>inDapIF=true;\n\x3c/script>\n</head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Smart Tag --\x3e\n<script type='text/javascript'>\nrp_account = '" + data.acct + "';\nrp_site = '" + data.site + "';\nrp_zonesize  = '" + data.zone + "-" + data.size + "';\nrp_adtype = 'js';\nrp_kw = '" + data.kw + "';\nrp_visitor = " + data.visitor + ";\nrp_inventory = " + data.inventory + ";\n\x3c/script>\n<script type='text/javascript' src= " +
              e + "//ads.rubiconproject.com/ad/" + data.acct + '.js">\x3c/script>\n</body>\n</html>');
              el.close();
            };
            /**
             * @param {Object} data
             * @param {number} opt_attributes
             * @param {number} deepDataAndEvents
             * @return {?}
             */
            item.defineSlot = function(data, opt_attributes, deepDataAndEvents) {
              opt_attributes = {
                type : "rubicon",
                data : {
                  id : deepDataAndEvents,
                  size : opt_attributes
                }
              };
              data = $.extend({}, data);
              data.kw = self.rpx_params.kw;
              /** @type {string} */
              data.visitor = JSON.stringify(self.rpx_params.visitor);
              /** @type {string} */
              data.inventory = JSON.stringify(self.rpx_params.inventory);
              /** @type {Object} */
              opt_attributes.data.json = data;
              return opt_attributes;
            };
            /**
             * @param {string} p
             * @param {string} until
             * @param {Object} inplace
             * @return {undefined}
             */
            item.ya = function(p, until, inplace) {
              /** @type {string} */
              var val = p + "-fif";
              var matches = $("#" + val);
              if (null != matches) {
                matches.remove();
              } else {
                console.log("couldn't find element", matches, val);
              }
              this.F(p, until, inplace);
            };
            /**
             * @param {string} e
             * @return {undefined}
             */
            item.Y = function(e) {
              e += "-fif";
              var matches = $("#" + e);
              if (null != matches) {
                matches.remove();
              } else {
                console.log("couldn't find element", matches, e);
              }
            };
            /**
             * @param {string} failures
             * @param {string} until
             * @param {Object} inplace
             * @return {undefined}
             */
            item.za = function(failures, until, inplace) {
              this.F(failures, until, inplace);
            };
            return item;
          }({});
          self.rubiconAds = res;
          var input = {
            AF : "JP-Tokyo",
            AX : "EU-London",
            AL : "EU-London",
            DZ : "EU-London",
            AS : "SG-Singapore",
            AD : "EU-London",
            AO : "EU-London",
            AI : "US-Atlanta",
            AG : "US-Atlanta",
            AR : "BR-Brazil",
            AM : "JP-Tokyo",
            AW : "US-Atlanta",
            AU : "SG-Singapore",
            AT : "EU-London",
            AZ : "JP-Tokyo",
            BS : "US-Atlanta",
            BH : "JP-Tokyo",
            BD : "JP-Tokyo",
            BB : "US-Atlanta",
            BY : "EU-London",
            BE : "EU-London",
            BZ : "US-Atlanta",
            BJ : "EU-London",
            BM : "US-Atlanta",
            BT : "JP-Tokyo",
            BO : "BR-Brazil",
            BQ : "US-Atlanta",
            BA : "EU-London",
            BW : "EU-London",
            BR : "BR-Brazil",
            IO : "JP-Tokyo",
            VG : "US-Atlanta",
            BN : "JP-Tokyo",
            BG : "EU-London",
            BF : "EU-London",
            BI : "EU-London",
            KH : "JP-Tokyo",
            CM : "EU-London",
            CA : "US-Atlanta",
            CV : "EU-London",
            KY : "US-Atlanta",
            CF : "EU-London",
            TD : "EU-London",
            CL : "BR-Brazil",
            CN : "CN-China",
            CX : "JP-Tokyo",
            CC : "JP-Tokyo",
            CO : "BR-Brazil",
            KM : "EU-London",
            CD : "EU-London",
            CG : "EU-London",
            CK : "SG-Singapore",
            CR : "US-Atlanta",
            CI : "EU-London",
            HR : "EU-London",
            CU : "US-Atlanta",
            CW : "US-Atlanta",
            CY : "JP-Tokyo",
            CZ : "EU-London",
            DK : "EU-London",
            DJ : "EU-London",
            DM : "US-Atlanta",
            DO : "US-Atlanta",
            EC : "BR-Brazil",
            EG : "EU-London",
            SV : "US-Atlanta",
            GQ : "EU-London",
            ER : "EU-London",
            EE : "EU-London",
            ET : "EU-London",
            FO : "EU-London",
            FK : "BR-Brazil",
            FJ : "SG-Singapore",
            FI : "EU-London",
            FR : "EU-London",
            GF : "BR-Brazil",
            PF : "SG-Singapore",
            GA : "EU-London",
            GM : "EU-London",
            GE : "JP-Tokyo",
            DE : "EU-London",
            GH : "EU-London",
            GI : "EU-London",
            GR : "EU-London",
            GL : "US-Atlanta",
            GD : "US-Atlanta",
            GP : "US-Atlanta",
            GU : "SG-Singapore",
            GT : "US-Atlanta",
            GG : "EU-London",
            GN : "EU-London",
            GW : "EU-London",
            GY : "BR-Brazil",
            HT : "US-Atlanta",
            VA : "EU-London",
            HN : "US-Atlanta",
            HK : "JP-Tokyo",
            HU : "EU-London",
            IS : "EU-London",
            IN : "JP-Tokyo",
            ID : "JP-Tokyo",
            IR : "JP-Tokyo",
            IQ : "JP-Tokyo",
            IE : "EU-London",
            IM : "EU-London",
            IL : "JP-Tokyo",
            IT : "EU-London",
            JM : "US-Atlanta",
            JP : "JP-Tokyo",
            JE : "EU-London",
            JO : "JP-Tokyo",
            KZ : "JP-Tokyo",
            KE : "EU-London",
            KI : "SG-Singapore",
            KP : "JP-Tokyo",
            KR : "JP-Tokyo",
            KW : "JP-Tokyo",
            KG : "JP-Tokyo",
            LA : "JP-Tokyo",
            LV : "EU-London",
            LB : "JP-Tokyo",
            LS : "EU-London",
            LR : "EU-London",
            LY : "EU-London",
            LI : "EU-London",
            LT : "EU-London",
            LU : "EU-London",
            MO : "JP-Tokyo",
            MK : "EU-London",
            MG : "EU-London",
            MW : "EU-London",
            MY : "JP-Tokyo",
            MV : "JP-Tokyo",
            ML : "EU-London",
            MT : "EU-London",
            MH : "SG-Singapore",
            MQ : "US-Atlanta",
            MR : "EU-London",
            MU : "EU-London",
            YT : "EU-London",
            MX : "US-Atlanta",
            FM : "SG-Singapore",
            MD : "EU-London",
            MC : "EU-London",
            MN : "JP-Tokyo",
            ME : "EU-London",
            MS : "US-Atlanta",
            MA : "EU-London",
            MZ : "EU-London",
            MM : "JP-Tokyo",
            NA : "EU-London",
            NR : "SG-Singapore",
            NP : "JP-Tokyo",
            NL : "EU-London",
            NC : "SG-Singapore",
            NZ : "SG-Singapore",
            NI : "US-Atlanta",
            NE : "EU-London",
            NG : "EU-London",
            NU : "SG-Singapore",
            NF : "SG-Singapore",
            MP : "SG-Singapore",
            NO : "EU-London",
            OM : "JP-Tokyo",
            PK : "JP-Tokyo",
            PW : "SG-Singapore",
            PS : "JP-Tokyo",
            PA : "US-Atlanta",
            PG : "SG-Singapore",
            PY : "BR-Brazil",
            PE : "BR-Brazil",
            PH : "JP-Tokyo",
            PN : "SG-Singapore",
            PL : "EU-London",
            PT : "EU-London",
            PR : "US-Atlanta",
            QA : "JP-Tokyo",
            RE : "EU-London",
            RO : "EU-London",
            RU : "RU-Russia",
            RW : "EU-London",
            BL : "US-Atlanta",
            SH : "EU-London",
            KN : "US-Atlanta",
            LC : "US-Atlanta",
            MF : "US-Atlanta",
            PM : "US-Atlanta",
            VC : "US-Atlanta",
            WS : "SG-Singapore",
            SM : "EU-London",
            ST : "EU-London",
            SA : "EU-London",
            SN : "EU-London",
            RS : "EU-London",
            SC : "EU-London",
            SL : "EU-London",
            SG : "JP-Tokyo",
            SX : "US-Atlanta",
            SK : "EU-London",
            SI : "EU-London",
            SB : "SG-Singapore",
            SO : "EU-London",
            ZA : "EU-London",
            SS : "EU-London",
            ES : "EU-London",
            LK : "JP-Tokyo",
            SD : "EU-London",
            SR : "BR-Brazil",
            SJ : "EU-London",
            SZ : "EU-London",
            SE : "EU-London",
            CH : "EU-London",
            SY : "EU-London",
            TW : "JP-Tokyo",
            TJ : "JP-Tokyo",
            TZ : "EU-London",
            TH : "JP-Tokyo",
            TL : "JP-Tokyo",
            TG : "EU-London",
            TK : "SG-Singapore",
            TO : "SG-Singapore",
            TT : "US-Atlanta",
            TN : "EU-London",
            TR : "TK-Turkey",
            TM : "JP-Tokyo",
            TC : "US-Atlanta",
            TV : "SG-Singapore",
            UG : "EU-London",
            UA : "EU-London",
            AE : "EU-London",
            GB : "EU-London",
            US : "US-Atlanta",
            UM : "SG-Singapore",
            VI : "US-Atlanta",
            UY : "BR-Brazil",
            UZ : "JP-Tokyo",
            VU : "SG-Singapore",
            VE : "BR-Brazil",
            VN : "JP-Tokyo",
            WF : "SG-Singapore",
            EH : "EU-London",
            YE : "JP-Tokyo",
            ZM : "EU-London",
            ZW : "EU-London"
          };
          /** @type {null} */
          var success = null;
          /** @type {function (string, string): undefined} */
          self.connect = open;
          /** @type {number} */
          var backoff = 500;
          /** @type {number} */
          var index = -1;
          /** @type {number} */
          var closest = -1;
          /**
           * @return {undefined}
           */
          self.refreshPlayerInfo = function() {
            registerEvent(253);
          };
          /** @type {null} */
          var img = null;
          /** @type {number} */
          var resolutionScale = 1;
          /** @type {null} */
          var s = null;
          var which = function() {
            /** @type {number} */
            var start = Date.now();
            /** @type {number} */
            var vsync = 1E3 / 60;
            return function() {
              self.requestAnimationFrame(which);
              /** @type {number} */
              var end = Date.now();
              /** @type {number} */
              var duration = end - start;
              if (duration > vsync) {
                /** @type {number} */
                start = end - duration % vsync;
                if (!addEventListener() || 240 > Date.now() - id) {
                  render();
                } else {
                  console.warn("Skipping draw");
                }
                throttledUpdate();
              }
            };
          }();
          var imgs = {};
          /** @type {Array.<string>} */
          var numbers = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;venezuela;blatter;chavez;cuba;fidel;merkel;palin;queen;boris;bush;trump".split(";");
          /** @type {Array.<string>} */
          var reserved = "8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;blatter;chavez;fidel;merkel;palin;queen;boris;bush;trump".split(";");
          var actual = {};
          Player.prototype = {
            Q : null,
            x : 0,
            y : 0,
            d : 0,
            b : 0
          };
          Node.prototype = {
            id : 0,
            a : null,
            name : null,
            i : null,
            I : null,
            x : 0,
            y : 0,
            size : 0,
            l : 0,
            m : 0,
            k : 0,
            B : 0,
            C : 0,
            e : 0,
            U : 0,
            L : 0,
            Z : 0,
            u : false,
            c : false,
            h : false,
            M : true,
            T : 0,
            J : null,
            W : 0,
            /**
             * @return {undefined}
             */
            S : function() {
              var i;
              /** @type {number} */
              i = 0;
              for (;i < codeSegments.length;i++) {
                if (codeSegments[i] == this) {
                  codeSegments.splice(i, 1);
                  break;
                }
              }
              delete nodes[this.id];
              i = items.indexOf(this);
              if (-1 != i) {
                /** @type {boolean} */
                lb = true;
                items.splice(i, 1);
              }
              i = result.indexOf(this.id);
              if (-1 != i) {
                result.splice(i, 1);
              }
              /** @type {boolean} */
              this.u = true;
              if (0 < this.T) {
                plugins.push(this);
              }
            },
            /**
             * @return {?}
             */
            g : function() {
              return Math.max(~~(0.3 * this.size), 24);
            },
            /**
             * @param {number} name
             * @return {undefined}
             */
            q : function(name) {
              if (this.name = name) {
                if (null == this.i) {
                  this.i = new t(this.g(), "#FFFFFF", true, "#000000");
                } else {
                  this.i.G(this.g());
                }
                this.i.r(this.name);
              }
            },
            /**
             * @return {undefined}
             */
            R : function() {
              var a = this.v();
              for (;this.a.length > a;) {
                /** @type {number} */
                var data = ~~(Math.random() * this.a.length);
                this.a.splice(data, 1);
              }
              if (0 == this.a.length) {
                if (0 < a) {
                  this.a.push(new Player(this, this.x, this.y, this.size, Math.random() - 0.5));
                }
              }
              for (;this.a.length < a;) {
                /** @type {number} */
                data = ~~(Math.random() * this.a.length);
                data = this.a[data];
                this.a.push(new Player(this, data.x, data.y, data.d, data.b));
              }
            },
            /**
             * @return {?}
             */
            v : function() {
              /** @type {number} */
              var rh = 10;
              if (20 > this.size) {
                /** @type {number} */
                rh = 0;
              }
              if (this.c) {
                /** @type {number} */
                rh = 30;
              }
              var height = this.size;
              if (!this.c) {
                height *= scale;
              }
              height *= resolutionScale;
              return~~Math.max(height, rh);
            },
            /**
             * @return {undefined}
             */
            ka : function() {
              this.R();
              var a = this.a;
              var l = a.length;
              /** @type {number} */
              var i = 0;
              for (;i < l;++i) {
                var x = a[(i - 1 + l) % l].b;
                var delta = a[(i + 1) % l].b;
                a[i].b += (Math.random() - 0.5) * (this.h ? 3 : 1);
                a[i].b *= 0.7;
                if (10 < a[i].b) {
                  /** @type {number} */
                  a[i].b = 10;
                }
                if (-10 > a[i].b) {
                  /** @type {number} */
                  a[i].b = -10;
                }
                /** @type {number} */
                a[i].b = (x + delta + 8 * a[i].b) / 10;
              }
              var ELEMENT_NODE = this;
              /** @type {number} */
              var sa = this.c ? 0 : (this.id / 1E3 + className / 1E4) % (2 * Math.PI);
              /** @type {number} */
              var closingAnimationTime = 0;
              /** @type {number} */
              i = 0;
              for (;i < l;++i) {
                var d = a[i].d;
                x = a[(i - 1 + l) % l].d;
                delta = a[(i + 1) % l].d;
                if (15 < this.size && (null != c && (20 < this.size * scale && 0 < this.id))) {
                  /** @type {boolean} */
                  var n = false;
                  var startX = a[i].x;
                  var y = a[i].y;
                  c.na(startX - 5, y - 5, 10, 10, function(node) {
                    if (node.Q != ELEMENT_NODE) {
                      if (25 > (startX - node.x) * (startX - node.x) + (y - node.y) * (y - node.y)) {
                        /** @type {boolean} */
                        n = true;
                      }
                    }
                  });
                  if (!n) {
                    if (a[i].x < max || (a[i].y < low || (a[i].x > min || a[i].y > high))) {
                      /** @type {boolean} */
                      n = true;
                    }
                  }
                  if (n) {
                    if (0 < a[i].b) {
                      /** @type {number} */
                      a[i].b = 0;
                    }
                    a[i].b -= 1;
                  }
                }
                d += a[i].b;
                if (0 > d) {
                  /** @type {number} */
                  d = 0;
                }
                /** @type {number} */
                d = this.h ? (19 * d + this.size) / 20 : (12 * d + this.size) / 13;
                /** @type {number} */
                a[i].d = (x + delta + 8 * d) / 10;
                /** @type {number} */
                x = 2 * Math.PI / l;
                delta = this.a[i].d;
                if (this.c) {
                  if (0 == i % 2) {
                    delta += 5;
                  }
                }
                a[i].x = this.x + Math.cos(x * i + sa) * delta;
                a[i].y = this.y + Math.sin(x * i + sa) * delta;
                /** @type {number} */
                closingAnimationTime = Math.max(closingAnimationTime, delta);
              }
              /** @type {number} */
              this.W = closingAnimationTime;
            },
            /**
             * @return {?}
             */
            K : function() {
              if (0 >= this.id) {
                return 1;
              }
              var m;
              /** @type {number} */
              m = (className - this.L) / 120;
              /** @type {number} */
              m = 0 > m ? 0 : 1 < m ? 1 : m;
              /** @type {number} */
              var k = 0 > m ? 0 : 1 < m ? 1 : m;
              this.g();
              if (this.u && 1 <= k) {
                var i = plugins.indexOf(this);
                if (-1 != i) {
                  plugins.splice(i, 1);
                }
              }
              this.x = m * (this.B - this.l) + this.l;
              this.y = m * (this.C - this.m) + this.m;
              this.size = k * (this.e - this.k) + this.k;
              if (0.01 > Math.abs(this.size - this.e)) {
                this.size = this.e;
              }
              return k;
            },
            /**
             * @return {?}
             */
            H : function() {
              return 0 >= this.id ? true : this.x + this.size + 40 < x - width / 2 / scale || (this.y + this.size + 40 < r - height / 2 / scale || (this.x - this.size - 40 > x + width / 2 / scale || this.y - this.size - 40 > r + height / 2 / scale)) ? false : true;
            },
            /**
             * @param {CanvasRenderingContext2D} ctx
             * @return {undefined}
             */
            p : function(ctx) {
              if (this.H()) {
                ++this.T;
                /** @type {boolean} */
                var y_position = 0 < this.id && (!this.c && (!this.h && 0.4 > scale));
                if (5 > this.v()) {
                  if (0 < this.id) {
                    /** @type {boolean} */
                    y_position = true;
                  }
                }
                if (this.M && !y_position) {
                  /** @type {number} */
                  var i = 0;
                  for (;i < this.a.length;i++) {
                    this.a[i].d = this.size;
                  }
                }
                /** @type {boolean} */
                this.M = y_position;
                ctx.save();
                this.Z = className;
                var r = this.K();
                if (this.u) {
                  ctx.globalAlpha *= 1 - r;
                }
                /** @type {number} */
                ctx.lineWidth = 10;
                /** @type {string} */
                ctx.lineCap = "round";
                /** @type {string} */
                ctx.lineJoin = this.c ? "miter" : "round";
                i = this.name.toLowerCase();
                /** @type {null} */
                var e = null;
                /** @type {boolean} */
                r = false;
                var fs = this.color;
                if (!this.h) {
                  if (!!$timeout) {
                    if (!Ob) {
                      if (-1 != numbers.indexOf(i)) {
                        if (!imgs.hasOwnProperty(i)) {
                          /** @type {Image} */
                          imgs[i] = new Image;
                          /** @type {string} */
                          imgs[i].src = self.ASSETS_ROOT + "skins/" + i + ".png";
                        }
                        e = 0 != imgs[i].width && imgs[i].complete ? imgs[i] : null;
                      } else {
                        /** @type {null} */
                        e = null;
                      }
                      if (null != e) {
                        if (-1 != reserved.indexOf(i)) {
                          /** @type {boolean} */
                          r = true;
                        }
                      } else {
                        e = loop(this.J);
                        if (null != e) {
                          fs = tryIt(this.J) || fs;
                        }
                      }
                    }
                  }
                }
                if (doneResults) {
                  /** @type {string} */
                  ctx.fillStyle = "#FFFFFF";
                  /** @type {string} */
                  ctx.strokeStyle = "#AAAAAA";
                } else {
                  ctx.fillStyle = fs;
                  ctx.strokeStyle = fs;
                }
                if (y_position) {
                  ctx.beginPath();
                  ctx.arc(this.x, this.y, this.size + 5, 0, 2 * Math.PI, false);
                } else {
                  this.ka();
                  ctx.beginPath();
                  fs = this.v();
                  ctx.moveTo(this.a[0].x, this.a[0].y);
                  /** @type {number} */
                  i = 1;
                  for (;i <= fs;++i) {
                    /** @type {number} */
                    var y = i % fs;
                    ctx.lineTo(this.a[y].x, this.a[y].y);
                  }
                }
                ctx.closePath();
                if (!y_position) {
                  ctx.stroke();
                }
                ctx.fill();
                if (null != e) {
                  ctx.save();
                  ctx.clip();
                  /** @type {number} */
                  i = Math.max(this.size, this.W);
                  ctx.drawImage(e, this.x - i - 5, this.y - i - 5, 2 * i + 10, 2 * i + 10);
                  ctx.restore();
                }
                if (doneResults || 15 < this.size) {
                  if (!y_position) {
                    /** @type {string} */
                    ctx.strokeStyle = "#000000";
                    ctx.globalAlpha *= 0.1;
                    ctx.stroke();
                  }
                }
                /** @type {number} */
                ctx.globalAlpha = 1;
                /** @type {boolean} */
                e = -1 != items.indexOf(this);
                /** @type {number} */
                y_position = ~~this.y;
                if (0 != this.id) {
                  if (error || e) {
                    if (this.name) {
                      if (this.i) {
                        if (!r) {
                          i = this.i;
                          i.r(this.name);
                          i.G(this.g());
                          /** @type {number} */
                          r = 0 >= this.id ? 1 : Math.ceil(10 * scale) / 10;
                          i.X(r);
                          i = i.D();
                          /** @type {number} */
                          fs = Math.ceil(i.width / r);
                          /** @type {number} */
                          y = Math.ceil(i.height / r);
                          ctx.drawImage(i, ~~this.x - ~~(fs / 2), y_position - ~~(y / 2), fs, y);
                          y_position += i.height / 2 / r + 4;
                        }
                      }
                    }
                  }
                }
                if (0 < this.id) {
                  if (text) {
                    if (e || 0 == items.length && ((!this.c || this.h) && 20 < this.size)) {
                      if (null == this.I) {
                        this.I = new t(this.g() / 2, "#FFFFFF", true, "#000000");
                      }
                      e = this.I;
                      e.G(this.g() / 2);
                      e.r(~~(this.size * this.size / 100));
                      /** @type {number} */
                      r = Math.ceil(10 * scale) / 10;
                      e.X(r);
                      i = e.D();
                      /** @type {number} */
                      fs = Math.ceil(i.width / r);
                      /** @type {number} */
                      y = Math.ceil(i.height / r);
                      ctx.drawImage(i, ~~this.x - ~~(fs / 2), y_position - ~~(y / 2), fs, y);
                    }
                  }
                }
                ctx.restore();
              }
            }
          };
          self.Maths = function(opt_attributes) {
            /**
             * @param {number} value
             * @param {number} min
             * @param {number} max
             * @return {?}
             */
            function clamp(value, min, max) {
              return value < min ? min : value > max ? max : value;
            }
            /**
             * @param {number} a
             * @param {number} b
             * @param {number} x
             * @return {?}
             */
            opt_attributes.ra = function(a, b, x) {
              x = clamp(x, 0, 1);
              return a + x * (b - a);
            };
            /** @type {function (number, number, number): ?} */
            opt_attributes.qa = clamp;
            return opt_attributes;
          }({});
          t.prototype = {
            t : "",
            N : "#000000",
            P : false,
            o : "#000000",
            n : 16,
            j : null,
            O : null,
            f : false,
            s : 1,
            /**
             * @param {number} n
             * @return {undefined}
             */
            G : function(n) {
              if (this.n != n) {
                /** @type {number} */
                this.n = n;
                /** @type {boolean} */
                this.f = true;
              }
            },
            /**
             * @param {?} s
             * @return {undefined}
             */
            X : function(s) {
              if (this.s != s) {
                this.s = s;
                /** @type {boolean} */
                this.f = true;
              }
            },
            /**
             * @param {number} o
             * @return {undefined}
             */
            setStrokeColor : function(o) {
              if (this.o != o) {
                /** @type {number} */
                this.o = o;
                /** @type {boolean} */
                this.f = true;
              }
            },
            /**
             * @param {number} context
             * @return {undefined}
             */
            r : function(context) {
              if (context != this.t) {
                /** @type {number} */
                this.t = context;
                /** @type {boolean} */
                this.f = true;
              }
            },
            /**
             * @return {?}
             */
            D : function() {
              if (null == this.j) {
                /** @type {Element} */
                this.j = document.createElement("canvas");
                this.O = this.j.getContext("2d");
              }
              if (this.f) {
                /** @type {boolean} */
                this.f = false;
                var j = this.j;
                var ctx = this.O;
                var caracter = this.t;
                var scale = this.s;
                var h = this.n;
                /** @type {string} */
                var offset = h + "px Ubuntu";
                /** @type {string} */
                ctx.font = offset;
                /** @type {number} */
                var d = ~~(0.2 * h);
                /** @type {number} */
                j.width = (ctx.measureText(caracter).width + 6) * scale;
                /** @type {number} */
                j.height = (h + d) * scale;
                /** @type {string} */
                ctx.font = offset;
                ctx.scale(scale, scale);
                /** @type {number} */
                ctx.globalAlpha = 1;
                /** @type {number} */
                ctx.lineWidth = 3;
                ctx.strokeStyle = this.o;
                ctx.fillStyle = this.N;
                if (this.P) {
                  ctx.strokeText(caracter, 3, h - d / 2);
                }
                console.log(caracter);
                ctx.fillText(caracter, 3, h - d / 2);
              }
              return this.j;
            }
          };
          if (!Date.now) {
            /**
             * @return {number}
             */
            Date.now = function() {
              return(new Date).getTime();
            };
          }
          (function() {
            /** @type {Array} */
            var vendors = ["ms", "moz", "webkit", "o"];
            /** @type {number} */
            var x = 0;
            for (;x < vendors.length && !self.requestAnimationFrame;++x) {
              self.requestAnimationFrame = self[vendors[x] + "RequestAnimationFrame"];
              self.cancelAnimationFrame = self[vendors[x] + "CancelAnimationFrame"] || self[vendors[x] + "CancelRequestAnimationFrame"];
            }
            if (!self.requestAnimationFrame) {
              /**
               * @param {function (number): ?} callback
               * @return {number}
               */
              self.requestAnimationFrame = function(callback) {
                return setTimeout(callback, 1E3 / 60);
              };
              /**
               * @param {number} id
               * @return {?}
               */
              self.cancelAnimationFrame = function(id) {
                clearTimeout(id);
              };
            }
          })();
          var proto = {
            /**
             * @param {?} params
             * @return {?}
             */
            init : function(params) {
              /**
               * @param {?} data
               * @return {?}
               */
              function fire(data) {
                if (data < tmp) {
                  data = tmp;
                }
                if (data > type) {
                  data = type;
                }
                return~~((data - tmp) / 32);
              }
              /**
               * @param {?} d
               * @return {?}
               */
              function b(d) {
                if (d < c) {
                  d = c;
                }
                if (d > a) {
                  d = a;
                }
                return~~((d - c) / 32);
              }
              var tmp = params.ia;
              var c = params.ja;
              var type = params.fa;
              var a = params.ha;
              /** @type {number} */
              var cols = ~~((type - tmp) / 32) + 1;
              /** @type {number} */
              var klength = ~~((a - c) / 32) + 1;
              /** @type {Array} */
              var data = Array(cols * klength);
              return{
                /**
                 * @param {?} val
                 * @return {undefined}
                 */
                ca : function(val) {
                  var key = fire(val.x) + b(val.y) * cols;
                  if (null == data[key]) {
                    data[key] = val;
                  } else {
                    if (Array.isArray(data[key])) {
                      data[key].push(val);
                    } else {
                      /** @type {Array} */
                      data[key] = [data[key], val];
                    }
                  }
                },
                /**
                 * @param {number} memory
                 * @param {number} a
                 * @param {number} values
                 * @param {number} offset
                 * @param {Function} String
                 * @return {undefined}
                 */
                na : function(memory, a, values, offset, String) {
                  var currentOffset = fire(memory);
                  var r = b(a);
                  memory = fire(memory + values);
                  a = b(a + offset);
                  if (0 > currentOffset || (currentOffset >= cols || (0 > r || r >= klength))) {
                    debugger;
                  }
                  for (;r <= a;++r) {
                    offset = currentOffset;
                    for (;offset <= memory;++offset) {
                      if (values = data[offset + r * cols], null != values) {
                        if (Array.isArray(values)) {
                          /** @type {number} */
                          var i = 0;
                          for (;i < values.length;i++) {
                            String(values[i]);
                          }
                        } else {
                          String(values);
                        }
                      }
                    }
                  }
                }
              };
            }
          };
          var flush = function() {
            var that = new Node(0, 0, 0, 32, "#ED1C24", "");
            /** @type {Element} */
            var canvas = document.createElement("canvas");
            /** @type {number} */
            canvas.width = 32;
            /** @type {number} */
            canvas.height = 32;
            var renderer = canvas.getContext("2d");
            return function() {
              if (0 < items.length) {
                that.color = items[0].color;
                that.q(items[0].name);
              }
              renderer.clearRect(0, 0, 32, 32);
              renderer.save();
              renderer.translate(16, 16);
              renderer.scale(0.4, 0.4);
              that.p(renderer);
              renderer.restore();
              /** @type {(HTMLElement|null)} */
              var originalFavicon = document.getElementById("favicon");
              /** @type {Element} */
              var newNode = originalFavicon.cloneNode(true);
              newNode.setAttribute("href", canvas.toDataURL("image/png"));
              originalFavicon.parentNode.replaceChild(newNode, originalFavicon);
            };
          }();
          $(function() {
            flush();
          });
          /** @type {string} */
          var i = "storeObjectInfo";
          var filtered = {
            context : null,
            defaultProvider : "facebook",
            loginIntent : "0",
            userInfo : {
              socialToken : null,
              tokenExpires : "",
              level : "",
              xp : "",
              xpNeeded : "",
              name : "",
              picture : ""
            }
          };
          var data = filtered;
          self.storageInfo = data;
          /** @type {function (): undefined} */
          self.createDefaultStorage = compassResult;
          /** @type {function (): undefined} */
          self.updateStorage = done;
          $(function() {
            if (null != self.localStorage[i]) {
              /** @type {*} */
              data = JSON.parse(self.localStorage[i]);
            }
            if ("1" == data.loginIntent) {
              d(data.context);
            }
            if ("" != data.userInfo.name) {
              show(data.userInfo);
              if (null != data.userInfo.socialToken) {
                bytes = data.userInfo.socialToken;
              }
            }
          });
          /**
           * @return {undefined}
           */
          self.checkLoginStatus = function() {
            if ("1" == data.loginIntent) {
              d(data.context);
            }
          };
          /**
           * @return {undefined}
           */
          self.logout = function() {
            data = filtered;
            /** @type {null} */
            bytes = null;
            disconnect();
            $("#helloContainer").attr("data-logged-in", "0");
            $("#helloContainer").attr("data-has-account-data", "0");
            $("#gPlusShare").hide();
            $("#fbShare").show();
            $("#user-id-tag").text("");
            delete self.localStorage[i];
            /** @type {string} */
            self.localStorage[i] = JSON.stringify(data);
            animate();
            self.MC.doLogout();
          };
          /**
           * @return {undefined}
           */
          self.gameServerLogin = function() {
            if ("" != data.userInfo.name) {
              if (self.localStorage[i]) {
                if (Date.now() + 3E4 > 1E3 * data.userInfo.tokenExpires) {
                  $("#helloContainer").attr("data-logged-in", "0");
                  self.logout();
                } else {
                  bytes = data.userInfo.socialToken;
                  onSuccess();
                }
              }
            }
          };
          /**
           * @return {undefined}
           */
          self.checkSocialAPIToken = function() {
            $.ajax(url + "checkToken", {
              /**
               * @return {undefined}
               */
              error : function() {
                /** @type {null} */
                bytes = null;
                self.logout();
              },
              /**
               * @param {string} status
               * @return {undefined}
               */
              success : function(status) {
                /** @type {string} */
                data.sa = "1";
                status = status.split("\n");
                start({
                  level : +status[0],
                  xp : +status[1],
                  xpNeeded : +status[2]
                }, null);
                self.gameServerLogin();
              },
              dataType : "text",
              method : "POST",
              cache : false,
              crossDomain : true,
              data : bytes
            });
          };
          /**
           * @param {string} query
           * @param {string} data
           * @return {undefined}
           */
          self.getSocialAPIToken = function(query, data) {
            if (null == data || "undefined" == data) {
              self.logout();
            } else {
              $.ajax(url + query, {
                /**
                 * @return {undefined}
                 */
                error : function() {
                  /** @type {null} */
                  bytes = null;
                  $("#helloContainer").attr("data-logged-in", "0");
                },
                /**
                 * @param {Array} alt
                 * @return {undefined}
                 */
                success : function(alt) {
                  alt = alt.split("\n");
                  data.userInfo.socialToken = alt[2];
                  data.userInfo.tokenExpires = alt[3];
                  data.userInfo.level = alt[4];
                  data.userInfo.xp = alt[5];
                  data.userInfo.xpNeeded = alt[6];
                  data.userInfo.name = alt[0].split(" ")[0];
                  show(data.userInfo);
                  done();
                  self.gameServerLogin();
                },
                dataType : "text",
                method : "POST",
                cache : false,
                crossDomain : true,
                data : data
              });
            }
          };
          /**
           * @return {undefined}
           */
          self.toggleSocialLogin = function() {
            $("#socialLoginContainer").toggle();
            $("#settings").hide();
            $("#instructions").hide();
            renderPage();
          };
          /**
           * @return {undefined}
           */
          self.toggleSettings = function() {
            $("#settings").toggle();
            $("#socialLoginContainer").hide();
            $("#instructions").hide();
            renderPage();
          };
          /** @type {number} */
          var cc = 0;
          /**
           * @return {undefined}
           */
          self.fbAsyncInit = function() {
            /**
             * @return {undefined}
             */
            function func() {
              if (null == self.FB) {
                alert("You seem to have something blocking Facebook on your browser, please check for any extensions");
              } else {
                /** @type {string} */
                data.loginIntent = "1";
                self.updateStorage();
                self.FB.login(function(response) {
                  check(response);
                }, {
                  scope : "public_profile, email"
                });
              }
            }
            self.FB.init({
              appId : item.fb_app_id,
              cookie : true,
              xfbml : true,
              status : true,
              version : "v2.2"
            });
            if ("1" == self.storageInfo.loginIntent) {
              if ("facebook" == self.storageInfo.context) {
                self.FB.getLoginStatus(function(response) {
                  if ("connected" === response.status) {
                    check(response);
                  } else {
                    self.logout();
                    func();
                  }
                });
              }
            }
            /** @type {function (): undefined} */
            self.facebookRelogin = func;
            /** @type {function (): undefined} */
            self.facebookLogin = func;
          };
          /** @type {boolean} */
          var yb = false;
          (function($scope) {
            /**
             * @return {undefined}
             */
            function injectScript() {
              /** @type {Element} */
              var ga = document.createElement("script");
              /** @type {string} */
              ga.type = "text/javascript";
              /** @type {boolean} */
              ga.async = true;
              /** @type {string} */
              ga.src = "//apis.google.com/js/client:platform.js?onload=gapiAsyncInit";
              var insertAt = document.getElementsByTagName("script")[0];
              insertAt.parentNode.insertBefore(ga, insertAt);
              /** @type {boolean} */
              f = true;
            }
            var $window = {};
            /** @type {boolean} */
            var f = false;
            /**
             * @return {undefined}
             */
            self.gapiAsyncInit = function() {
              $($window).trigger("initialized");
            };
            $scope.google = {
              /**
               * @return {undefined}
               */
              da : function() {
                injectScript();
              },
              /**
               * @param {?} dataAndEvents
               * @param {Function} cb
               * @return {undefined}
               */
              ba : function(dataAndEvents, cb) {
                self.gapi.client.load("plus", "v1", function() {
                  console.log("fetching me profile");
                  gapi.client.plus.people.get({
                    userId : "me"
                  }).execute(function(outErr) {
                    cb(outErr);
                  });
                });
              }
            };
            /**
             * @param {Function} fun
             * @return {undefined}
             */
            $scope.ma = function(fun) {
              if (!f) {
                injectScript();
              }
              if ("undefined" !== typeof gapi) {
                fun();
              } else {
                $($window).bind("initialized", fun);
              }
            };
            return $scope;
          })($scope);
          var progress = function($scope) {
            /**
             * @param {string} funcToCall
             * @return {undefined}
             */
            function callFunc(funcToCall) {
              if (null != bytes) {
                self.checkSocialAPIToken();
              } else {
                self.getSocialAPIToken("googleLogin", funcToCall);
              }
              self.MC.doLoginWithGPlus(funcToCall);
            }
            /**
             * @param {number} newVal
             * @return {undefined}
             */
            function handler(newVal) {
              /** @type {number} */
              data.userInfo.picture = newVal;
              $(".agario-profile-picture").attr("src", newVal);
            }
            /** @type {null} */
            var api = null;
            var params = {
              client_id : item.gplus_client_id,
              cookie_policy : "single_host_origin",
              scope : "profile email"
            };
            $scope.V = {
              /**
               * @return {?}
               */
              Aa : function() {
                return api;
              },
              /**
               * @return {undefined}
               */
              init : function() {
                var em = this;
                var hasDisclosureProperty = data && ("1" == data.loginIntent && "google" == data.context);
                $scope.ma(function() {
                  self.gapi.ytsubscribe.go("agarYoutube");
                  self.gapi.load("auth2", function() {
                    api = self.gapi.auth2.init(params);
                    api.attachClickHandler(document.getElementById("gplusLogin"), {}, function(reply) {
                      console.log("googleUser : " + reply);
                    }, function(err) {
                      console.log("failed to login in google plus: ", JSON.stringify(err, void 0, 2));
                    });
                    api.currentUser.listen(_.bind(em.la, em));
                    if (hasDisclosureProperty) {
                      if (1 == api.isSignedIn.get()) {
                        api.signIn();
                      }
                    }
                  });
                });
              },
              /**
               * @param {number} value
               * @return {undefined}
               */
              la : function(value) {
                if (api && (value && (api.isSignedIn.get() && !yb))) {
                  /** @type {boolean} */
                  yb = true;
                  /** @type {string} */
                  data.loginIntent = "1";
                  var fragment = value.getAuthResponse();
                  var funcToCall = fragment.access_token;
                  self.pa = fragment;
                  console.log("loggedIn with G+!");
                  value = value.getBasicProfile().getImageUrl();
                  if (void 0 == value) {
                    $scope.google.ba(fragment, function(r) {
                      if (r.result.isPlusUser) {
                        if (r) {
                          handler(r.image.url);
                        }
                        callFunc(funcToCall);
                      } else {
                        alert("Please add Google+ to your Google account and try again.\nOr you can login with another account.");
                        self.logout();
                      }
                    });
                  } else {
                    handler(value);
                    callFunc(funcToCall);
                  }
                  /** @type {string} */
                  data.context = "google";
                  self.updateStorage();
                }
              },
              /**
               * @return {undefined}
               */
              ea : function() {
                if (api) {
                  api.signOut();
                  /** @type {boolean} */
                  yb = false;
                }
              }
            };
            return $scope;
          }($scope);
          self.gplusModule = progress;
          /**
           * @return {undefined}
           */
          var disconnect = function() {
            $scope.V.ea();
          };
          /** @type {function (): undefined} */
          self.logoutGooglePlus = disconnect;
          var throttledUpdate = function() {
            /**
             * @param {Object} args
             * @param {number} map
             * @param {?} input
             * @param {number} value
             * @param {string} options
             * @return {undefined}
             */
            function render(args, map, input, value, options) {
              var ctx = map.getContext("2d");
              var newWidth = map.width;
              map = map.height;
              /** @type {string} */
              args.color = options;
              args.q(input);
              /** @type {number} */
              args.size = value;
              ctx.save();
              ctx.translate(newWidth / 2, map / 2);
              args.p(ctx);
              ctx.restore();
            }
            var that = new Node(-1, 0, 0, 32, "#5bc0de", "");
            var typePattern = new Node(-1, 0, 0, 32, "#5bc0de", "");
            /** @type {Array.<string>} */
            var codeSegments = "#0791ff #5a07ff #ff07fe #ffa507 #ff0774 #077fff #3aff07 #ff07ed #07a8ff #ff076e #3fff07 #ff0734 #07ff20 #ff07a2 #ff8207 #07ff0e".split(" ");
            /** @type {Array} */
            var data = [];
            /** @type {number} */
            var i = 0;
            for (;i < codeSegments.length;++i) {
              /** @type {number} */
              var bisection = i / codeSegments.length * 12;
              /** @type {number} */
              var radius = 30 * Math.sqrt(i / codeSegments.length);
              data.push(new Node(-1, Math.cos(bisection) * radius, Math.sin(bisection) * radius, 10, codeSegments[i], ""));
            }
            shuffle(data);
            /** @type {Element} */
            var map = document.createElement("canvas");
            map.getContext("2d");
            /** @type {number} */
            map.width = map.height = 70;
            render(typePattern, map, "", 26, "#ebc0de");
            return function() {
              $(".cell-spinner").filter(":visible").each(function() {
                var css = $(this);
                /** @type {number} */
                var x = Date.now();
                var width = this.width;
                var height = this.height;
                var context = this.getContext("2d");
                context.clearRect(0, 0, width, height);
                context.save();
                context.translate(width / 2, height / 2);
                /** @type {number} */
                var y = 0;
                for (;10 > y;++y) {
                  context.drawImage(map, (0.1 * x + 80 * y) % (width + 140) - width / 2 - 70 - 35, height / 2 * Math.sin((0.001 * x + y) % Math.PI * 2) - 35, 70, 70);
                }
                context.restore();
                if (css = css.attr("data-itr")) {
                  css = test(css);
                }
                render(that, this, css || "", +$(this).attr("data-size"), "#5bc0de");
              });
              $("#statsPellets").filter(":visible").each(function() {
                $(this);
                var i = this.width;
                var height = this.height;
                this.getContext("2d").clearRect(0, 0, i, height);
                /** @type {number} */
                i = 0;
                for (;i < data.length;i++) {
                  render(data[i], this, "", data[i].size, data[i].color);
                }
              });
            };
          }();
          /**
           * @return {undefined}
           */
          self.createParty = function() {
            get(":party");
            /**
             * @param {string} content
             * @return {undefined}
             */
            success = function(content) {
              callback("/#" + self.encodeURIComponent(content));
              $(".partyToken").val("agar.io/#" + self.encodeURIComponent(content));
              $("#helloContainer").attr("data-party-state", "1");
            };
            animate();
          };
          /** @type {function (string): undefined} */
          self.joinParty = remove;
          /**
           * @return {undefined}
           */
          self.cancelParty = function() {
            callback("/");
            $("#helloContainer").attr("data-party-state", "0");
            get("");
            animate();
          };
          /** @type {Array} */
          var a = [];
          /** @type {number} */
          var pauseText = 0;
          /** @type {string} */
          var col = "#000000";
          /** @type {boolean} */
          var from = false;
          /** @type {boolean} */
          var Ea = false;
          /** @type {number} */
          var left = 0;
          /** @type {number} */
          var right = 0;
          /** @type {number} */
          var name = 0;
          /** @type {number} */
          var path = 0;
          /** @type {number} */
          var count = 0;
          /** @type {boolean} */
          var connected = true;
          setInterval(function() {
            if (Ea) {
              a.push(pick() / 100);
            }
          }, 1E3 / 60);
          setInterval(function() {
            var tempCount = endsWith();
            if (0 != tempCount) {
              ++name;
              if (0 == count) {
                count = tempCount;
              }
              /** @type {number} */
              count = Math.min(count, tempCount);
            }
          }, 1E3);
          /**
           * @return {undefined}
           */
          self.closeStats = function() {
            /** @type {boolean} */
            from = false;
            $("#stats").hide();
            /** @type {Array} */
            var pdataCur = user.ab;
            draw(pdataCur);
            emit(pdataCur);
            send(0);
          };
          /**
           * @param {?} err
           * @return {undefined}
           */
          self.setSkipStats = function(err) {
            /** @type {boolean} */
            connected = !err;
          };
          /** @type {function (string): ?} */
          self.getStatsString = stop;
          /** @type {function (): undefined} */
          self.gPlusShare = onMouseMove;
          /**
           * @return {undefined}
           */
          self.twitterShareStats = function() {
            var url = self.getStatsString("g_plus_share_stats");
            self.open("https://twitter.com/intent/tweet?text=" + url, "Agar.io", "width=660,height=310,menubar=no,toolbar=no,resizable=yes,scrollbars=no,left=" + (self.screenX + self.innerWidth / 2 - 330) + ",top=" + (self.innerHeight - 310) / 2);
          };
          /**
           * @return {undefined}
           */
          self.fbShareStats = function() {
            var groupDescription = self.getStatsString("fb_matchresults_subtitle");
            self.FB.ui({
              method : "feed",
              display : "iframe",
              name : test("fb_matchresults_title"),
              caption : test("fb_matchresults_description"),
              description : groupDescription,
              link : "http://agar.io",
              xa : "http://static2.miniclipcdn.com/mobile/agar/Agar.io_matchresults_fb_1200x630.png",
              oa : {
                name : "play now!",
                link : "http://agar.io"
              }
            });
          };
          /**
           * @param {?} object
           * @param {string} ctxt
           * @return {undefined}
           */
          self.fillSocialValues = function(object, ctxt) {
            if (1 == self.isChrome) {
              if ("google" == self.storageInfo.context) {
                self.gapi.interactivepost.render(ctxt, {
                  contenturl : item.game_url,
                  clientid : item.gplus_client_id,
                  cookiepolicy : "http://agar.io",
                  prefilltext : object,
                  calltoactionlabel : "BEAT",
                  calltoactionurl : item.game_url
                });
              }
            }
          };
          $(function() {
            $(init);
            if ("MAsyncInit" in self) {
              self.MAsyncInit();
            }
          });
        }
      }
    }
  }
})(window, window.jQuery);
