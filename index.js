const pageList = document.getElementById('page-list');
const content = document.getElementById('content');

function get_url_params() {
    var url = window.location.href;
    var params = {};
    var parts = url.split('?');
    if (parts.length > 1) {
        parts = parts[1].split('&');
        for (var i = 0; i < parts.length; i++) {
            var key_val = parts[i].split('=');
            params[key_val[0]] = key_val[1];
        }
    }
    return params;
}
const params = get_url_params();

if (!params['page']) {
  window.location.href = 'index.html?page=introduction.md';
}

function get_pages_and_render_nav() {
  let p = new Promise((resolve, reject) => {
    var x = new XMLHttpRequest();

    x.open('GET', 'pages/listing.txt');
    x.onreadystatechange = function() {
      if (x.readyState == 4 && x.status == 200) {
        let html_parts = [];
        html_parts.push('<ul class="page-list">');
        for (var page of x.responseText.split('\n')) {
          if (page.trim() == '') {
            continue;
          }
          // ignore comments
          if (page.trimStart().startsWith('#')) {
            continue;
          }
          html_parts.push(`<li><a href='index.html?page=${encodeURIComponent(page)}'>${page}</a></li>`);
        }
        html_parts.push('</ul>');
        console.log(html_parts);
        pageList.innerHTML = html_parts.join('\n');
      }
    };
    x.send();
  });
  return p;
}


function render_page(page) {
  let p = new Promise((resolve, reject) => {
    var x = new XMLHttpRequest();

    x.open('GET', `pages/${page}`);
    x.onreadystatechange = function() {
      if (x.readyState == 4 && x.status == 200) {
        const htmlContent = marked.parse(x.responseText);
        content.innerHTML = htmlContent;
        resolve();
      }
    };
    x.send();
  });
  return p;
}



let promises = [];
promises.push(get_pages_and_render_nav());
promises.push(render_page(params['page']));

Promise.all(promises).then(() => {
  console.log('Done');
}, () => {
  console.error('Error loading pages/nav');
});



