(function (window) {


  function getVirusColor (size) {
    if (size > 170) {
      return '#FF4C00';
    } else if (size > 135) {
      return '#FFBC00';
    } else {
      return '#7EF138';
    }
  }

  function getEnemyColor (enemySize, mySize, multiplier) {
    var fillStyle = null;

    if (enemySize <= 10) {
      fillStyle = '#d0ffb4'; // food
    } else if (mySize >= enemySize) {
      // you can split twice
      if ((mySize / 4) > (enemySize * multiplier)) {
        fillStyle = '#4c4cff';
      }
      // you can split
      else if ((mySize / 2) > (enemySize * multiplier)) {
        fillStyle = '#7FFF00';
      }
      // you can eat
      else if (mySize > (enemySize * multiplier)) {
        fillStyle = '#006400';
      }
      // equal
      else {
        fillStyle = '#9E9E9E';
      }
    } else {
      // can split to you twice
      if ((enemySize / 4) > (mySize * multiplier)) {
        fillStyle = '#000000';
      }
      //// can split to you
      else if ((enemySize / 2) > (mySize * multiplier)) {
        fillStyle = '#ff0000';
      }
      // can eat you
      else if (enemySize > (mySize * multiplier)) {
        fillStyle = '#FBC02D';
      } else { // equal
        fillStyle = '#9E9E9E';
      }
    }

    return fillStyle;
  }

  function calcRealSize (item) {
    return item.size * item.size / 100;

  }
  var Plugin = function () {};
  Plugin.prototype = {
    multiplier: 1.34,
    total: 0,
    context: null,
    isFriend: function (item) {
      return item.name.match(/[\{\[]ВW[\}\]]/g);
    },
    update: function (myCells) {
      var mySizes = myCells.map(function (item) {
        return calcRealSize(item);
      });
      this.total = mySizes.reduce(function (sum, item) {
        return sum + item;
      }, 0);
      var minimumSize = this.total / 40; // ignore balls with .25% of mass
      this.size = Math.min.apply(null, mySizes.filter(function (item) {
        return item > minimumSize;
      }));
    },
    redraw: function (myCells, cells, context, self) {
      this.update (myCells);
      this.context = context;

      cells.forEach(function (item) {
        item.realSize = calcRealSize(item);
        item.isVirus = item.c;

        if (myCells.indexOf(item) !== -1) {
          this.modifyMyCell(item);
        } else if (this.isFriend(item)) {
          this.modifyFriendCell(item);
        } else if (item.isVirus) {
          this.modifyVirusCell(item);
        } else {
          this.modifyEnemyCell(item);
        }
      }.bind(this));
    },
    modifyMyCell: function (cell) {
      cell.color = '#9b047d';
    },
    modifyFriendCell: function (cell) {
      cell.color = '#FF00FF';
    },
    modifyVirusCell: function (cell) {
      cell.color = getVirusColor (cell.realSize);
    },
    modifyEnemyCell: function (cell) {
      cell.color = getEnemyColor(cell.realSize, this.size, this.multiplier);
    },
    drawMass: function (item) {
      if (item.size < 20) return;
      var fontSize = item.realSize * .1;
      fontSize = fontSize < 25 ? 25 : fontSize > 50 ? 50 : fontSize;

      this.context.font = fontSize.toFixed(0) + 'px Ubuntu';
      var text = item.realSize.toFixed(0),
        measure = this.context.measureText(text);
      var radius = this.size + 5;
      var offset = item.name ? (fontSize*1.4 + 20): 10;
      this.context.fillText(text, item.x - measure.width / 2, item.y + offset, radius * 2);
    }
  };

  var plugin = new Plugin ();
  window.addon = plugin;

})(window);
