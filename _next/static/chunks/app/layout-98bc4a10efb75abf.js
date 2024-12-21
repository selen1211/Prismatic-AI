(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    6273: function (t, e, i) {
      Promise.resolve().then(i.bind(i, 6343)),
        Promise.resolve().then(i.bind(i, 1107)),
        Promise.resolve().then(i.bind(i, 7656)),
        Promise.resolve().then(i.bind(i, 8291)),
        Promise.resolve().then(i.t.bind(i, 9691, 23)),
        Promise.resolve().then(i.t.bind(i, 9621, 23)),
        Promise.resolve().then(i.t.bind(i, 4471, 23)),
        Promise.resolve().then(i.t.bind(i, 8322, 23)),
        Promise.resolve().then(i.t.bind(i, 6511, 23)),
        Promise.resolve().then(i.t.bind(i, 1780, 23)),
        Promise.resolve().then(i.t.bind(i, 5304, 23)),
        Promise.resolve().then(i.t.bind(i, 5901, 23)),
        Promise.resolve().then(i.t.bind(i, 3838, 23)),
        Promise.resolve().then(i.t.bind(i, 7960, 23));
    },
    6343: function (t, e, i) {
      "use strict";
      i.d(e, {
        default: function () {
          return h;
        },
      });
      var s = i(7437),
        o = i(2265),
        r = i(4508),
        n = i(6498),
        l = i(3145),
        a = i(4946);
      function h() {
        return (
          (0, o.useEffect)(() => {
            (0, r.X)(),
              n.ZP.to(".loader-screen", {
                height: 0,
                duration: 0.6,
                delay: 2,
                onComplete: () => {
                  (0, r.K)(), n.ZP.set(".loader-screen", { display: "none" });
                },
              });
          }, []),
          (0, o.useEffect)(() => {
            let t = n.ZP.timeline({ defaults: { duration: 1.5 } });
            t.fromTo(".screen-loader-icon", { rotate: 360 }, { rotate: 0 }),
              t.fromTo(
                "#loader-path-1",
                { x: -130, y: -140, ease: "power1.inOut" },
                { x: 0, y: 0 },
                "<"
              ),
              t.fromTo(
                "#loader-path-2",
                { x: 130, y: -140, ease: "power1.inOut" },
                { x: 0, y: 0 },
                "<"
              ),
              t.fromTo(
                "#loader-inner-1",
                { x: 60, y: -124, ease: "power1.inOut" },
                { x: 0, y: 0, duration: 1.2 },
                "<"
              ),
              t.fromTo(
                "#loader-inner-2",
                { x: -60, y: -124, ease: "power1.inOut" },
                { x: 0, y: 0, duration: 1.2 },
                "<"
              ),
              t.to(
                ".screen-loader-icon",
                { opacity: 0.1, duration: 0.3 },
                "-=0.2"
              ),
              t.to(".screen-loader-icon", { opacity: 1, duration: 0.1 }),
              t.fromTo(
                ".screen-loader-icon",
                { rotate: 180, scale: 1 },
                { scale: 0.5, rotate: 0, y: 60, duration: 0.5 },
                "+=0.4"
              );
          }, []),
          (0, s.jsx)("div", {
            className:
              "loader-screen fixed z-50 flex h-screen w-screen items-center justify-center bg-black",
            children: (0, s.jsx)(l.default, {
              src: a.Z,
              alt: "Logo",
              width: 150,
              height: 150,
              className: "screen-loader-icon",
              priority: !0,
            }),
          })
        );
      }
    },
    1107: function (t, e, i) {
      "use strict";
      i.d(e, {
        default: function () {
          return g;
        },
      });
      var s = i(7437),
        o = i(2265),
        r = i(6498),
        n = i(1342),
        l = i.n(n);
      function a(t, e, i) {
        return Math.max(t, Math.min(e, i));
      }
      var h = class {
          isRunning = !1;
          value = 0;
          from = 0;
          to = 0;
          currentTime = 0;
          lerp;
          duration;
          easing;
          onUpdate;
          advance(t) {
            if (!this.isRunning) return;
            let e = !1;
            if (this.duration && this.easing) {
              this.currentTime += t;
              let i = a(0, this.currentTime / this.duration, 1),
                s = (e = i >= 1) ? 1 : this.easing(i);
              this.value = this.from + (this.to - this.from) * s;
            } else if (this.lerp) {
              var i, s, o;
              (this.value =
                ((i = this.value),
                (s = this.to),
                (1 - (o = 1 - Math.exp(-(60 * this.lerp) * t))) * i + o * s)),
                Math.round(this.value) === this.to &&
                  ((this.value = this.to), (e = !0));
            } else (this.value = this.to), (e = !0);
            e && this.stop(), this.onUpdate?.(this.value, e);
          }
          stop() {
            this.isRunning = !1;
          }
          fromTo(
            t,
            e,
            { lerp: i, duration: s, easing: o, onStart: r, onUpdate: n }
          ) {
            (this.from = this.value = t),
              (this.to = e),
              (this.lerp = i),
              (this.duration = s),
              (this.easing = o),
              (this.currentTime = 0),
              (this.isRunning = !0),
              r?.(),
              (this.onUpdate = n);
          }
        },
        c = class {
          constructor(t, e, { autoResize: i = !0, debounce: s = 250 } = {}) {
            if (((this.wrapper = t), (this.content = e), i)) {
              var o;
              let t;
              (this.debouncedResize =
                ((o = this.resize),
                function (...e) {
                  let i = this;
                  clearTimeout(t),
                    (t = setTimeout(() => {
                      (t = void 0), o.apply(i, e);
                    }, s));
                })),
                this.wrapper instanceof Window
                  ? window.addEventListener("resize", this.debouncedResize, !1)
                  : ((this.wrapperResizeObserver = new ResizeObserver(
                      this.debouncedResize
                    )),
                    this.wrapperResizeObserver.observe(this.wrapper)),
                (this.contentResizeObserver = new ResizeObserver(
                  this.debouncedResize
                )),
                this.contentResizeObserver.observe(this.content);
            }
            this.resize();
          }
          width = 0;
          height = 0;
          scrollHeight = 0;
          scrollWidth = 0;
          debouncedResize;
          wrapperResizeObserver;
          contentResizeObserver;
          destroy() {
            this.wrapperResizeObserver?.disconnect(),
              this.contentResizeObserver?.disconnect(),
              this.wrapper === window &&
                this.debouncedResize &&
                window.removeEventListener("resize", this.debouncedResize, !1);
          }
          resize = () => {
            this.onWrapperResize(), this.onContentResize();
          };
          onWrapperResize = () => {
            this.wrapper instanceof Window
              ? ((this.width = window.innerWidth),
                (this.height = window.innerHeight))
              : ((this.width = this.wrapper.clientWidth),
                (this.height = this.wrapper.clientHeight));
          };
          onContentResize = () => {
            this.wrapper instanceof Window
              ? ((this.scrollHeight = this.content.scrollHeight),
                (this.scrollWidth = this.content.scrollWidth))
              : ((this.scrollHeight = this.wrapper.scrollHeight),
                (this.scrollWidth = this.wrapper.scrollWidth));
          };
          get limit() {
            return {
              x: this.scrollWidth - this.width,
              y: this.scrollHeight - this.height,
            };
          }
        },
        d = class {
          events = {};
          emit(t, ...e) {
            let i = this.events[t] || [];
            for (let t = 0, s = i.length; t < s; t++) i[t]?.(...e);
          }
          on(t, e) {
            return (
              this.events[t]?.push(e) || (this.events[t] = [e]),
              () => {
                this.events[t] = this.events[t]?.filter((t) => e !== t);
              }
            );
          }
          off(t, e) {
            this.events[t] = this.events[t]?.filter((t) => e !== t);
          }
          destroy() {
            this.events = {};
          }
        },
        u = 100 / 6,
        p = { passive: !1 },
        m = class {
          constructor(t, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
            (this.element = t),
              (this.options = e),
              window.addEventListener("resize", this.onWindowResize, !1),
              this.onWindowResize(),
              this.element.addEventListener("wheel", this.onWheel, p),
              this.element.addEventListener("touchstart", this.onTouchStart, p),
              this.element.addEventListener("touchmove", this.onTouchMove, p),
              this.element.addEventListener("touchend", this.onTouchEnd, p);
          }
          touchStart = { x: 0, y: 0 };
          lastDelta = { x: 0, y: 0 };
          window = { width: 0, height: 0 };
          emitter = new d();
          on(t, e) {
            return this.emitter.on(t, e);
          }
          destroy() {
            this.emitter.destroy(),
              window.removeEventListener("resize", this.onWindowResize, !1),
              this.element.removeEventListener("wheel", this.onWheel, p),
              this.element.removeEventListener(
                "touchstart",
                this.onTouchStart,
                p
              ),
              this.element.removeEventListener(
                "touchmove",
                this.onTouchMove,
                p
              ),
              this.element.removeEventListener("touchend", this.onTouchEnd, p);
          }
          onTouchStart = (t) => {
            let { clientX: e, clientY: i } = t.targetTouches
              ? t.targetTouches[0]
              : t;
            (this.touchStart.x = e),
              (this.touchStart.y = i),
              (this.lastDelta = { x: 0, y: 0 }),
              this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t });
          };
          onTouchMove = (t) => {
            let { clientX: e, clientY: i } = t.targetTouches
                ? t.targetTouches[0]
                : t,
              s = -(e - this.touchStart.x) * this.options.touchMultiplier,
              o = -(i - this.touchStart.y) * this.options.touchMultiplier;
            (this.touchStart.x = e),
              (this.touchStart.y = i),
              (this.lastDelta = { x: s, y: o }),
              this.emitter.emit("scroll", { deltaX: s, deltaY: o, event: t });
          };
          onTouchEnd = (t) => {
            this.emitter.emit("scroll", {
              deltaX: this.lastDelta.x,
              deltaY: this.lastDelta.y,
              event: t,
            });
          };
          onWheel = (t) => {
            let { deltaX: e, deltaY: i, deltaMode: s } = t,
              o = 1 === s ? u : 2 === s ? this.window.width : 1,
              r = 1 === s ? u : 2 === s ? this.window.height : 1;
            (e *= o),
              (i *= r),
              (e *= this.options.wheelMultiplier),
              (i *= this.options.wheelMultiplier),
              this.emitter.emit("scroll", { deltaX: e, deltaY: i, event: t });
          };
          onWindowResize = () => {
            this.window = {
              width: window.innerWidth,
              height: window.innerHeight,
            };
          };
        },
        f = class {
          _isScrolling = !1;
          _isStopped = !1;
          _isLocked = !1;
          _preventNextNativeScrollEvent = !1;
          _resetVelocityTimeout = null;
          __rafID = null;
          isTouching;
          time = 0;
          userData = {};
          lastVelocity = 0;
          velocity = 0;
          direction = 0;
          options;
          targetScroll;
          animatedScroll;
          animate = new h();
          emitter = new d();
          dimensions;
          virtualScroll;
          constructor({
            wrapper: t = window,
            content: e = document.documentElement,
            eventsTarget: i = t,
            smoothWheel: s = !0,
            syncTouch: o = !1,
            syncTouchLerp: r = 0.075,
            touchInertiaMultiplier: n = 35,
            duration: l,
            easing: a = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            lerp: h = 0.1,
            infinite: d = !1,
            orientation: u = "vertical",
            gestureOrientation: p = "vertical",
            touchMultiplier: f = 1,
            wheelMultiplier: v = 1,
            autoResize: g = !0,
            prevent: w,
            virtualScroll: b,
            overscroll: S = !0,
            autoRaf: y = !1,
            __experimental__naiveDimensions: _ = !1,
          } = {}) {
            (window.lenisVersion = "1.1.17"),
              (t && t !== document.documentElement && t !== document.body) ||
                (t = window),
              (this.options = {
                wrapper: t,
                content: e,
                eventsTarget: i,
                smoothWheel: s,
                syncTouch: o,
                syncTouchLerp: r,
                touchInertiaMultiplier: n,
                duration: l,
                easing: a,
                lerp: h,
                infinite: d,
                gestureOrientation: p,
                orientation: u,
                touchMultiplier: f,
                wheelMultiplier: v,
                autoResize: g,
                prevent: w,
                virtualScroll: b,
                overscroll: S,
                autoRaf: y,
                __experimental__naiveDimensions: _,
              }),
              (this.dimensions = new c(t, e, { autoResize: g })),
              this.updateClassName(),
              (this.targetScroll = this.animatedScroll = this.actualScroll),
              this.options.wrapper.addEventListener(
                "scroll",
                this.onNativeScroll,
                !1
              ),
              this.options.wrapper.addEventListener(
                "pointerdown",
                this.onPointerDown,
                !1
              ),
              (this.virtualScroll = new m(i, {
                touchMultiplier: f,
                wheelMultiplier: v,
              })),
              this.virtualScroll.on("scroll", this.onVirtualScroll),
              this.options.autoRaf &&
                (this.__rafID = requestAnimationFrame(this.raf));
          }
          destroy() {
            this.emitter.destroy(),
              this.options.wrapper.removeEventListener(
                "scroll",
                this.onNativeScroll,
                !1
              ),
              this.options.wrapper.removeEventListener(
                "pointerdown",
                this.onPointerDown,
                !1
              ),
              this.virtualScroll.destroy(),
              this.dimensions.destroy(),
              this.cleanUpClassName(),
              this.__rafID && cancelAnimationFrame(this.__rafID);
          }
          on(t, e) {
            return this.emitter.on(t, e);
          }
          off(t, e) {
            return this.emitter.off(t, e);
          }
          setScroll(t) {
            this.isHorizontal
              ? (this.rootElement.scrollLeft = t)
              : (this.rootElement.scrollTop = t);
          }
          onPointerDown = (t) => {
            1 === t.button && this.reset();
          };
          onVirtualScroll = (t) => {
            if (
              "function" == typeof this.options.virtualScroll &&
              !1 === this.options.virtualScroll(t)
            )
              return;
            let { deltaX: e, deltaY: i, event: s } = t;
            if (
              (this.emitter.emit("virtual-scroll", {
                deltaX: e,
                deltaY: i,
                event: s,
              }),
              s.ctrlKey || s.lenisStopPropagation)
            )
              return;
            let o = s.type.includes("touch"),
              r = s.type.includes("wheel");
            if (
              ((this.isTouching =
                "touchstart" === s.type || "touchmove" === s.type),
              this.options.syncTouch &&
                o &&
                "touchstart" === s.type &&
                !this.isStopped &&
                !this.isLocked)
            ) {
              this.reset();
              return;
            }
            let n = 0 === e && 0 === i,
              l =
                ("vertical" === this.options.gestureOrientation && 0 === i) ||
                ("horizontal" === this.options.gestureOrientation && 0 === e);
            if (n || l) return;
            let a = s.composedPath();
            a = a.slice(0, a.indexOf(this.rootElement));
            let h = this.options.prevent;
            if (
              a.find(
                (t) =>
                  t instanceof HTMLElement &&
                  (("function" == typeof h && h?.(t)) ||
                    t.hasAttribute?.("data-lenis-prevent") ||
                    (o && t.hasAttribute?.("data-lenis-prevent-touch")) ||
                    (r && t.hasAttribute?.("data-lenis-prevent-wheel")))
              )
            )
              return;
            if (this.isStopped || this.isLocked) {
              s.preventDefault();
              return;
            }
            if (
              !(
                (this.options.syncTouch && o) ||
                (this.options.smoothWheel && r)
              )
            ) {
              (this.isScrolling = "native"),
                this.animate.stop(),
                (s.lenisStopPropagation = !0);
              return;
            }
            let c = i;
            "both" === this.options.gestureOrientation
              ? (c = Math.abs(i) > Math.abs(e) ? i : e)
              : "horizontal" === this.options.gestureOrientation && (c = e),
              (!this.options.overscroll ||
                this.options.infinite ||
                (this.options.wrapper !== window &&
                  ((this.animatedScroll > 0 &&
                    this.animatedScroll < this.limit) ||
                    (0 === this.animatedScroll && i > 0) ||
                    (this.animatedScroll === this.limit && i < 0)))) &&
                (s.lenisStopPropagation = !0),
              s.preventDefault();
            let d = o && this.options.syncTouch,
              u = o && "touchend" === s.type && Math.abs(c) > 5;
            u && (c = this.velocity * this.options.touchInertiaMultiplier),
              this.scrollTo(this.targetScroll + c, {
                programmatic: !1,
                ...(d
                  ? { lerp: u ? this.options.syncTouchLerp : 1 }
                  : {
                      lerp: this.options.lerp,
                      duration: this.options.duration,
                      easing: this.options.easing,
                    }),
              });
          };
          resize() {
            this.dimensions.resize(),
              (this.animatedScroll = this.targetScroll = this.actualScroll),
              this.emit();
          }
          emit() {
            this.emitter.emit("scroll", this);
          }
          onNativeScroll = () => {
            if (
              (null !== this._resetVelocityTimeout &&
                (clearTimeout(this._resetVelocityTimeout),
                (this._resetVelocityTimeout = null)),
              this._preventNextNativeScrollEvent)
            ) {
              this._preventNextNativeScrollEvent = !1;
              return;
            }
            if (!1 === this.isScrolling || "native" === this.isScrolling) {
              let t = this.animatedScroll;
              (this.animatedScroll = this.targetScroll = this.actualScroll),
                (this.lastVelocity = this.velocity),
                (this.velocity = this.animatedScroll - t),
                (this.direction = Math.sign(this.animatedScroll - t)),
                this.isStopped || (this.isScrolling = "native"),
                this.emit(),
                0 !== this.velocity &&
                  (this._resetVelocityTimeout = setTimeout(() => {
                    (this.lastVelocity = this.velocity),
                      (this.velocity = 0),
                      (this.isScrolling = !1),
                      this.emit();
                  }, 400));
            }
          };
          reset() {
            (this.isLocked = !1),
              (this.isScrolling = !1),
              (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity = 0),
              this.animate.stop();
          }
          start() {
            this.isStopped && (this.reset(), (this.isStopped = !1));
          }
          stop() {
            this.isStopped || (this.reset(), (this.isStopped = !0));
          }
          raf = (t) => {
            let e = t - (this.time || t);
            (this.time = t),
              this.animate.advance(0.001 * e),
              this.options.autoRaf &&
                (this.__rafID = requestAnimationFrame(this.raf));
          };
          scrollTo(
            t,
            {
              offset: e = 0,
              immediate: i = !1,
              lock: s = !1,
              duration: o = this.options.duration,
              easing: r = this.options.easing,
              lerp: n = this.options.lerp,
              onStart: l,
              onComplete: h,
              force: c = !1,
              programmatic: d = !0,
              userData: u,
            } = {}
          ) {
            if ((!this.isStopped && !this.isLocked) || c) {
              if ("string" == typeof t && ["top", "left", "start"].includes(t))
                t = 0;
              else if (
                "string" == typeof t &&
                ["bottom", "right", "end"].includes(t)
              )
                t = this.limit;
              else {
                let i;
                if (
                  ("string" == typeof t
                    ? (i = document.querySelector(t))
                    : t instanceof HTMLElement && t?.nodeType && (i = t),
                  i)
                ) {
                  if (this.options.wrapper !== window) {
                    let t = this.rootElement.getBoundingClientRect();
                    e -= this.isHorizontal ? t.left : t.top;
                  }
                  let s = i.getBoundingClientRect();
                  t =
                    (this.isHorizontal ? s.left : s.top) + this.animatedScroll;
                }
              }
              if ("number" == typeof t) {
                if (
                  ((t += e),
                  (t = Math.round(t)),
                  this.options.infinite
                    ? d &&
                      (this.targetScroll = this.animatedScroll = this.scroll)
                    : (t = a(0, t, this.limit)),
                  t === this.targetScroll)
                ) {
                  l?.(this), h?.(this);
                  return;
                }
                if (((this.userData = u ?? {}), i)) {
                  (this.animatedScroll = this.targetScroll = t),
                    this.setScroll(this.scroll),
                    this.reset(),
                    this.preventNextNativeScrollEvent(),
                    this.emit(),
                    h?.(this),
                    (this.userData = {});
                  return;
                }
                d || (this.targetScroll = t),
                  this.animate.fromTo(this.animatedScroll, t, {
                    duration: o,
                    easing: r,
                    lerp: n,
                    onStart: () => {
                      s && (this.isLocked = !0),
                        (this.isScrolling = "smooth"),
                        l?.(this);
                    },
                    onUpdate: (t, e) => {
                      (this.isScrolling = "smooth"),
                        (this.lastVelocity = this.velocity),
                        (this.velocity = t - this.animatedScroll),
                        (this.direction = Math.sign(this.velocity)),
                        (this.animatedScroll = t),
                        this.setScroll(this.scroll),
                        d && (this.targetScroll = t),
                        e || this.emit(),
                        e &&
                          (this.reset(),
                          this.emit(),
                          h?.(this),
                          (this.userData = {}),
                          this.preventNextNativeScrollEvent());
                    },
                  });
              }
            }
          }
          preventNextNativeScrollEvent() {
            (this._preventNextNativeScrollEvent = !0),
              requestAnimationFrame(() => {
                this._preventNextNativeScrollEvent = !1;
              });
          }
          get rootElement() {
            return this.options.wrapper === window
              ? document.documentElement
              : this.options.wrapper;
          }
          get limit() {
            return this.options.__experimental__naiveDimensions
              ? this.isHorizontal
                ? this.rootElement.scrollWidth - this.rootElement.clientWidth
                : this.rootElement.scrollHeight - this.rootElement.clientHeight
              : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
          }
          get isHorizontal() {
            return "horizontal" === this.options.orientation;
          }
          get actualScroll() {
            return this.isHorizontal
              ? this.rootElement.scrollLeft
              : this.rootElement.scrollTop;
          }
          get scroll() {
            var t;
            return this.options.infinite
              ? ((this.animatedScroll % (t = this.limit)) + t) % t
              : this.animatedScroll;
          }
          get progress() {
            return 0 === this.limit ? 1 : this.scroll / this.limit;
          }
          get isScrolling() {
            return this._isScrolling;
          }
          set isScrolling(t) {
            this._isScrolling !== t &&
              ((this._isScrolling = t), this.updateClassName());
          }
          get isStopped() {
            return this._isStopped;
          }
          set isStopped(t) {
            this._isStopped !== t &&
              ((this._isStopped = t), this.updateClassName());
          }
          get isLocked() {
            return this._isLocked;
          }
          set isLocked(t) {
            this._isLocked !== t &&
              ((this._isLocked = t), this.updateClassName());
          }
          get isSmooth() {
            return "smooth" === this.isScrolling;
          }
          get className() {
            let t = "lenis";
            return (
              this.isStopped && (t += " lenis-stopped"),
              this.isLocked && (t += " lenis-locked"),
              this.isScrolling && (t += " lenis-scrolling"),
              "smooth" === this.isScrolling && (t += " lenis-smooth"),
              t
            );
          }
          updateClassName() {
            this.cleanUpClassName(),
              (this.rootElement.className =
                `${this.rootElement.className} ${this.className}`.trim());
          }
          cleanUpClassName() {
            this.rootElement.className = this.rootElement.className
              .replace(/lenis(-\w+)?/g, "")
              .trim();
          }
        },
        v = i(4946);
      function g() {
        return (
          (0, o.useEffect)(() => {
            let t = new f({ duration: 1.2 });
            return (
              t.on("scroll", l().update),
              r.ZP.registerPlugin(l()),
              r.ZP.ticker.add((e) => {
                t.raf(600 * e);
              }),
              r.ZP.ticker.lagSmoothing(0),
              () => {
                l()
                  .getAll()
                  .forEach((t) => t.kill()),
                  t.destroy();
              }
            );
          }, []),
          (0, o.useEffect)(() => {
            r.ZP.to(".header-icon", {
              opacity: 1,
              visibility: "visible",
              display: "block",
              delay: 2.6,
            });
          }, []),
          (0, s.jsx)("div", {
            className:
              "pointer-events-none fixed z-50 flex w-screen items-center justify-center",
            children: (0, s.jsx)("img", {
              src: v.Z.src,
              alt: "Logo",
              width: 150,
              height: 150,
              className: "header-icon relative top-[-14px] invisible opacity-0",
            }),
          })
        );
      }
    },
    7656: function (t, e, i) {
      "use strict";
      i.d(e, {
        default: function () {
          return d;
        },
      });
      var s = i(7437),
        o = i(2265),
        r = i(4508),
        n = i(6498),
        l = i(1342),
        a = i.n(l),
        h = i(4471),
        c = i.n(h);
      function d() {
        let [t, e] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            a().create({
              trigger: "#slider-section",
              start: "top bottom",
              end: "bottom top",
              onEnterBack: () => {
                e(!1);
              },
              onEnter: () => {
                e(!0);
              },
              onLeave: () => {
                e(!1);
              },
              onLeaveBack: () => {
                e(!1);
              },
            }),
              n.ZP.to("#socials-section", {
                delay: 2.6,
                yPercent: 100,
                ease: "circ",
              });
          }, []),
          (0, s.jsx)("div", {
            id: "socials-section",
            className:
              "fixed top-0 z-50 hidden w-screen -translate-y-[100%] justify-end bg-transparent py-5 pr-10 md:flex",
            children: (0, s.jsxs)("div", {
              className: (0, r.cn)(
                c().className,
                "flex items-center gap-20 transition-all"
              ),
              children: [
                (0, s.jsx)("a", {
                  href: "https://www.dextools.io/app/en/ether/pool-explorer/0x11111111111111111111111111111111111111",
                  "aria-label": "dextools link",
                  target: "_blank",
                  rel: "noreferrer",
                  className: (0, r.cn)(
                    "relative px-2 text-lg font-medium tracking-wider text-white before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-0 before:bg-white before:transition-all before:content-[''] hover:text-black hover:before:w-full",
                    { "text-black before:bg-indigo-500 hover:text-white": t }
                  ),
                  children: "Dextools",
                }),
                (0, s.jsx)("a", {
                  href: "",
                  "aria-label": "dapp link",
                  target: "_blank",
                  rel: "noreferrer",
                  className: (0, r.cn)(
                    "relative px-2 text-lg font-medium tracking-wider text-white before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-0 before:bg-white before:transition-all before:content-[''] hover:text-black hover:before:w-full",
                    { "text-black before:bg-indigo-500 hover:text-white": t }
                  ),
                  children: "DAPP (Coming Soon)",
                }),
                (0, s.jsx)("a", {
                  href: "https://prismatic-ai.gitbook.io/prismatic-ai",
                  "aria-label": "whitepaper link",
                  target: "_blank",
                  rel: "noreferrer",
                  className: (0, r.cn)(
                    "relative cursor-pointer bg-indigo-600 px-2 text-lg font-medium tracking-wider text-white transition-all hover:bg-indigo-500"
                  ),
                  children: "Whitepaper",
                }),
              ],
            }),
          })
        );
      }
    },
    4508: function (t, e, i) {
      "use strict";
      i.d(e, {
        K: function () {
          return l;
        },
        X: function () {
          return n;
        },
        cn: function () {
          return r;
        },
      });
      var s = i(1994),
        o = i(3335);
      function r() {
        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        return (0, o.m6)((0, s.W)(e));
      }
      let n = () => {
          (document.body.style.position = "fixed"),
            (document.body.style.top = "-".concat(window.scrollY, "px"));
        },
        l = () => {
          (document.body.style.position = ""), (document.body.style.top = "");
        };
    },
    7960: function () {},
    4946: function (t, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/aa.50519743.png",
        height: 852,
        width: 1079,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAFVBMVEW5t7iysLG9vb23t7ry8fG1tLfFxMTkbMEoAAAAB3RSTlMiRgITRT1KZpsvlgAAAAlwSFlzAAAOwwAADsMBx2+oZAAAACdJREFUeJwdxskNADAQg0B8bP8tR86DESCRE3jcGSdtsqFlI4Hk8XsKegBWT6Y7hwAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    5304: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Agdasima_2c9db6', '__Agdasima_Fallback_2c9db6'",
          fontWeight: 700,
          fontStyle: "normal",
        },
        className: "__className_2c9db6",
      };
    },
    8322: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__EB_Garamond_c29382', '__EB_Garamond_Fallback_c29382'",
          fontStyle: "normal",
        },
        className: "__className_c29382",
      };
    },
    9621: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__geistMono_c3aa02', '__geistMono_Fallback_c3aa02'",
        },
        className: "__className_c3aa02",
        variable: "__variable_c3aa02",
      };
    },
    9691: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__geistSans_1e4310', '__geistSans_Fallback_1e4310'",
        },
        className: "__className_1e4310",
        variable: "__variable_1e4310",
      };
    },
    8291: function (t, e, i) {
      "use strict";
      i.d(e, {
        Analytics: function () {
          return a;
        },
      });
      var s = i(2265),
        o = () => {
          window.va ||
            (window.va = function () {
              for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
                e[i] = arguments[i];
              (window.vaq = window.vaq || []).push(e);
            });
        };
      function r() {
        return "undefined" != typeof window;
      }
      function n() {
        return "production";
      }
      function l() {
        return "development" === ((r() ? window.vam : n()) || "production");
      }
      function a(t) {
        return (
          (0, s.useEffect)(() => {
            var e;
            t.beforeSend &&
              (null == (e = window.va) ||
                e.call(window, "beforeSend", t.beforeSend));
          }, [t.beforeSend]),
          (0, s.useEffect)(() => {
            !(function () {
              var t;
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { debug: !0 };
              if (!r()) return;
              (function () {
                let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "auto";
                if ("auto" === t) {
                  window.vam = n();
                  return;
                }
                window.vam = t;
              })(e.mode),
                o(),
                e.beforeSend &&
                  (null == (t = window.va) ||
                    t.call(window, "beforeSend", e.beforeSend));
              let i =
                e.scriptSrc ||
                (l()
                  ? "https://va.vercel-scripts.com/v1/script.debug.js"
                  : "/_vercel/insights/script.js");
              if (document.head.querySelector('script[src*="'.concat(i, '"]')))
                return;
              let s = document.createElement("script");
              (s.src = i),
                (s.defer = !0),
                (s.dataset.sdkn =
                  "@vercel/analytics" +
                  (e.framework ? "/".concat(e.framework) : "")),
                (s.dataset.sdkv = "1.4.1"),
                e.disableAutoTrack && (s.dataset.disableAutoTrack = "1"),
                e.endpoint && (s.dataset.endpoint = e.endpoint),
                e.dsn && (s.dataset.dsn = e.dsn),
                (s.onerror = () => {
                  let t = l()
                    ? "Please check if any ad blockers are enabled and try again."
                    : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                  console.log(
                    "[Vercel Web Analytics] Failed to load script from "
                      .concat(i, ". ")
                      .concat(t)
                  );
                }),
                l() && !1 === e.debug && (s.dataset.debug = "false"),
                document.head.appendChild(s);
            })({
              framework: t.framework || "react",
              ...(void 0 !== t.route && { disableAutoTrack: !0 }),
              ...t,
            });
          }, []),
          (0, s.useEffect)(() => {
            t.route &&
              t.path &&
              (function (t) {
                var e;
                let { route: i, path: s } = t;
                null == (e = window.va) ||
                  e.call(window, "pageview", { route: i, path: s });
              })({ route: t.route, path: t.path });
          }, [t.route, t.path]),
          null
        );
      }
    },
  },
  function (t) {
    t.O(0, [980, 79, 538, 587, 922, 834, 971, 117, 744], function () {
      return t((t.s = 6273));
    }),
      (_N_E = t.O());
  },
]);
