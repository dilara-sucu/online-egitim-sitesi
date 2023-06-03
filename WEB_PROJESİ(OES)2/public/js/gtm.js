jQuery(function($){
    if(drupalSettings.gtmAttributes){
        dataLayer.push(drupalSettings.gtmAttributes);
    }
    $(document).on("slideChangeTransitionEnd", ".swiper-container",
        // Slider change
        function(event){
            let swiper = event.target;
            let activeSlide = $(swiper).find(".swiper-slide.swiper-slide-active");
            let dataLayerOpts = {};
            if(drupalSettings.gtmAttributes){
                dataLayerOpts = {...drupalSettings.gtmAttributes};
            }else{
                dataLayerOpts.event = "gaEvent";
            }
            delete dataLayerOpts["gtm.uniqueEventId"];
            dataLayerOpts.Category = 'Slider';
            dataLayerOpts.Action = "Slider Swiper";
            dataLayerOpts.Label = activeSlide.find("h2").first().text();
            dataLayer.push(dataLayerOpts);
        }).on("click", ".swiper-container .m-hero-carousel__item__inner a",
        // Banner click
        function(e){
            let dataLayerOpts = {};
            if(drupalSettings.gtmAttributes){
                dataLayerOpts = {...drupalSettings.gtmAttributes};
            }else{
                dataLayerOpts.event = "gaEvent";
            }
            delete dataLayerOpts["gtm.uniqueEventId"];
            dataLayerOpts.Category = 'Banner';
            dataLayerOpts.Action = "Click";
            dataLayerOpts.Label = $(this).attr("href");
            dataLayer.push(dataLayerOpts);
        }).on("click", "a", function(e){
        let url = $(this).attr("href");
        if(
            !url.startsWith("#") &&
            !url.startsWith(location.origin) &&
            (url.startsWith("http://") || url.startsWith("https://"))
        ){ // Means outbound url
            let dataLayerOpts = {};
            if(drupalSettings.gtmAttributes){
                dataLayerOpts = {...drupalSettings.gtmAttributes};
            }else{
                dataLayerOpts.event = "gaEvent";
            }
            delete dataLayerOpts["gtm.uniqueEventId"];
            dataLayerOpts.Category = 'Outbound Link';
            dataLayerOpts.Action = $(this).text();
            dataLayerOpts.Label = url;
            dataLayer.push(dataLayerOpts);
        }
    }).on("click", ".o-header__menu li > a",
        // Header menu click
        function(){
            let dataLayerOpts = {};
            if(drupalSettings.gtmAttributes){
                dataLayerOpts = {...drupalSettings.gtmAttributes};
            }else{
                dataLayerOpts.event = "gaEvent";
            }
            delete dataLayerOpts["gtm.uniqueEventId"];
            dataLayerOpts.Category = 'Navigation';
            dataLayerOpts.Action = $(this).text();
            dataLayerOpts.Label = $(this).attr("href");
            dataLayer.push(dataLayerOpts);
        }
    ).on("click", ".ask_question", function(){
        let dataLayerOpts = {};
        if(drupalSettings.gtmAttributes){
            dataLayerOpts = {...drupalSettings.gtmAttributes};
        }else{
            dataLayerOpts.event = "gaEvent";
        }
        delete dataLayerOpts["gtm.uniqueEventId"];
        dataLayerOpts.Category = 'Soru Sor';
        dataLayerOpts.Action = "Click";
        dataLayerOpts.Label = $(this).attr("value");
        dataLayer.push(dataLayerOpts);
    }).on("click", ".m-card-answer-v2-bottom-buttons__item--like, .m-like-area__item", function(){
        let dataLayerOpts = {};
        if(drupalSettings.gtmAttributes){
            dataLayerOpts = {...drupalSettings.gtmAttributes};
        }else{
            dataLayerOpts.event = "gaEvent";
        }
        delete dataLayerOpts["gtm.uniqueEventId"];
        dataLayerOpts.Category = 'Beğen';
        dataLayerOpts.Action = "Click";
        dataLayerOpts.Label = "";
        dataLayer.push(dataLayerOpts);
    }).on("change", "input[type='file']", function(e){
        let file = e.target.files[0];
        if(file){
            let dataLayerOpts = {};
            if(drupalSettings.gtmAttributes){
                dataLayerOpts = {...drupalSettings.gtmAttributes};
            }else{
                dataLayerOpts.event = "gaEvent";
            }
            delete dataLayerOpts["gtm.uniqueEventId"];
            dataLayerOpts.Category = 'Dosya Ekle';
            dataLayerOpts.Action = "Ekle";
            dataLayerOpts.Label = file.name;
            dataLayer.push(dataLayerOpts);
        }
    }).on("click", "a.a-btn[href='#courses_list']", function(e){
        let dataLayerOpts = {};
        if(drupalSettings.gtmAttributes){
            dataLayerOpts = {...drupalSettings.gtmAttributes};
        }else{
            dataLayerOpts.event = "gaEvent";
        }
        delete dataLayerOpts["gtm.uniqueEventId"];
        dataLayerOpts.Category = 'Eğitimi İncele';
        dataLayerOpts.Action = "Click";
        dataLayerOpts.Label = $(this).closest(".m-banner-with-right-image__box").find("h4").text().trim();
        dataLayer.push(dataLayerOpts);
    }).on("click", ".course-detail--card-detailed-container .m-card-detailed__action a", function(e){
        let button = $(this);
        let category = "Dersi İncele";
        if(button.hasClass("enroll_course")){
            category = "Derse Kayıt Ol";
        }
        let dataLayerOpts = {};
        if(drupalSettings.gtmAttributes){
            dataLayerOpts = {...drupalSettings.gtmAttributes};
        }else{
            dataLayerOpts.event = "gaEvent";
        }
        delete dataLayerOpts["gtm.uniqueEventId"];
        dataLayerOpts.Category = category;
        dataLayerOpts.Action = "Click";
        dataLayerOpts.Label = $(this).closest(".m-card-detailed__body").find(".m-card-detailed__text h4 span").text();
        dataLayer.push(dataLayerOpts);
    }).on("click", ".exam-area .button-area a.a-btn:contains('Sınava Başla')", function(){
        let dataLayerOpts = {};
        if(drupalSettings.gtmAttributes){
            dataLayerOpts = {...drupalSettings.gtmAttributes};
        }else{
            dataLayerOpts.event = "gaEvent";
        }
        delete dataLayerOpts["gtm.uniqueEventId"];
        dataLayerOpts.Category = "Sınava Gir";
        dataLayerOpts.Action = "Click";
        dataLayerOpts.Label = $(".exam-area .m-banner-with-right-image__box h4").text();
        dataLayer.push(dataLayerOpts);
    }).on("click", "#add_friends", function(){
        let dataLayerOpts = {};
        if(drupalSettings.gtmAttributes){
            dataLayerOpts = {...drupalSettings.gtmAttributes};
        }else{
            dataLayerOpts.event = "gaEvent";
        }
        delete dataLayerOpts["gtm.uniqueEventId"];
        dataLayerOpts.Category = "Arkadaş Ekle";
        dataLayerOpts.Action = "Click";
        dataLayerOpts.Label = "";
        dataLayer.push(dataLayerOpts);
    }).on("click", "#delete_friends", function(){
        let dataLayerOpts = {};
        if(drupalSettings.gtmAttributes){
            dataLayerOpts = {...drupalSettings.gtmAttributes};
        }else{
            dataLayerOpts.event = "gaEvent";
        }
        delete dataLayerOpts["gtm.uniqueEventId"];
        dataLayerOpts.Category = "Arkadaşlıktan Çıkar";
        dataLayerOpts.Action = "Click";
        dataLayerOpts.Label = "";
        dataLayer.push(dataLayerOpts);
    }).on("click", ".ai_sound", function(){
        let dataLayerOpts = {};
        if(drupalSettings.gtmAttributes){
            dataLayerOpts = {...drupalSettings.gtmAttributes};
        }else{
            dataLayerOpts.event = "gaEvent";
        }
        delete dataLayerOpts["gtm.uniqueEventId"];
        dataLayerOpts.Category = "Dinle";
        dataLayerOpts.Action = "Click";
        dataLayerOpts.Label = $(".m-section__title span").text();
        dataLayer.push(dataLayerOpts);
    }).on("submit", "form.m-blog-search__filter, form.m-qa-search__filter, .m-search form.m-search, form.m-job-search__filter", function(){
        let searchInput =  $(this).find("input[type='text']");
        if(searchInput.val()){
            let dataLayerOpts = {};
            if(drupalSettings.gtmAttributes){
                dataLayerOpts = {...drupalSettings.gtmAttributes};
            }else{
                dataLayerOpts.event = "gaEvent";
            }
            delete dataLayerOpts["gtm.uniqueEventId"];
            dataLayerOpts.Category = "Search Box";
            dataLayerOpts.Action = searchInput.attr("placeholder");
            dataLayerOpts.Label = searchInput.val();
            dataLayer.push(dataLayerOpts);
        }
        let filterInput = $(this).find("select#kategori, select#edit-soru-kategori");
        if(filterInput && filterInput.val() != "All"){
            let dataLayerOpts = {};
            if(drupalSettings.gtmAttributes){
                dataLayerOpts = {...drupalSettings.gtmAttributes};
            }else{
                dataLayerOpts.event = "gaEvent";
            }
            delete dataLayerOpts["gtm.uniqueEventId"];
            dataLayerOpts.Category = "Listeleme";
            dataLayerOpts.Action = "List Filter";
            dataLayerOpts.Label = filterInput.find(`option[value='${filterInput.val()}']`).text();
            dataLayer.push(dataLayerOpts);
        }
    });

    // Scroll
    let scrollSendPercentages = [25, 50, 75, 100];
    $(window).scroll(function() {
        let percentage = ( $(window).scrollTop() + window.innerHeight + 1 )/ $(document).height() * 100;
        let percentageSet = false;
        for(i in scrollSendPercentages){
            if(percentage >= scrollSendPercentages[i]){
                percentage = scrollSendPercentages[i];
                percentageSet = true;
                delete scrollSendPercentages[i];
                break;
            }
        }
        if(!percentageSet){
            return false;
        }
        let dataLayerOpts = {};
        if(drupalSettings.gtmAttributes){
            dataLayerOpts = {...drupalSettings.gtmAttributes};
        }else{
            dataLayerOpts.event = "gaEvent";
        }
        delete dataLayerOpts["gtm.uniqueEventId"];
        dataLayerOpts.Category = 'Scroll';
        dataLayerOpts.Action = "Scroll";
        dataLayerOpts.Label = percentage;
        dataLayer.push(dataLayerOpts);
    });

    if($(".course-content__main__header").length > 0){
        let dataLayerOpts = {};
        if(drupalSettings.gtmAttributes){
            dataLayerOpts = {...drupalSettings.gtmAttributes};
        }else{
            dataLayerOpts.event = "gaEvent";
        }
        delete dataLayerOpts["gtm.uniqueEventId"];
        dataLayerOpts.Category = 'Content';
        dataLayerOpts.Action = "View";
        dataLayerOpts.Label = $(".course-content__main__header h1 span").text();
        dataLayer.push(dataLayerOpts);
    }
})

