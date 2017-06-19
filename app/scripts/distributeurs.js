(function(document) {

  var buttonsData = {
    fnac: {
      text: 'ACHETER',
      link: 'http://www.fnac.com/TV-Lifestyle/Par-technologie/nsh475226/w-4',
      color: 'white',
      border: '2px solid transparent',
      borderRadius: '4px',
      background: '#f5b027'
    },
    cobra: {
      link: 'http://www.cobra.fr/tv-lifestyle.html',
    },
    darty: {
      text: 'ACHETER',
      link: 'http://www.darty.com/nav/achat/hifi_video/televiseurs-led/grand_ecran_led/filtre__samsung_the_frame__368192.html',
    },
    boulanger: {
      text: 'ACHETER',
      link: 'https://www.boulanger.com/c/televiseur/_usage~tv20lifestyle',
      color: '#ff5c00',
      border: '2px solid #ff5c00',
      borderRadius: '4px',
      background: 'white'
    },
    ubaldi: {
      text: 'ACHETER',
      link: 'http://www.ubaldi.com/18/tv-lifestyle--pl2422.php',
      color: '#0A1129',
      border: '2px solid transparent',
      borderRadius: '4px',
      background: 'linear-gradient(to top,#ffd600,#ffe902,#ffd600)'
    }
  };

  var query = document.location.search;

  if (query) {

    var dist = query.split('=')[1];
    var buttonData = buttonsData[dist];

    if (buttonData) {

      var $topButton = document.querySelector('.buynow');
      var $topButtonA = $topButton.querySelector('a');
      var $topButtonCont = $topButtonA.querySelector('.cont');


      // var $section = document.querySelector('.scrollify.static');
      var $bottomButton = document.querySelector('button.fill--brown.distrib');
      var $bottomButtonA = $bottomButton.parentNode;
      var $bottomButtonCont = $bottomButtonA.querySelector('.cont');

      $topButton.style.borderRadius = buttonData.borderRadius;
      $bottomButton.style.borderRadius = buttonData.borderRadius;
      $topButtonA.setAttribute('href', buttonData.link);
      $bottomButtonA.setAttribute('href', buttonData.link);

      if (dist !== 'cobra') {
        $topButtonCont.innerHTML = buttonData.text;
        $topButtonCont.style.fontFamily = 'Arial,Helvetica,sans-serif';
        $topButtonCont.style.textTransform = 'capitalize';
        $topButton.style.background = buttonData.background;
        $topButtonCont.style.color = buttonData.color;
        $topButton.style.border = buttonData.border;

        $bottomButton.style.background = buttonData.background;
        $bottomButton.style.color = buttonData.color;
        $bottomButton.style.border = buttonData.border;
        $bottomButton.innerHTML = buttonData.text;

      } else {

        var cobraImg = 'images/partenaire/cobra_img.png';
        var $buttonHtmlTop = '<img src="' + cobraImg + '" style="" />';
        var $buttonHtmlBottom = '<img src="' + cobraImg + '" style="position: absolute; left: 50%; bottom: 2%; transform: translateX(-50%); z-index: 88;" />';

        $topButton.style.background = 'transparent';
        $topButton.style.boxShadow = 'none';
        $topButton.style.margin = '0';
        $topButton.style.width = 'auto';
        $topButtonA.style.display = 'block';
        $topButtonA.innerHTML = $buttonHtmlTop;
        $bottomButtonA.style.textAlign = 'center';
        $bottomButtonA.style.display = 'block';
        $bottomButtonA.innerHTML = $buttonHtmlBottom;

      }

      var context = document.querySelector('#content');
      var links = context.querySelectorAll('a[href^="./"]');

      for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var href = link.getAttribute('href');
        link.setAttribute('href', href + '?distributeur=' + dist);
      }

      var $fillShadow = document.querySelectorAll('.buynow .fill--shadow, .fill--brown.distrib');
      for (var j = 0; j < $fillShadow.length; j++) {
        $fillShadow[j].className = '';
      }

    }

  }

})(document);
