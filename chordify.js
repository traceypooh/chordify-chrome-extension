// so good!  https://developer.chrome.com/extensions/content_scripts

$(window).on('load  resize  orientationchange', () => {
  clearTimeout(window.chordify_throttler)
  window.chordify_throttler = setTimeout(() => {
    const topht = 555

    // hide top ads from view
    window.enableAd = false
    $('#mm, #adContent, #google_center_div').css({
      height: 0,
      overflowY: 'hidden',
      'max-height': 0
    })

    // dont interrupt songs
    $('.service-value').remove()

    // declutter and get side video higher up
    $('#suggestions, .ios-banner').remove()

    // get main content to top - also allow to be superwide
    $('#content').css({'margin-top': 50, 'max-width':2000})
    // shrink height of chords area
    $('.diagrams-guitar').css({'margin-bottom': 0, height: 300})

    // center main column
    $('#song').css('float', 'none')

    // remove bottom huge overlay
    $('footer').parent().remove()

    // make top right flashing ads go south - and make animated preview full width
    $('#aside').css({'max-width':0,'max-height':0,overflow:'hidden',position:'absolute',bottom:0,right:0,display:'block'})

    // move video to fill entire bottom of page and make bigga!
    const e = $('#youtube')
    e.css({
      position: 'fixed',
      top: topht + 'px',
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      height: '' + (window.innerHeight - topht) + 'px'
    })
    // kick on controls, in case video has CC lyrics and may want to show it, etc.
    const con = () => (e  &&  e.attr('src')  &&  e.attr('src').match(/controls=0/) ?
      e.attr('src', e.attr('src').replace(/&controls=0/, '&controls=1')) : 'no-vid')
      $('#ayads-style').remove() // kill that body margin top (and obnoxi top Ad)
    con()
    setTimeout(con, 3000)

    console.log('--- [pooh chordify extension alterations done] ---')
  },
  1500) // run 1.5s after event (and dont run more frequently than that (eg: many resize events))
})
