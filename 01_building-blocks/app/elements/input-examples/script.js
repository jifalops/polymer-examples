(function() {
  Polymer({
    is: 'input-examples',

    properties: {
      p1: String,
      p2: String,
      p3: String,
      p4: String,
      p5: {
        type: String,
        value: "default value"
      },
      p6: String,
      p7: String,
      p8: String,
      p9: String,
      p10: String,
      p11: {
        type: RegExp,
        value: /^[^\s@]+@+[^\s@]\.[^\s@]+$/
      },
      p12: {
        type: String,
        observer: "p12Observer"
      },
      p13: String,
      p14: String,
      p15: String,
      p16: String,
      p17: String,
      p18: {
        type: String,
        observer: "p18Observer"
      },
      p19: String,
      p20: String
    },

    doButtonTap: function(event) {
      event.target.innerHTML = "Tapped";
    },

    setButtonText: function(event) {
      event.target.innerHTML = escapeHTML(event.target.dataText);
    },

    getProp: function(event) {
      var target = findDataArg(event.target, 'target');
      var prop = findDataArg(event.target, 'property');
      return this.$[target][prop];
    },

    setProp: function(event) {
      var target = findDataArg(event.target, 'target');
      var prop = findDataArg(event.target, 'property');
      var value = escapeHTML(findDataArg(event.target, 'value'));

      if (target == 'this') {
        console.log('Setting this.' + prop + ' = ' + value);
        this[prop] = value;
      } else {
        console.log('Setting this.$.' + target + '.' + prop + ' = ' + value);
        this.$[target][prop] = value;
      }
    },

    p12Observer: function(value) {
      this.p13 = this.p11.test(value);
    },
    p18Observer: function(value) {
      this.$.p18.innerHTML = nl2br(escapeHTML(value));
    },
    p19select: function(event) {
      this.p19 = this.$.p19.selectionStart;
      this.p20 = this.$.p19.selectionEnd;
    },

    openD1: function() { this.$.d1.open(); },
    openD2: function() { this.$.d2.open(); },

    handleSwipe: function(event, obj) {
      console.log(event);
      console.log(obj);
    },

    toggleC1: function() { this.$.c1.toggle(); },
    toggleC2: function() { this.$.c2.toggle(); },
    toggleC3: function() { this.$.c3.toggle(); },
    toggleC4: function() { this.$.c4.toggle(); }
  });
})();
