/**
 * jsonp 模块
 */
var debug = require('debug')('jsonp')

module.exports = jsonp;

var count = 0;

function noop() {}

function jsonp(url, opts, fn) {
  if ('function' == typeof opts) {
    fn = opts;
    opts = {}
  }
  if (!opts) opts = {}

  var prefix = opts.prefix || '__jp';

  // use the callback name that was passed if one was proviced
  // otherwise generate a unique name by incrementing our counter
  var id = opts.name || (prefix + (count++))

  var param = opts.param || 'callback';
  var timeout = null != opts.timeout ? opts.timeout : 60000
  var enc = encodeURIComponent
  var target = document.getElementsByTagName('script')[0] || document.head
  var script;
  var timer;

  if (timeout) {
    timer = setTimeout(function() {
      cleanup()
      if(fn) fn(new Error('Timeout'))
    }, timeout)
  }

  function cleanup() {
    if (script.parentNode) script.parentNode.removeChild(script)
    window[id] = noop
    if (timer) clearTimeout(timer)
  }

  function cancel() {
    if (window[id]){
      cleanup()
    }
  }

  window[id] = function(data) {
    debug('jsonp got', data);
    cleanup()
    if(fn) fn(null, data)
  }

  // add qs component
  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
  // url = 'https://cdn.bootcss.com/vue/2.2.2/vue.min.js?' + param + '=' + enc(id);
  url = url.replace('?&', '?')
  debug('jsonp req "%s"', url)

  // create script
  script = document.createElement('script')
  script.src = url
  target.parentNode.insertBefore(script, target)
  return cancel
}
