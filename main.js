'use strict';

function ready() {


/*    var tags = document.querySelector('.fsort-tags'),
        tagsEl = tags.querySelectorAll('.fsort-tag'),
        container = document.querySelector('.fsort-container'),
        el = container.querySelectorAll('.fsort-item');
    for (var i = 0; i < tagsEl.length; i++) {
        tagsEl[i].addEventListener('click', function () {
            if (!this.classList.contains('active')) {
                this.classList.add('active');
                elPosition(this);
            }
            else {
                this.classList.remove('active');
            }
        });
    }

    function elShow() {

    }

    function elPosition(tag) {
        var elWidth = 0,
            elHeight = 0;
        var tagAttr = tag.getAttribute('data-filter');
        for (var j = 0; j < el.length; j++) {
            if (el[j].classList.contains('show') || tagAttr == el[j].getAttribute('data-slug')) {
                el[j].classList.add('show');
                el[j].style.left = elWidth + 'px';
                el[j].style.top = elHeight + 'px';
                elWidth += el[j].offsetWidth;
                container.style.height = elHeight + el[j].offsetHeight + 'px';
                if (elWidth >= container.offsetWidth) {
                    elWidth = 0;
                    elHeight += el[j].offsetHeight;
                    container.style.height = elHeight + 'px';
                }
            }
        }
    }*/


    var tags = document.querySelector('.fsort-tags'),
        tagsEl = tags.querySelectorAll('.fsort-tag'),
        container = document.querySelector('.fsort-container'),
        el = container.querySelectorAll('.fsort-item');
    var posLeft = 0;
    var curTag = [];
    for (var i = 0; i < tagsEl.length; i++) {
        tagsEl[i].addEventListener('click', function () {
            if (!this.classList.contains('active')) {
                this.classList.add('active');
                curTag.push(this.getAttribute('data-filter'));
                console.log('curen: '+curTag);
            }
            else {
                this.classList.remove('active');
                curTag.splice(curTag.indexOf(this.getAttribute('data-filter')), 1);
                console.log('curen: '+curTag);
            }
            var elTags = [];
            for (var j = 0; j < el.length; j++){
                elTags.push(el[j].getAttribute('data-slug'));
                /*elTags = {
                    number : el[j].getAttribute('data-slug')
                };*/
            }
            console.log('el tags: '+elTags);
            for (var a = 0; a < elTags.length; a++){
                var separatedTags = elTags[a].split(',');
                for (var b = 0; b < separatedTags.length; b++){
                    for(var c = 0; c < curTag.length; c++){
                        console.log(separatedTags[b],curTag[c]);
                        if(separatedTags[b] == curTag[c] && !el[a].classList.contains('show')){
                            el[a].classList.add('show');
                            el[a].style.left = posLeft+'px';
                            posLeft += el[a].offsetWidth;

                        }
                        else{
                            //el[a].classList.remove('show');
                        }
                    }
                }
            }
        });
    }



}

document.addEventListener('DOMContentLoaded',ready);