$ = jQuery;
// Video info send
var iframe_list = $(".mwEmbedKalturaIframe");
if (iframe_list.length !== 0) {
    for (iframe of iframe_list) {
        var iframe = $(iframe);
        iframe.on("load", function () {
            var video = iframe.contents().find("video");

            var video_info_timer;
            var video_info_send = false;
            video.on("play", function () {
                video_info_timer = setInterval(function () {
                    video_info_send = true;
                }, 5000);
            });
            video.on("pause", function () {
                clearInterval(video_info_timer);
            });
            video.on("timeupdate", function () {
                if (video_info_send) {
                    gtmSenVideoInfo(this.duration, this.id, this.currentTime);
                    video_info_send = false;
                }
            });
        });
    }
}

let videoSendPercentages = [25, 50, 75, 100];
function gtmSenVideoInfo(duration, id, currentTime){
    let dataLayerOpts = {};
    if(drupalSettings.gtmAttributes){
        dataLayerOpts = {...drupalSettings.gtmAttributes};
    }else{
        dataLayerOpts.event = "gaEvent";
    }
    delete dataLayerOpts["gtm.uniqueEventId"];
    let percentage = (currentTime /duration * 100 ).toFixed(2);
    let percentageSet = false;
    for(i in videoSendPercentages){
        if(percentage >= videoSendPercentages[i]){
            percentage = videoSendPercentages[i];
            percentageSet = true;
            delete videoSendPercentages[i];
        }
    }
    if(!percentageSet){
        return;
    }
    dataLayerOpts.Category = "Video";
    //dataLayerOpts.Action = $(".course-content__main__header h1 span").text();
    dataLayerOpts.Action = "Play";
    dataLayerOpts.video_suresi = duration;
    dataLayerOpts.video_izlenme_suresi = currentTime;
    dataLayerOpts.Label = percentage;
    dataLayer.push(dataLayerOpts);
}
