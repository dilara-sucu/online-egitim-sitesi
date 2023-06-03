<!doctype html>
<html lang="en">
<head>
<style>



    .m-search {
        position: relative;
        line-height: 1.375rem;
        border-radius: .5rem;
        background-color: #fff;
        margin: 0 auto
    }

    .m-search.result {
        border-radius: .5rem .5rem 0 0
    }

    .m-search.result .m-search__input {
        border-radius: .5rem .5rem 0 0
    }

    .m-search.result .m-search__suggestions {
        top: 100%;
        display: block
    }

    .m-search.result .m-search__suggestions .typeahead__list {
        max-height: 22.625rem;
        overflow-y: auto
    }

    .m-search.result .m-search__suggestions .typeahead__list::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 .375rem rgba(0,0,0,0.3);
        background-color: #dee3ed
    }

    .m-search.result .m-search__suggestions .typeahead__list::-webkit-scrollbar {
        width: 3px;
        background-color: #dee3ed
    }

    .m-search.result .m-search__suggestions .typeahead__list::-webkit-scrollbar-thumb {
        background-color: #5f6b76
    }

    .m-search__speech {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex
    }

    .m-search__input {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        border-radius: .5rem;
        -webkit-box-shadow: 0 8px 10px -5px rgba(0,0,0,0.1),0 6px 30px 5px rgba(0,0,0,0.1),0 16px 24px 2px rgba(0,0,0,0.1);
        box-shadow: 0 8px 10px -5px rgba(0,0,0,0.1),0 6px 30px 5px rgba(0,0,0,0.1),0 16px 24px 2px rgba(0,0,0,0.1)
    }

    .m-search__input input {
        font-size: 1.125rem;
        line-height: 1.125rem;
        width: 100%;
        height: 100%;
        font-weight: 500;
        color: #253342;
        padding: 1.25rem .625rem 1.25rem .625rem
    }

    .m-search__input input::-webkit-input-placeholder {
        color: #5f6b76
    }

    .m-search__input input+.m-search__cancel {
        opacity: 0
    }

    .m-search__input input:focus+.m-search__cancel {
        opacity: 1
    }

    .m-search__input .a-btn-icon {
        margin-right: .5rem;
        -ms-flex-negative: 0;
        flex-shrink: 0
    }

    .m-search__input .a-btn-icon i.icon-close:before {
        font-size: 1.125rem;
        font-weight: 700
    }

    .m-search__input .a-btn-icon i:before {
        color: #5f6b76;
        font-size: 1.5rem
    }

    .m-search__input .a-btn-icon:last-child {
        margin-right: 1.5rem
    }

    .m-search__input .a-btn-icon:first-child {
        margin-left: .5rem
    }

    .m-search__powered {
        font-size: .6875rem;
        text-align: right;
        font-weight: 500;
        opacity: 0.4;
        margin: .1875rem .5rem 0 0;
        position: absolute;
        color: #fff;
        right: 0
    }

    .m-search__powered cite>a {
        font-style: normal;
        color: #fff;
        font-weight: 700
    }

    .m-search__suggestions {
        display: none;
        position: absolute;
        left: 0;
        right: 0;
        background: #fff;
        border-radius: 0 0 .5rem .5rem;
        overflow: hidden;
        z-index: 20;
        -webkit-box-shadow: 0 8px 10px -5px rgba(0,0,0,0.1),0 6px 30px 0px rgba(0,0,0,0.1),0 16px 24px 2px rgba(0,0,0,0.1);
        box-shadow: 0 8px 10px -5px rgba(0,0,0,0.1),0 6px 30px 0px rgba(0,0,0,0.1),0 16px 24px 2px rgba(0,0,0,0.1);
        text-align: left
    }

    .m-search__suggestions ul>li {
        border-bottom: 1px solid rgba(37,51,66,0.1)
    }

    .m-search__suggestions ul>li a {
        font-size: .875rem;
        color: #5f6b76;
        display: block;
        font-weight: 400
    }

    .m-search__suggestions ul>li a div {
        padding: .625rem 1.25rem
    }

    .m-search__suggestions ul>li a p {
        font-size: 1rem;
        color: #253342;
        font-weight: 500;
        margin-top: .3125rem
    }

    .m-search__suggestions ul>li a strong {
        color: #009ed8;
        font-weight: 500
    }

    .m-search__suggestions ul>li:first-child a {
        border: 0
    }

    .m-search__suggestions ul>li:hover {
        background-color: rgba(223,227,236,0.3)
    }

    .m-search__suggestions span {
        color: #8e9fad;
        font-size: .875rem;
        font-weight: 500
    }

    .m-search__suggestions mark {
        background-color: transparent;
        color: #009ed8;
        font-weight: 700
    }

    .m-search__results {
        color: #2855ac;
        font-weight: 700;
        font-size: 1rem;
        padding: 1.25rem;
        display: block
    }

    .m-search__results:hover {
        background-color: rgba(223,227,236,0.3)
    }

    .m-search__recommended {
        background-color: rgba(223,227,236,0.3);
        position: relative
    }

    .m-search__recommended mark {
        font-size: .6875rem;
        text-align: right;
        font-weight: 700;
        opacity: 0.4;
        margin: .375rem .5rem 0 0;
        position: absolute;
        color: #8e9fad;
        top: 0;
        right: 0
    }

    .m-search__gray {
        background-color: #ecf0f2;
        border-radius: .5rem;
        -webkit-box-shadow: none;
        box-shadow: none
    }

    .m-search__gray input {
        font-weight: 700;
        color: #253342;
        background-color: #ecf0f2;
        border-radius: 0%
    }

    .m-search__gray input::-webkit-input-placeholder {
        color: #253342
    }

    .m-search__gray:focus-within {
        background-color: #fff;
        -webkit-box-shadow: 0 8px 10px -5px rgba(0,0,0,0.1),0 6px 30px 5px rgba(0,0,0,0.1),0 16px 24px 2px rgba(0,0,0,0.1);
        box-shadow: 0 8px 10px -5px rgba(0,0,0,0.1),0 6px 30px 5px rgba(0,0,0,0.1),0 16px 24px 2px rgba(0,0,0,0.1)
    }

    .m-search__gray ~ .m-search__powered {
        color: #253342
    }

    .m-search__gray ~ .m-search__powered cite>a {
        color: #253342
    }

    .icon-facebook::before {
        content: "\EA01"
    }

    .icon-replies::before {
        content: "\EA02"
    }

    .icon-eye::before {
        content: "\EA03"
    }

    .icon-arrow-left::before,.m-card-question__link:after,.o-header__menu__submenu>ul>li a:after,.o-header__user__profile__dropdown__top__link:after,.o-header__user__profile__dropdown__profile__action__link:after,.o-header__user__profile__dropdown__notifications__action__link:after,.o-header__user__profile__dropdown__badges__link:after {
        content: "\EA04"
    }

    .icon-hamburger::before {
        content: "\EA05"
    }

    .icon-turkcell-logo-2::before {
        content: "\EA06"
    }

    .icon-delete::before,.m-card-question__editable__action--del:before {
        content: "\EA07"
    }

    .icon-error::before {
        content: "\EA08"
    }

    .icon-attachment::before {
        content: "\EA09"
    }

    .icon-filter::before {
        content: "\EA10"
    }

    .icon-sort-desc::before {
        content: "\EA11"
    }

    .icon-check-round::before {
        content: "\EA12"
    }

    .icon-check::before {
        content: "\EA13"
    }

    .icon-star-filled-v2::before {
        content: "\EA14"
    }

    .icon-close::before {
        content: "\EA18"
    }

    .icon-add-round::before {
        content: "\EA1B"
    }

    .icon-faq::before {
        content: "\EA25"
    }

    .icon-instagram::before {
        content: "\EA2E"
    }

    .icon-microphone::before {
        content: "\EA3A"
    }

    .icon-like::before {
        content: "\EA3E"
    }

    .icon-eye-closed::before {
        content: "\EA41"
    }

    .icon-hizli-giris::before {
        content: "\EA48"
    }

    .icon-resize-radius::before {
        content: "\EA49"
    }

    .icon-settings::before,.o-header__user__profile__dropdown__bottom__settings span:after {
        content: "\EA4A"
    }

    .icon-linkedin::before {
        content: "\EA4E"
    }

    .icon-search::before {
        content: "\EA50"
    }

    .icon-question::before {
        content: "\EA51"
    }

    .icon-reply-line::before {
        content: "\EA52"
    }

    .icon-comment::before {
        content: "\EA53"
    }

    .icon-upload-file::before {
        content: "\EA56"
    }

    .icon-attach::before {
        content: "\EA57"
    }

    .icon-embed::before {
        content: "\EA58"
    }

    .icon-quote::before {
        content: "\EA59"
    }

    .icon-mail::before {
        content: "\EA5E"
    }

    .icon-turkcell-logo::before {
        content: "\EA60"
    }

    .icon-twitter::before {
        content: "\EA61"
    }

    .icon-bold::before {
        content: "\EA62"
    }

    .icon-italic::before {
        content: "\EA63"
    }

    .icon-underline::before {
        content: "\EA64"
    }

    .icon-bullets::before {
        content: "\EA65"
    }

    .icon-link::before {
        content: "\EA66"
    }

    .icon-unlink::before {
        content: "\EA67"
    }

    .icon-addimage::before {
        content: "\EA68"
    }

    .icon-youtube::before {
        content: "\EA69"
    }

    .icon-telephone::before {
        content: "\EA6E"
    }

    .icon-certificate::before {
        content: "\EA70"
    }

    .icon-play::before {
        content: "\EA71"
    }

    .icon-clock::before {
        content: "\EA72"
    }

    .icon-level::before {
        content: "\EA73"
    }

    .icon-user::before {
        content: "\EA74"
    }

    .icon-google-plus::before {
        content: "\EA75"
    }

    .icon-github::before {
        content: "\EA76"
    }

    .icon-quick-login::before {
        content: "\EA77"
    }

    .icon-return::before {
        content: "\EA78"
    }

    .icon-calendar::before {
        content: "\EA79"
    }

    .icon-close-round::before {
        content: "\EA7E"
    }

    .icon-arrow-active::before {
        content: "\EA80"
    }

    .icon-exam::before {
        content: "\EA81"
    }

    .icon-badge::before {
        content: "\EA82"
    }

    .icon-notes::before {
        content: "\EA83"
    }

    .icon-bookmark-filled::before {
        content: "\EA84"
    }

    .icon-bookmark::before {
        content: "\EA85"
    }

    .icon-copy::before {
        content: "\EA86"
    }

    .icon-resize::before {
        content: "\EA87"
    }

    .icon-lock::before {
        content: "\EA88"
    }

    .icon-unlocked::before {
        content: "\EA89"
    }

    .icon-info::before {
        content: "\EA8E"
    }

    .icon-minus::before {
        content: "\EA90"
    }

    .icon-plus::before {
        content: "\EA91"
    }

    .icon-edit::before,.m-card-question__editable__action--edit:before {
        content: "\EA92"
    }

    .icon-reply::before {
        content: "\EA93"
    }

    .icon-sort::before {
        content: "\EA94"
    }

    .icon-share::before,.o-header__user__profile__dropdown__bottom__logout span:after {
        content: "\EA95"
    }

    .icon-star::before {
        content: "\EA96"
    }

    .icon-star-filled::before {
        content: "\EA97"
    }

    .icon-arrow-down-curved::before,.o-header__user__profile__dropdown__arrow:after {
        content: "\EA98"
    }

    .icon-sort-asc::before {
        content: "\EA99"
    }

    .icon-target::before {
        content: "\EA9E"
    }

    .notifications {
        background-image: -webkit-gradient(linear, left top, left bottom, color-stop(100%, #ecf0f2), color-stop(-40%, #fcfcfc));
        background-image: -o-linear-gradient(top, #ecf0f2 100%, #fcfcfc -40%);
        background-image: linear-gradient(180deg, #ecf0f2 100%, #fcfcfc -40%);
        padding: 3.75rem 0 3.125rem 0
    }

    .notifications .m-section__title {
        margin: 0 0 1.5625rem 0
    }

    @media screen and (max-width: 767px) {
        .notifications .m-section__title {
            -webkit-box-orient:vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column
        }

        .notifications .m-section__title .link {
            margin-top: 5px
        }
    }

    .notifications__content {
        max-width: 780px;
        margin: 0 auto;
        width: calc(100% - 20px)
    }

    .notifications__content .notification {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: .5rem;
        border: solid 1px #dee3ed;
        background-color: #E9ECEF;
        padding: .625rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding-right: 1.25rem;
        margin-top: 1.25rem
    }

    @media screen and (max-width: 767px) {
        .notifications__content .notification {
            -webkit-box-align:end;
            -ms-flex-align: end;
            align-items: end
        }
    }

    .notifications__content .notification:first-child {
        margin-top: 0
    }

    .notifications__content .notification a {
        color: #2855ac;
        font-weight: bold;
        cursor: pointer
    }

    .notifications__content .notification--unread {
        background: #fff;
        border-color: #fff
    }

    .notifications__content .notification:hover {
        background: #fff;
        border: solid 1px #dee3ed
    }

    .notifications__content .notification__picture {
        width: 40px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        margin-right: .9375rem
    }

    .notifications__content .notification__picture img {
        display: block;
        width: 100%
    }

    .notifications__content .notification__content {
        font-size: 1rem;
        line-height: 1.33;
        color: #253342
    }

    .notifications__content .notification__content--flex {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        width: 100%
    }

    @media screen and (max-width: 767px) {
        .notifications__content .notification__content--flex {
            -webkit-box-orient:vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column
        }
    }

    .notifications__content .notification__content span {
        display: block;
        font-weight: 500
    }

    .notifications__content .notification__content b {
        display: block
    }

    .notifications__content .notification__buttons {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }

    @media screen and (max-width: 767px) {
        .notifications__content .notification__buttons {
            width:100%;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            margin-top: 26px
        }
    }

    .notifications__content .notification__buttons a {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #2855ac;
        margin-left: 30px;
        font-size: .875rem;
        font-weight: bold;
        white-space: nowrap
    }

    .notifications__content .notification__buttons a:first-child {
        margin-left: 0
    }

    .notifications__with-question .notification {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0
    }

    .notifications__with-question .notification:hover {
        border-color: transparent
    }

    .notifications__with-question .notification+.m-card-question {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        -webkit-box-shadow: none;
        box-shadow: none;
        border-top: 1px solid #dee3ed
    }

    .notifications .a-icon {
        margin-right: 10px
    }

    .notifications .a-icon:before {
        font-size: 18px !important
    }

    .icon-check-2::before {
        content: "\EA1E"
    }

    .m-flex {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap
    }

    .m-flex>* {
        max-width: 100%;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -ms-flex-preferred-size: 0;
        flex-basis: 0
    }

    .m-flex>:first-child {
        margin-left: 0
    }

    .m-flex>:last-child {
        margin-right: 0
    }

    .m-flex--evenly {
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        margin: 0 8.333%
    }

    .m-flex--evenly>* {
        max-width: auto;
        -webkit-box-flex: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }

    .m-flex--evenly>div {
        margin: 0 2.1875rem
    }

    .m-flex--start {
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        margin: 0
    }

    .m-flex--start>* {
        max-width: auto;
        -webkit-box-flex: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }

    .m-flex--start>div {
        margin: 0 .625rem
    }

    @media screen and (max-width: 767px) {
        .m-flex--center-mobile {
            -webkit-box-pack:center;
            -ms-flex-pack: center;
            justify-content: center
        }
    }

    @media screen and (max-width: 767px) {
        .m-flex--center-mobile>* {
            max-width:unset;
            -webkit-box-flex: 0;
            -ms-flex-positive: 0;
            flex-grow: 0;
            -ms-flex-preferred-size: auto;
            flex-basis: auto
        }
    }

    .m-tab-default {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap
    }

    .m-tab-default__items {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        max-width: 100%;
        border-bottom: 1px solid #dee3ed;
        margin: 0 auto;
        position: relative;
        width: 100%
    }

    .m-tab-default__items--desc {
        position: relative
    }

    .m-tab-default__items--desc:hover {
        color: #2855ac
    }

    .m-tab-default__items--desc:hover:after {
        content: "";
        width: 100%;
        height: .1875rem;
        background: #2855ac;
        border-radius: 1.5px;
        position: absolute;
        left: 0;
        bottom: -1px
    }

    .m-tab-default__items--desc.m-tab-default__item--active a {
        color: #2855ac;
        font-weight: 700
    }

    .m-tab-default__items--desc.m-tab-default__item--active:after {
        content: "";
        width: 100%;
        height: 3px;
        background: #2855ac;
        border-radius: 2px;
        position: absolute;
        left: 0;
        bottom: -1px
    }

    .m-tab-default__items--desc a {
        font-size: 1.125rem;
        font-weight: 500;
        position: relative;
        line-height: 1.33;
        text-align: center;
        color: #8e9fad;
        padding: .875rem 1rem;
        text-decoration: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        height: 100%
    }

    @media screen and (max-width: 600px) {
        .m-tab-default__items--desc a {
            padding-left:10px;
            padding-right: 10px;
            font-size: 16px
        }
    }

    .m-tab-default__items--desc a bdi {
        margin-left: 4px
    }

    .m-tab-default__items--desc a sub {
        font-size: 1.125rem
    }

    .m-tab-default__items--desc a span {
        display: block;
        font-size: .875rem;
        line-height: 1.57;
        font-weight: 400;
        text-align: center;
        color: #5f6b76;
        width: 100%
    }

    .m-tab-default__panes {
        width: 100%
    }

    .m-tab-default__panes .m-tab-default__pane {
        opacity: 0;
        padding: 2.5rem 0 0;
        -webkit-transition: 400ms ease-in-out;
        -o-transition: 400ms ease-in-out;
        transition: 400ms ease-in-out;
        -webkit-transition-property: opacity;
        -o-transition-property: opacity;
        transition-property: opacity;
        will-change: opacity;
        position: absolute;
        z-index: -1;
        pointer-events: none;
        top: -9999px;
        display: none
    }

    .m-tab-default__panes .m-tab-default__pane.m-tab-default__pane--active {
        opacity: 1;
        position: static;
        z-index: initial;
        pointer-events: initial;
        display: block
    }

    .m-tab-default__panes .m-tab-default__pane.m-tab-default__pane--inactive {
        -webkit-transition: none;
        -o-transition: none;
        transition: none;
        display: none
    }

    .m-tab-default.m-tab--icon .m-tab-default__items {
        width: 100%;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }

    .m-tab-default.m-tab--icon .m-tab-default__items--desc {
        width: 50%;
        max-width: 24.375rem
    }

    .m-tab-default.m-tab--icon .m-tab-default__items--desc .a-icon {
        margin-right: .5rem
    }

    .m-tab-default.m-tab--icon .m-tab-default__items--desc .a-icon:before {
        display: block
    }

    .m-tab-default.m-tab--centered .m-tab-default__items {
        width: 100%;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }

    .m-tab-default.m-tab--centered .m-tab-default__items--desc a {
        padding: 1rem 2.25rem
    }

    @media screen and (max-width: 600px) {
        .m-tab-default.m-tab--centered .m-tab-default__items--desc a {
            padding-left:10px;
            padding-right: 10px
        }
    }

    .m-tab-default__pane__text {
        margin-bottom: 40px
    }

    .m-tab-default--b .m-tab-default__pane {
        padding-top: 20px
    }

    .m-tab-default--b .m-tab-default__pane p {
        color: #8e9fad;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.44;
        letter-spacing: -0.34px;
        margin: 0 0 20px
    }

    .icon-facebook::before {
        content: "\EA01"
    }

    .icon-replies::before {
        content: "\EA02"
    }

    .icon-eye::before {
        content: "\EA03"
    }

    .icon-arrow-left::before,.m-card-question__link:after,.o-header__menu__submenu>ul>li a:after,.o-header__user__profile__dropdown__top__link:after,.o-header__user__profile__dropdown__profile__action__link:after,.o-header__user__profile__dropdown__notifications__action__link:after,.o-header__user__profile__dropdown__badges__link:after {
        content: "\EA04"
    }

    .icon-hamburger::before {
        content: "\EA05"
    }

    .icon-turkcell-logo-2::before {
        content: "\EA06"
    }

    .icon-delete::before,.m-card-question__editable__action--del:before {
        content: "\EA07"
    }

    .icon-error::before {
        content: "\EA08"
    }

    .icon-attachment::before {
        content: "\EA09"
    }

    .icon-filter::before {
        content: "\EA10"
    }

    .icon-sort-desc::before {
        content: "\EA11"
    }

    .icon-check-round::before {
        content: "\EA12"
    }

    .icon-check::before {
        content: "\EA13"
    }

    .icon-star-filled-v2::before {
        content: "\EA14"
    }

    .icon-close::before {
        content: "\EA18"
    }

    .icon-add-round::before {
        content: "\EA1B"
    }

    .icon-faq::before {
        content: "\EA25"
    }

    .icon-instagram::before {
        content: "\EA2E"
    }

    .icon-microphone::before {
        content: "\EA3A"
    }

    .icon-like::before {
        content: "\EA3E"
    }

    .icon-eye-closed::before {
        content: "\EA41"
    }

    .icon-hizli-giris::before {
        content: "\EA48"
    }

    .icon-resize-radius::before {
        content: "\EA49"
    }

    .icon-settings::before,.o-header__user__profile__dropdown__bottom__settings span:after {
        content: "\EA4A"
    }

    .icon-linkedin::before {
        content: "\EA4E"
    }

    .icon-search::before {
        content: "\EA50"
    }

    .icon-question::before {
        content: "\EA51"
    }

    .icon-reply-line::before {
        content: "\EA52"
    }

    .icon-comment::before {
        content: "\EA53"
    }

    .icon-upload-file::before {
        content: "\EA56"
    }

    .icon-attach::before {
        content: "\EA57"
    }

    .icon-embed::before {
        content: "\EA58"
    }

    .icon-quote::before {
        content: "\EA59"
    }

    .icon-mail::before {
        content: "\EA5E"
    }

    .icon-turkcell-logo::before {
        content: "\EA60"
    }

    .icon-twitter::before {
        content: "\EA61"
    }

    .icon-bold::before {
        content: "\EA62"
    }

    .icon-italic::before {
        content: "\EA63"
    }

    .icon-underline::before {
        content: "\EA64"
    }

    .icon-bullets::before {
        content: "\EA65"
    }

    .icon-link::before {
        content: "\EA66"
    }

    .icon-unlink::before {
        content: "\EA67"
    }

    .icon-addimage::before {
        content: "\EA68"
    }

    .icon-youtube::before {
        content: "\EA69"
    }

    .icon-telephone::before {
        content: "\EA6E"
    }

    .icon-certificate::before {
        content: "\EA70"
    }

    .icon-play::before {
        content: "\EA71"
    }

    .icon-clock::before {
        content: "\EA72"
    }

    .icon-level::before {
        content: "\EA73"
    }

    .icon-user::before {
        content: "\EA74"
    }

    .icon-google-plus::before {
        content: "\EA75"
    }

    .icon-github::before {
        content: "\EA76"
    }

    .icon-quick-login::before {
        content: "\EA77"
    }

    .icon-return::before {
        content: "\EA78"
    }

    .icon-calendar::before {
        content: "\EA79"
    }

    .icon-close-round::before {
        content: "\EA7E"
    }

    .icon-arrow-active::before {
        content: "\EA80"
    }

    .icon-exam::before {
        content: "\EA81"
    }

    .icon-badge::before {
        content: "\EA82"
    }

    .icon-notes::before {
        content: "\EA83"
    }

    .icon-bookmark-filled::before {
        content: "\EA84"
    }

    .icon-bookmark::before {
        content: "\EA85"
    }

    .icon-copy::before {
        content: "\EA86"
    }

    .icon-resize::before {
        content: "\EA87"
    }

    .icon-lock::before {
        content: "\EA88"
    }

    .icon-unlocked::before {
        content: "\EA89"
    }

    .icon-info::before {
        content: "\EA8E"
    }

    .icon-minus::before {
        content: "\EA90"
    }

    .icon-plus::before {
        content: "\EA91"
    }

    .icon-edit::before,.m-card-question__editable__action--edit:before {
        content: "\EA92"
    }

    .icon-reply::before {
        content: "\EA93"
    }

    .icon-sort::before {
        content: "\EA94"
    }

    .icon-share::before,.o-header__user__profile__dropdown__bottom__logout span:after {
        content: "\EA95"
    }

    .icon-star::before {
        content: "\EA96"
    }

    .icon-star-filled::before {
        content: "\EA97"
    }

    .icon-arrow-down-curved::before,.o-header__user__profile__dropdown__arrow:after {
        content: "\EA98"
    }

    .icon-sort-asc::before {
        content: "\EA99"
    }

    .icon-target::before {
        content: "\EA9E"
    }

    .notifications {
        background-image: -webkit-gradient(linear, left top, left bottom, color-stop(100%, #ecf0f2), color-stop(-40%, #fcfcfc));
        background-image: -o-linear-gradient(top, #ecf0f2 100%, #fcfcfc -40%);
        background-image: linear-gradient(180deg, #ecf0f2 100%, #fcfcfc -40%);
        padding: 3.75rem 0 3.125rem 0
    }

    .notifications .m-section__title {
        margin: 0 0 1.5625rem 0
    }

    @media screen and (max-width: 767px) {
        .notifications .m-section__title {
            -webkit-box-orient:vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column
        }

        .notifications .m-section__title .link {
            margin-top: 5px
        }
    }

    .notifications__content {
        max-width: 780px;
        margin: 0 auto;
        width: calc(100% - 20px)
    }

    .notifications__content .notification {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: .5rem;
        border: solid 1px #dee3ed;
        background-color: #E9ECEF;
        padding: .625rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding-right: 1.25rem;
        margin-top: 1.25rem
    }

    @media screen and (max-width: 767px) {
        .notifications__content .notification {
            -webkit-box-align:end;
            -ms-flex-align: end;
            align-items: end
        }
    }

    .notifications__content .notification:first-child {
        margin-top: 0
    }

    .notifications__content .notification a {
        color: #2855ac;
        font-weight: bold;
        cursor: pointer
    }

    .notifications__content .notification--unread {
        background: #fff;
        border-color: #fff
    }

    .notifications__content .notification:hover {
        background: #fff;
        border: solid 1px #dee3ed
    }

    .notifications__content .notification__picture {
        width: 40px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        margin-right: .9375rem
    }

    .notifications__content .notification__picture img {
        display: block;
        width: 100%
    }

    .notifications__content .notification__content {
        font-size: 1rem;
        line-height: 1.33;
        color: #253342
    }

    .notifications__content .notification__content--flex {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        width: 100%
    }

    @media screen and (max-width: 767px) {
        .notifications__content .notification__content--flex {
            -webkit-box-orient:vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column
        }
    }

    .notifications__content .notification__content span {
        display: block;
        font-weight: 500
    }

    .notifications__content .notification__content b {
        display: block
    }

    .notifications__content .notification__buttons {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }

    @media screen and (max-width: 767px) {
        .notifications__content .notification__buttons {
            width:100%;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            margin-top: 26px
        }
    }

    .notifications__content .notification__buttons a {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #2855ac;
        margin-left: 30px;
        font-size: .875rem;
        font-weight: bold;
        white-space: nowrap
    }

    .notifications__content .notification__buttons a:first-child {
        margin-left: 0
    }

    .notifications__with-question .notification {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0
    }

    .notifications__with-question .notification:hover {
        border-color: transparent
    }

    .notifications__with-question .notification+.m-card-question {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        -webkit-box-shadow: none;
        box-shadow: none;
        border-top: 1px solid #dee3ed
    }

    .notifications .a-icon {
        margin-right: 10px
    }

    .notifications .a-icon:before {
        font-size: 18px !important
    }

    .icon-check-2::before {
        content: "\EA1E"
    }

    .m-flex {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap
    }

    .m-flex>* {
        max-width: 100%;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -ms-flex-preferred-size: 0;
        flex-basis: 0
    }

    .m-flex>:first-child {
        margin-left: 0
    }

    .m-flex>:last-child {
        margin-right: 0
    }

    .m-flex--evenly {
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        margin: 0 8.333%
    }

    .m-flex--evenly>* {
        max-width: auto;
        -webkit-box-flex: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }

    .m-flex--evenly>div {
        margin: 0 2.1875rem
    }

    .m-flex--start {
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        margin: 0
    }

    .m-flex--start>* {
        max-width: auto;
        -webkit-box-flex: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -ms-flex-preferred-size: auto;
        flex-basis: auto
    }

    .m-flex--start>div {
        margin: 0 .625rem
    }

    @media screen and (max-width: 767px) {
        .m-flex--center-mobile {
            -webkit-box-pack:center;
            -ms-flex-pack: center;
            justify-content: center
        }
    }

    @media screen and (max-width: 767px) {
        .m-flex--center-mobile>* {
            max-width:unset;
            -webkit-box-flex: 0;
            -ms-flex-positive: 0;
            flex-grow: 0;
            -ms-flex-preferred-size: auto;
            flex-basis: auto
        }
    }

    .m-tab-default {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap
    }

    .m-tab-default__items {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        max-width: 100%;
        border-bottom: 1px solid #dee3ed;
        margin: 0 auto;
        position: relative;
        width: 100%
    }

    .m-tab-default__items--desc {
        position: relative
    }

    .m-tab-default__items--desc:hover {
        color: #2855ac
    }

    .m-tab-default__items--desc:hover:after {
        content: "";
        width: 100%;
        height: .1875rem;
        background: #2855ac;
        border-radius: 1.5px;
        position: absolute;
        left: 0;
        bottom: -1px
    }

    .m-tab-default__items--desc.m-tab-default__item--active a {
        color: #2855ac;
        font-weight: 700
    }

    .m-tab-default__items--desc.m-tab-default__item--active:after {
        content: "";
        width: 100%;
        height: 3px;
        background: #2855ac;
        border-radius: 2px;
        position: absolute;
        left: 0;
        bottom: -1px
    }

    .m-tab-default__items--desc a {
        font-size: 1.125rem;
        font-weight: 500;
        position: relative;
        line-height: 1.33;
        text-align: center;
        color: #8e9fad;
        padding: .875rem 1rem;
        text-decoration: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        height: 100%
    }

    @media screen and (max-width: 600px) {
        .m-tab-default__items--desc a {
            padding-left:10px;
            padding-right: 10px;
            font-size: 16px
        }
    }

    .m-tab-default__items--desc a bdi {
        margin-left: 4px
    }

    .m-tab-default__items--desc a sub {
        font-size: 1.125rem
    }

    .m-tab-default__items--desc a span {
        display: block;
        font-size: .875rem;
        line-height: 1.57;
        font-weight: 400;
        text-align: center;
        color: #5f6b76;
        width: 100%
    }

    .m-tab-default__panes {
        width: 100%
    }

    .m-tab-default__panes .m-tab-default__pane {
        opacity: 0;
        padding: 2.5rem 0 0;
        -webkit-transition: 400ms ease-in-out;
        -o-transition: 400ms ease-in-out;
        transition: 400ms ease-in-out;
        -webkit-transition-property: opacity;
        -o-transition-property: opacity;
        transition-property: opacity;
        will-change: opacity;
        position: absolute;
        z-index: -1;
        pointer-events: none;
        top: -9999px;
        display: none
    }

    .m-tab-default__panes .m-tab-default__pane.m-tab-default__pane--active {
        opacity: 1;
        position: static;
        z-index: initial;
        pointer-events: initial;
        display: block
    }

    .m-tab-default__panes .m-tab-default__pane.m-tab-default__pane--inactive {
        -webkit-transition: none;
        -o-transition: none;
        transition: none;
        display: none
    }

    .m-tab-default.m-tab--icon .m-tab-default__items {
        width: 100%;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }

    .m-tab-default.m-tab--icon .m-tab-default__items--desc {
        width: 50%;
        max-width: 24.375rem
    }

    .m-tab-default.m-tab--icon .m-tab-default__items--desc .a-icon {
        margin-right: .5rem
    }

    .m-tab-default.m-tab--icon .m-tab-default__items--desc .a-icon:before {
        display: block
    }

    .m-tab-default.m-tab--centered .m-tab-default__items {
        width: 100%;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }

    .m-tab-default.m-tab--centered .m-tab-default__items--desc a {
        padding: 1rem 2.25rem
    }

    @media screen and (max-width: 600px) {
        .m-tab-default.m-tab--centered .m-tab-default__items--desc a {
            padding-left:10px;
            padding-right: 10px
        }
    }

    .m-tab-default__pane__text {
        margin-bottom: 40px
    }

    .m-tab-default--b .m-tab-default__pane {
        padding-top: 20px
    }

    .m-tab-default--b .m-tab-default__pane p {
        color: #8e9fad;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.44;
        letter-spacing: -0.34px;
        margin: 0 0 20px
    }

    .icon-facebook::before {
        content: "\EA01"
    }

    .icon-replies::before {
        content: "\EA02"
    }

    .icon-eye::before {
        content: "\EA03"
    }

    .icon-arrow-left::before,.m-card-question__link:after,.o-header__menu__submenu>ul>li a:after,.o-header__user__profile__dropdown__top__link:after,.o-header__user__profile__dropdown__profile__action__link:after,.o-header__user__profile__dropdown__notifications__action__link:after,.o-header__user__profile__dropdown__badges__link:after {
        content: "\EA04"
    }

    .icon-hamburger::before {
        content: "\EA05"
    }

    .icon-turkcell-logo-2::before {
        content: "\EA06"
    }

    .icon-delete::before,.m-card-question__editable__action--del:before {
        content: "\EA07"
    }

    .icon-error::before {
        content: "\EA08"
    }

    .icon-attachment::before {
        content: "\EA09"
    }

    .icon-filter::before {
        content: "\EA10"
    }

    .icon-sort-desc::before {
        content: "\EA11"
    }

    .icon-check-round::before {
        content: "\EA12"
    }

    .icon-check::before {
        content: "\EA13"
    }

    .icon-star-filled-v2::before {
        content: "\EA14"
    }

    .icon-close::before {
        content: "\EA18"
    }

    .icon-add-round::before {
        content: "\EA1B"
    }

    .icon-faq::before {
        content: "\EA25"
    }

    .icon-instagram::before {
        content: "\EA2E"
    }

    .icon-microphone::before {
        content: "\EA3A"
    }

    .icon-like::before {
        content: "\EA3E"
    }

    .icon-eye-closed::before {
        content: "\EA41"
    }

    .icon-hizli-giris::before {
        content: "\EA48"
    }

    .icon-resize-radius::before {
        content: "\EA49"
    }

    .icon-settings::before,.o-header__user__profile__dropdown__bottom__settings span:after {
        content: "\EA4A"
    }

    .icon-linkedin::before {
        content: "\EA4E"
    }

    .icon-search::before {
        content: "\EA50"
    }

    .icon-question::before {
        content: "\EA51"
    }

    .icon-reply-line::before {
        content: "\EA52"
    }

    .icon-comment::before {
        content: "\EA53"
    }

    .icon-upload-file::before {
        content: "\EA56"
    }

    .icon-attach::before {
        content: "\EA57"
    }

    .icon-embed::before {
        content: "\EA58"
    }

    .icon-quote::before {
        content: "\EA59"
    }

    .icon-mail::before {
        content: "\EA5E"
    }

    .icon-turkcell-logo::before {
        content: "\EA60"
    }

    .icon-twitter::before {
        content: "\EA61"
    }

    .icon-bold::before {
        content: "\EA62"
    }

    .icon-italic::before {
        content: "\EA63"
    }

    .icon-underline::before {
        content: "\EA64"
    }

    .icon-bullets::before {
        content: "\EA65"
    }

    .icon-link::before {
        content: "\EA66"
    }

    .icon-unlink::before {
        content: "\EA67"
    }

    .icon-addimage::before {
        content: "\EA68"
    }

    .icon-youtube::before {
        content: "\EA69"
    }

    .icon-telephone::before {
        content: "\EA6E"
    }

    .icon-certificate::before {
        content: "\EA70"
    }

    .icon-play::before {
        content: "\EA71"
    }

    .icon-clock::before {
        content: "\EA72"
    }

    .icon-level::before {
        content: "\EA73"
    }

    .icon-user::before {
        content: "\EA74"
    }

    .icon-google-plus::before {
        content: "\EA75"
    }

    .icon-github::before {
        content: "\EA76"
    }

    .icon-quick-login::before {
        content: "\EA77"
    }

    .icon-return::before {
        content: "\EA78"
    }

    .icon-calendar::before {
        content: "\EA79"
    }

    .icon-close-round::before {
        content: "\EA7E"
    }

    .icon-arrow-active::before {
        content: "\EA80"
    }

    .icon-exam::before {
        content: "\EA81"
    }

    .icon-badge::before {
        content: "\EA82"
    }

    .icon-notes::before {
        content: "\EA83"
    }

    .icon-bookmark-filled::before {
        content: "\EA84"
    }

    .icon-bookmark::before {
        content: "\EA85"
    }

    .icon-copy::before {
        content: "\EA86"
    }

    .icon-resize::before {
        content: "\EA87"
    }

    .icon-lock::before {
        content: "\EA88"
    }

    .icon-unlocked::before {
        content: "\EA89"
    }

    .icon-info::before {
        content: "\EA8E"
    }

    .icon-minus::before {
        content: "\EA90"
    }

    .icon-plus::before {
        content: "\EA91"
    }

    .icon-edit::before,.m-card-question__editable__action--edit:before {
        content: "\EA92"
    }

    .icon-reply::before {
        content: "\EA93"
    }

    .icon-sort::before {
        content: "\EA94"
    }

    .icon-share::before,.o-header__user__profile__dropdown__bottom__logout span:after {
        content: "\EA95"
    }

    .icon-star::before {
        content: "\EA96"
    }

    .icon-star-filled::before {
        content: "\EA97"
    }

    .icon-arrow-down-curved::before,.o-header__user__profile__dropdown__arrow:after {
        content: "\EA98"
    }

    .icon-sort-asc::before {
        content: "\EA99"
    }

    .icon-target::before {
        content: "\EA9E"
    }

    .m-card-question {
        position: relative;
        padding: 25px 80px 25px 25px;
        background-color: #fff;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 10px;
        -webkit-box-shadow: 0 2px 12px -5px rgba(37,51,66,0.5);
        box-shadow: 0 2px 12px -5px rgba(37,51,66,0.5);
        margin-bottom: 20px
    }

    .m-card-question h4 {
        font-size: 24px;
        font-weight: 700;
        line-height: 1.08;
        margin-bottom: 20px
    }

    .m-card-question h4 a {
        color: #263170
    }

    @media screen and (max-width: 600px) {
        .m-card-question h4 {
            font-size:20px
        }
    }

    .m-card-question__answer {
        padding-left: 30px;
        margin-bottom: 20px;
        position: relative
    }

    .m-card-question__answer:before {
        font-family: "IconFont";
        content: "\EA02";
        color: #8e9fad;
        font-size: 20px;
        position: absolute;
        top: 0;
        left: 0
    }

    .m-card-question__answer p {
        color: #8e9fad;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
        margin-bottom: 15px
    }

    .m-tab-default--b .m-tab-default__pane .m-card-question__answer p {
        color: #8e9fad;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
        margin-bottom: 15px
    }

    .m-card-question__bottom {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start
    }

    @media screen and (max-width: 1024px) {
        .m-card-question__bottom {
            -webkit-box-orient:vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column
        }
    }

    .m-card-question__bottom__left {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }

    @media screen and (max-width: 767px) {
        .m-card-question__bottom__left {
            -webkit-box-orient:vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start
        }
    }

    .m-card-question__bottom__left__left {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-right: 20px
    }

    @media screen and (max-width: 767px) {
        .m-card-question__bottom__left__left {
            margin-bottom:10px
        }
    }

    .m-card-question__img {
        width: 60px;
        height: 60px;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 10px;
        -ms-flex-negative: 0;
        flex-shrink: 0
    }

    .m-card-question__img img {
        width: 100%;
        height: 100%
    }

    .m-card-question__time {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #5f6b76;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.2
    }

    .m-card-question__tags {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap
    }

    .m-card-question__tags .a-tag {
        margin-right: 6px;
        margin-bottom: 5px
    }

    .m-card-question__tags .a-tag:nth-last-child(1) {
        margin-right: 0
    }

    .m-card-question__action {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        justify-self: flex-end;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -ms-flex-negative: 0;
        flex-shrink: 0
    }

    @media screen and (max-width: 1024px) {
        .m-card-question__action {
            -webkit-box-pack:start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            justify-self: flex-start;
            margin-top: 16px
        }
    }

    .m-card-question__action a {
        color: #5f6b76;
        font-size: 12px;
        font-weight: bold;
        line-height: 1.67
    }

    .m-card-question__action__sep {
        color: #5f6b76;
        font-size: 12px;
        font-weight: normal;
        line-height: 1.67;
        padding: 0 10px
    }

    .m-card-question__link {
        position: absolute;
        top: 0;
        right: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 80px;
        height: 100%
    }

    .m-card-question__link:after {
        font-family: "IconFont";
        font-size: 24px;
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
        color: #2855ac
    }

    .m-card-question__editable {
        position: absolute;
        top: 0;
        right: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding-top: 25px;
        padding-right: 25px;
        padding-bottom: 5px;
        z-index: 3;
        background-color: #fff
    }

    .m-card-question__editable__action {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        padding-left: 30px;
        font-size: 15px;
        color: #2855ac;
        font-weight: 700;
        line-height: 24px;
        margin-left: 20px;
        position: relative
    }

    .m-card-question__editable__action:nth-child(1) {
        margin-left: 0
    }

    .m-card-question__editable__action:before {
        position: absolute;
        top: 0;
        left: 0;
        font-family: "IconFont";
        font-size: 20px;
        font-weight: 400
    }

    .m-card-question__editable__action--del:before {
        top: -2px
    }

    .m-card-question--b .m-card-question__answer {
        padding-left: 0
    }

    .m-card-question--b .m-card-question__answer:before {
        display: none
    }

    .m-card-question--editable h4 {
        padding-right: 126px
    }

    @media screen and (max-width: 600px) {
        .m-card-question--editable h4 {
            padding-right:0;
            padding-top: 35px
        }
    }

    .link {
        font-size: .875rem;
        font-weight: bold;
        line-height: 1.86;
        color: #2855ac
    }

    .link--nowrap {
        white-space: nowrap
    }

    .m-tab-default {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap
    }

    .m-tab-default__items {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        max-width: 100%;
        border-bottom: 1px solid #dee3ed;
        margin: 0 auto;
        position: relative;
        width: 100%
    }

    .m-tab-default__items--desc {
        position: relative
    }

    .m-tab-default__items--desc:hover {
        color: #2855ac
    }

    .m-tab-default__items--desc:hover:after {
        content: "";
        width: 100%;
        height: .1875rem;
        background: #2855ac;
        border-radius: 1.5px;
        position: absolute;
        left: 0;
        bottom: -1px
    }

    .m-tab-default__items--desc.m-tab-default__item--active a {
        color: #2855ac;
        font-weight: 700
    }

    .m-tab-default__items--desc.m-tab-default__item--active:after {
        content: "";
        width: 100%;
        height: 3px;
        background: #2855ac;
        border-radius: 2px;
        position: absolute;
        left: 0;
        bottom: -1px
    }

    .m-tab-default__items--desc a {
        font-size: 1.125rem;
        font-weight: 500;
        position: relative;
        line-height: 1.33;
        text-align: center;
        color: #8e9fad;
        padding: .875rem 1rem;
        text-decoration: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        height: 100%
    }

    @media screen and (max-width: 600px) {
        .m-tab-default__items--desc a {
            padding-left:10px;
            padding-right: 10px;
            font-size: 16px
        }
    }

    .m-tab-default__items--desc a bdi {
        margin-left: 4px
    }

    .m-tab-default__items--desc a sub {
        font-size: 1.125rem
    }

    .m-tab-default__items--desc a span {
        display: block;
        font-size: .875rem;
        line-height: 1.57;
        font-weight: 400;
        text-align: center;
        color: #5f6b76;
        width: 100%
    }

    .m-tab-default__panes {
        width: 100%
    }

    .m-tab-default__panes .m-tab-default__pane {
        opacity: 0;
        padding: 2.5rem 0 0;
        -webkit-transition: 400ms ease-in-out;
        -o-transition: 400ms ease-in-out;
        transition: 400ms ease-in-out;
        -webkit-transition-property: opacity;
        -o-transition-property: opacity;
        transition-property: opacity;
        will-change: opacity;
        position: absolute;
        z-index: -1;
        pointer-events: none;
        top: -9999px;
        display: none
    }

    .m-tab-default__panes .m-tab-default__pane.m-tab-default__pane--active {
        opacity: 1;
        position: static;
        z-index: initial;
        pointer-events: initial;
        display: block
    }

    .m-tab-default__panes .m-tab-default__pane.m-tab-default__pane--inactive {
        -webkit-transition: none;
        -o-transition: none;
        transition: none;
        display: none
    }

    .m-tab-default.m-tab--icon .m-tab-default__items {
        width: 100%;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }

    .m-tab-default.m-tab--icon .m-tab-default__items--desc {
        width: 50%;
        max-width: 24.375rem
    }

    .m-tab-default.m-tab--icon .m-tab-default__items--desc .a-icon {
        margin-right: .5rem
    }

    .m-tab-default.m-tab--icon .m-tab-default__items--desc .a-icon:before {
        display: block
    }

    .m-tab-default.m-tab--centered .m-tab-default__items {
        width: 100%;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }

    .m-tab-default.m-tab--centered .m-tab-default__items--desc a {
        padding: 1rem 2.25rem
    }

    @media screen and (max-width: 600px) {
        .m-tab-default.m-tab--centered .m-tab-default__items--desc a {
            padding-left:10px;
            padding-right: 10px
        }
    }

    .m-tab-default__pane__text {
        margin-bottom: 40px
    }

    .m-tab-default--b .m-tab-default__pane {
        padding-top: 20px
    }

    .m-tab-default--b .m-tab-default__pane p {
        color: #8e9fad;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.44;
        letter-spacing: -0.34px;
        margin: 0 0 20px
    }

    .search-noresult {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding-top: 5%;
        padding-bottom: 5%
    }

    .search-noresult img {
        width: 96px;
        margin-bottom: 40px
    }

    .search-noresult h3 {
        font-size: 32px;
        font-weight: bold;
        letter-spacing: -0.41px;
        margin-bottom: 15px;
        color: #253342
    }

    .search-noresult p {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.63;
        color: #5f6b76
    }

    .search-noresult a {
        margin-right: 5px
    }

    @media screen and (max-width: 767px) {
        .search-noresult div {
            -webkit-box-align:center;
            -ms-flex-align: center;
            align-items: center;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column
        }
    }

    .search-noresult.news {
        margin-bottom: 90px
    }

    .search-noresult.news p {
        max-width: 300px;
        margin-bottom: 28px
    }

    .search-noresult.news .a-btn {
        width: 300px
    }

    .main-header-mobile__body__menu__list__sub-list {
        display: none;
        list-style: none;
        margin: 0;
        padding: 0
    }

    .o-header {
        position: sticky;
        will-change: transform;
        -webkit-transition: -webkit-transform 0.25s ease-in-out;
        transition: -webkit-transform 0.25s ease-in-out;
        -o-transition: transform 0.25s ease-in-out;
        transition: transform 0.25s ease-in-out;
        transition: transform 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
        height: 100px;
        background-color: #fff;
        z-index: 13
    }

    @media screen and (max-width: 1279px) {
        .o-header {
            display:none
        }
    }

    .o-header .container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 100%
    }

    .o-header__logo {
        -ms-flex-negative: 0;
        flex-shrink: 0
    }

    .o-header__logo a {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        height: 40px
    }

    .o-header__menu {
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        margin-right: 40px
    }

    .o-header__menu>li {
        margin-left: 30px;
        position: relative
    }

    .o-header__menu>li>a {
        display: block;
        padding: 0 5px;
        color: #253342;
        font-size: 16px;
        font-weight: 700;
        line-height: 40px
    }

    .o-header__menu>li>a>i {
        font-weight: 400;
        line-height: 40px
    }

    .o-header__menu>li:after {
        content: "";
        height: 3px;
        width: 100%;
        position: absolute;
        top: 45px;
        left: 0;
        background-color: #ffc900;
        display: none
    }

    .o-header__menu>li:hover:after {
        display: block
    }

    .o-header__menu>li:hover>a {
        color: #ffc900
    }

    .o-header__menu>li.o-header__search:hover:after {
        display: none
    }

    .o-header__menu>li.active:after {
        display: block
    }

    .o-header__menu>li.active>a {
        color: #ffc900
    }

    .o-header__menu__submenu {
        display: none;
        position: absolute;
        top: 45px;
        left: 0;
        width: 204px;
        -webkit-box-shadow: 0 5px .9375rem 0 rgba(37,51,66,0.15);
        box-shadow: 0 5px .9375rem 0 rgba(37,51,66,0.15);
        background-color: #fff
    }

    .o-header__menu__submenu>ul>li {
        background: #fff;
        position: relative
    }

    .o-header__menu__submenu>ul>li a {
        padding: 0 36px 0 15px;
        height: 44px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #8e9fad;
        font-size: 12px;
        font-weight: 700;
        line-height: 1.2em;
        border-bottom: 1px solid #dee3ed;
        position: relative
    }

    .o-header__menu__submenu>ul>li a:after {
        display: none;
        font-family: 'IconFont';
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
        position: absolute;
        top: 14px;
        right: 12px
    }

    .o-header__menu__submenu>ul>li a:hover {
        color: #253342
    }

    .o-header__menu__submenu>ul>li.js-has-submenu>a:after {
        display: block
    }

    .o-header__menu__submenu>ul>li:nth-child(1) {
        border-top: 3px solid #ffc900;
        border-top-left-radius: 2px;
        border-top-right-radius: 2px
    }

    .o-header__menu__submenu>ul>li:nth-last-child(1) {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px
    }

    .o-header__menu__submenu>ul>li:nth-last-child(1) a {
        border-bottom: none
    }

    .o-header__menu__submenu__sub {
        display: none;
        position: absolute;
        left: 100%;
        top: 0;
        -webkit-box-shadow: 0 5px .9375rem 0 rgba(37,51,66,0.15);
        box-shadow: 0 5px .9375rem 0 rgba(37,51,66,0.15);
        background-color: #fff
    }

    .o-header__menu__submenu__sub ul {
        position: relative;
        z-index: 1
    }

    .o-header__menu__submenu__sub li {
        width: 194px;
        background: #fff;
        -webkit-box-shadow: inset 1px 0 1px 0 rgba(37,51,66,0.15);
        box-shadow: inset 1px 0 1px 0 rgba(37,51,66,0.15)
    }

    .o-header__menu__submenu__sub li:nth-child(1) {
        border-top-right-radius: 4px
    }

    .o-header__menu__submenu__sub li:nth-last-child(1) {
        border-bottom-right-radius: 4px
    }

    .o-header__menu__submenu__sub li:nth-last-child(1) a {
        border-bottom: 0
    }

    .o-header__login-button {
        -ms-flex-negative: 0;
        flex-shrink: 0
    }

    .o-header__search {
        position: relative
    }

    .o-header__search-open {
        position: absolute;
        right: 0;
        top: -10px;
        width: 0;
        max-height: 48px;
        background-color: #ecf0f2;
        border-radius: 8px;
        -webkit-transition: width 0.3s ease-in;
        -o-transition: width 0.3s ease-in;
        transition: width 0.3s ease-in;
        visibility: hidden
    }

    .o-header__search-open .m-form .m-search__speech {
        display: none
    }

    .o-header__search-open .m-form .m-search__search {
        opacity: 0
    }

    .o-header__search-open .m-form .m-search__cancel {
        opacity: 0
    }

    .o-header__search-open .m-form input::-webkit-input-placeholder {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.13;
        letter-spacing: normal;
        color: #8e9fad
    }

    .o-header__search-open .m-form input::-moz-placeholder {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.13;
        letter-spacing: normal;
        color: #8e9fad
    }

    .o-header__search-open .m-form input:-ms-input-placeholder {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.13;
        letter-spacing: normal;
        color: #8e9fad
    }

    .o-header__search-open .m-form input::-ms-input-placeholder {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.13;
        letter-spacing: normal;
        color: #8e9fad
    }

    .o-header__search-open .m-form input::placeholder {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.13;
        letter-spacing: normal;
        color: #8e9fad
    }

    .o-header__search-open.active {
        width: 465px;
        -webkit-transition: width 0.3s ease-out;
        -o-transition: width 0.3s ease-out;
        transition: width 0.3s ease-out
    }

    .o-header__search-open.active .m-form .m-search__speech {
        display: none
    }

    .o-header__search-open.active .m-form .m-search__search {
        opacity: 1
    }

    .o-header__search-open.active .m-form .m-search__cancel {
        opacity: 1
    }

    @media screen and (max-width: 1279px) {
        .o-header__search-open.active .m-form .m-search__cancel {
            opacity:0
        }
    }

    .o-header__search-open.active .m-search__gray:focus-within {
        background-color: #ecf0f2;
        -webkit-box-shadow: none;
        box-shadow: none
    }

    .o-header__user {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-negative: 0;
        flex-shrink: 0
    }

    .o-header__user__points {
        -ms-flex-negative: 0;
        flex-shrink: 0;
        color: #2855ac;
        font-size: 13px;
        font-weight: 500;
        text-align: right;
        padding-right: 26px;
        position: relative;
        line-height: 16px
    }

    .o-header__user__points:after {
        content: "";
        background-image: url(/themes/custom/gyz/img/icons/star.svg);
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        right: 0;
        height: 16px;
        width: 17px
    }

    .o-header__user__profile {
        margin-left: 20px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        position: relative
    }

    .o-header__user__profile__avatar {
        position: relative;
        cursor: pointer
    }

    .o-header__user__profile__avatar figure {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 4px solid #fff;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        overflow: hidden
    }

    .o-header__user__profile__avatar figure img {
        width: 100%
    }

    .o-header__user__profile__avatar__notification {
        width: 21px;
        height: 21px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 50%;
        border: 1px solid #fff;
        position: absolute;
        top: 0px;
        right: 0px;
        background-color: #ffc900;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }

    .o-header__user__profile__dropdown {
        width: 480px;
        position: absolute;
        top: 58px;
        right: -16px;
        background-color: #fff;
        -webkit-box-shadow: 0 10px 30px 0 rgba(37,51,66,0.3);
        box-shadow: 0 10px 30px 0 rgba(37,51,66,0.3);
        border-radius: 20px;
        will-change: opacity, top;
        opacity: 0;
        -webkit-transition: opacity 150ms ease-in-out, top 150ms ease-in-out;
        -o-transition: opacity 150ms ease-in-out, top 150ms ease-in-out;
        transition: opacity 150ms ease-in-out, top 150ms ease-in-out;
        height: 0;
        overflow: hidden
    }

    .o-header__user__profile__dropdown.closing {
        opacity: 0 !important;
        top: 58px !important
    }

    .o-header__user__profile__dropdown__arrow {
        display: block;
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
        position: absolute;
        top: -18px;
        right: 28px
    }

    .o-header__user__profile__dropdown__arrow:after {
        font-family: 'IconFont';
        font-size: 24px;
        color: #fff
    }

    .o-header__user__profile__dropdown__avatar {
        width: 60px;
        height: 60px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border: 5px solid #fff;
        border-radius: 50%;
        margin-right: 20px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        overflow: hidden
    }

    .o-header__user__profile__dropdown__avatar img {
        width: 100%
    }

    .o-header__user__profile__dropdown__greeting {
        -ms-flex-negative: 0;
        flex-shrink: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        justify-items: center
    }

    .o-header__user__profile__dropdown__greeting__title {
        color: #263170;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.38px;
        line-height: 1.2;
        margin-bottom: 6px
    }

    .o-header__user__profile__dropdown__greeting__points {
        padding-left: 26px;
        line-height: 16px;
        color: #2855ac;
        font-size: 13px;
        font-weight: 500;
        position: relative
    }

    .o-header__user__profile__dropdown__greeting__points:before {
        content: "";
        background-image: url(/themes/custom/gyz/img/icons/star.svg);
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        left: 0;
        height: 16px;
        width: 17px
    }

    .o-header__user__profile__dropdown__top {
        height: 100px;
        padding: 30px 80px 20px 25px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 1px solid #dee3ed;
        position: relative
    }

    .o-header__user__profile__dropdown__top__link {
        position: absolute;
        top: 0;
        right: 0;
        width: 80px;
        height: 100%;
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }

    .o-header__user__profile__dropdown__top__link:after {
        font-family: 'IconFont';
        color: #2855ac;
        font-size: 24px
    }

    .o-header__user__profile__dropdown__profile {
        border-bottom: 1px solid #dee3ed;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }

    .o-header__user__profile__dropdown__profile__title {
        color: #191919;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.1;
        padding: 16px 30px
    }

    .o-header__user__profile__dropdown__profile__action {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -ms-flex-item-align: stretch;
        align-self: stretch;
        position: relative
    }

    .o-header__user__profile__dropdown__profile__action__link {
        position: absolute;
        top: 0;
        right: 0;
        width: 80px;
        height: 100%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }

    .o-header__user__profile__dropdown__profile__action__link:after {
        font-family: 'IconFont';
        color: #2855ac;
        font-size: 24px
    }

    .o-header__user__profile__dropdown__notifications {
        border-bottom: 1px solid #dee3ed
    }

    .o-header__user__profile__dropdown__notifications__top {
        padding: 15px 0 15px 30px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        min-height: 52px
    }

    .o-header__user__profile__dropdown__notifications__title {
        color: #191919;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.1
    }

    .o-header__user__profile__dropdown__notifications__count {
        margin-left: 12px
    }

    .o-header__user__profile__dropdown__notifications__count span {
        display: block;
        height: 22px;
        min-width: 30px;
        padding: 0 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 6px;
        background-color: #ecf0f2;
        color: #2855ac;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.12px;
        line-height: 22px;
        text-align: center
    }

    .o-header__user__profile__dropdown__notifications__action {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -ms-flex-item-align: stretch;
        align-self: stretch;
        position: relative
    }

    .o-header__user__profile__dropdown__notifications__action__link {
        position: absolute;
        top: 0;
        right: 0;
        width: 80px;
        height: 100%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }

    .o-header__user__profile__dropdown__notifications__action__link:after {
        font-family: 'IconFont';
        color: #2855ac;
        font-size: 24px
    }

    .o-header__user__profile__dropdown__notifications__items {
        padding: 0 30px 30px;
        width: 100% !important;
        margin: 0 !important;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }

    .o-header__user__profile__dropdown__notifications__items .notification {
        margin-top: 5px !important
    }

    .o-header__user__profile__dropdown__notifications__items .notification:nth-child(1) {
        margin-top: 0 !important
    }

    .o-header__user__profile__dropdown__badges {
        border-bottom: 1px solid #dee3ed;
        padding: 15px 80px 30px 30px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }

    .o-header__user__profile__dropdown__badges__title {
        color: #191919;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.1;
        margin-bottom: 10px
    }

    .o-header__user__profile__dropdown__badges__items {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }

    .o-header__user__profile__dropdown__badges__items img {
        width: 85px;
        height: 95px;
        margin-right: 10px
    }

    .o-header__user__profile__dropdown__badges__link {
        position: absolute;
        top: 0;
        right: 0;
        width: 80px;
        height: 100%;
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }

    .o-header__user__profile__dropdown__badges__link:after {
        font-family: 'IconFont';
        color: #2855ac;
        font-size: 24px
    }

    .o-header__user__profile__dropdown__bottom {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 65px;
        position: relative
    }

    .o-header__user__profile__dropdown__bottom:after {
        content: "";
        height: 40px;
        width: 1px;
        position: absolute;
        left: 50%;
        top: 10px;
        background: #dee3ed
    }

    .o-header__user__profile__dropdown__bottom__settings {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 100%
    }

    .o-header__user__profile__dropdown__bottom__settings span {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        line-height: 24px;
        padding-left: 34px;
        position: relative;
        color: #2855ac;
        font-size: 14px;
        font-weight: 700
    }

    .o-header__user__profile__dropdown__bottom__settings span:after {
        font-family: 'IconFont';
        font-size: 24px;
        position: absolute;
        top: 0;
        left: 0;
        font-weight: normal
    }

    .o-header__user__profile__dropdown__bottom__logout {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 100%
    }

    .o-header__user__profile__dropdown__bottom__logout span {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        line-height: 24px;
        padding-left: 34px;
        position: relative;
        color: #2855ac;
        font-size: 14px;
        font-weight: 700
    }

    .o-header__user__profile__dropdown__bottom__logout span:after {
        font-family: 'IconFont';
        font-size: 24px;
        position: absolute;
        top: 0;
        left: 0;
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
        font-weight: normal
    }

    .o-header__user__profile__dropdown__bottom__left,.o-header__user__profile__dropdown__bottom__right {
        width: 50%;
        -ms-flex-negative: 0;
        flex-shrink: 0
    }

    .o-header__user__profile.active .o-header__user__profile__dropdown {
        top: 66px;
        opacity: 1;
        height: auto;
        overflow: visible
    }

    .o-header--pinned {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
        -webkit-box-shadow: 0 1px 6px -4px #000;
        box-shadow: 0 1px 6px -4px #000;
        z-index: 11
    }

    .o-header--pinned.o-header--top {
        -webkit-box-shadow: none;
        box-shadow: none
    }

    .o-header--unpinned {
        -webkit-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        transform: translateY(-100%);
        z-index: 11
    }
</style>
</head>
<body>
<header class="o-header">

    <div class="container">
        <div id="block-gyz-branding" class="o-header__logo">


            <a href="/" rel="home" title="Ana Menü">
                <img src="/themes/custom/gyz/logo.svg" alt="Ana Sayfa">
            </a>

        </div>
        <nav role="navigation" aria-labelledby="block-gyz-main-menu-menu" id="block-gyz-main-menu">

            <h2 class="visually-hidden" id="block-gyz-main-menu-menu">Main navigation</h2>



            <ul region="header" class="o-header__menu">
                <li>
                    <a href="/soru-cevap" data-drupal-link-system-path="node/6">Forum</a>
                </li>
                <li>
                    <a href="/gelecegi-yazanlar-blog" data-drupal-link-system-path="node/10">Blog</a>
                    <ul>
                        <li>
                            <a href="">Robotik Kodlama</a>
                            <ul>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13199" data-drupal-link-query="{&quot;kategori&quot;:&quot;13199&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Ardunio</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13200" data-drupal-link-query="{&quot;kategori&quot;:&quot;13200&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Turkcell RPA</a>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=11400" data-drupal-link-query="{&quot;kategori&quot;:&quot;11400&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Siber Güvenlik</a>
                            <ul>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=11400" data-drupal-link-query="{&quot;kategori&quot;:&quot;11400&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Siber Güvenlik Genel</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13201" data-drupal-link-query="{&quot;kategori&quot;:&quot;13201&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Bilgi Güvenliği</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13202" data-drupal-link-query="{&quot;kategori&quot;:&quot;13202&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Kriptografi</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13203" data-drupal-link-query="{&quot;kategori&quot;:&quot;13203&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Uygulama Güvenliği</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13204" data-drupal-link-query="{&quot;kategori&quot;:&quot;13204&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Altyapı Güvenliği</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13205" data-drupal-link-query="{&quot;kategori&quot;:&quot;13205&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Defansif Güvenlik</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13206" data-drupal-link-query="{&quot;kategori&quot;:&quot;13206&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Kimlik ve Erişim Yönetimi</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13207" data-drupal-link-query="{&quot;kategori&quot;:&quot;13207&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Write-up CTF</a>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <a href="">Programlama Dilleri</a>
                            <ul>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13208" data-drupal-link-query="{&quot;kategori&quot;:&quot;13208&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Java</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13209" data-drupal-link-query="{&quot;kategori&quot;:&quot;13209&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Python</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13210" data-drupal-link-query="{&quot;kategori&quot;:&quot;13210&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Javascript</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13211" data-drupal-link-query="{&quot;kategori&quot;:&quot;13211&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">C#</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13212" data-drupal-link-query="{&quot;kategori&quot;:&quot;13212&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">React</a>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <a href="">Veri Bilimi</a>
                            <ul>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13213" data-drupal-link-query="{&quot;kategori&quot;:&quot;13213&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Yapay Zeka</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13214" data-drupal-link-query="{&quot;kategori&quot;:&quot;13214&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Veri Analizi</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13215" data-drupal-link-query="{&quot;kategori&quot;:&quot;13215&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Makine Öğrenmesi</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13216" data-drupal-link-query="{&quot;kategori&quot;:&quot;13216&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Derin Öğrenme</a>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <a href="">Oyun Programlama</a>
                            <ul>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=5" data-drupal-link-query="{&quot;kategori&quot;:&quot;5&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Scratch</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13218" data-drupal-link-query="{&quot;kategori&quot;:&quot;13218&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Unity</a>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13219" data-drupal-link-query="{&quot;kategori&quot;:&quot;13219&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Web Programlama</a>
                        </li>
                        <li>
                            <a href="">Mobil Programlama</a>
                            <ul>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13220" data-drupal-link-query="{&quot;kategori&quot;:&quot;13220&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Android</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=8" data-drupal-link-query="{&quot;kategori&quot;:&quot;8&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">iOS</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=9" data-drupal-link-query="{&quot;kategori&quot;:&quot;9&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Windows Phone</a>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13221" data-drupal-link-query="{&quot;kategori&quot;:&quot;13221&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Veritabanı Programlama</a>
                        </li>
                        <li>
                            <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13222" data-drupal-link-query="{&quot;kategori&quot;:&quot;13222&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Tasarım</a>
                        </li>
                        <li>
                            <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=4" data-drupal-link-query="{&quot;kategori&quot;:&quot;4&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Geleceği Yazanlar</a>
                            <ul>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=4" data-drupal-link-query="{&quot;kategori&quot;:&quot;4&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Genel</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=10" data-drupal-link-query="{&quot;kategori&quot;:&quot;10&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Firefox OS</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=11402" data-drupal-link-query="{&quot;kategori&quot;:&quot;11402&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Açık Kaynak Kod</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13225" data-drupal-link-query="{&quot;kategori&quot;:&quot;13225&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Yapay Zeka/Makine Öğrenmesi</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13226" data-drupal-link-query="{&quot;kategori&quot;:&quot;13226&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Soru-Cevap</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13227" data-drupal-link-query="{&quot;kategori&quot;:&quot;13227&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">İş Modeli</a>
                                </li>
                                <li>
                                    <a href="/gelecegi-yazanlar-blog?search=&amp;kategori=13228" data-drupal-link-query="{&quot;kategori&quot;:&quot;13228&quot;,&quot;search&quot;:&quot;&quot;}" data-drupal-link-system-path="node/10">Röportajlar</a>
                                </li>
                            </ul>

                        </li>
                    </ul>

                </li>
                <li>
                    <a href="/egitimler" data-drupal-link-system-path="node/31398" class="is-active">Eğitimler</a>
                    <ul>
                        <li>
                            <a href="/egitimler" data-drupal-link-system-path="node/31398" class="is-active">Tüm Katalog</a>
                        </li>
                        <li>
                            <a href="">Veri Bilimi</a>
                            <ul>
                                <li>
                                    <a href="/konu/veri-bilimi-ve-yapay-zekaya-giris" data-drupal-link-system-path="taxonomy/term/4793">Veri Bilimi ve Yapay Zekaya Giriş</a>
                                </li>
                                <li>
                                    <a href="/konu/veri-okuryazarligi" data-drupal-link-system-path="taxonomy/term/4795">Veri Okuryazarlığı</a>
                                </li>
                                <li>
                                    <a href="/konu/python" data-drupal-link-system-path="taxonomy/term/4784">Python</a>
                                </li>
                                <li>
                                    <a href="/konu/veri-manipulasyonu" data-drupal-link-system-path="taxonomy/term/5458">Veri Manipülasyonu</a>
                                </li>
                                <li>
                                    <a href="/konu/veri-gorsellestirme" data-drupal-link-system-path="taxonomy/term/4794">Veri Görselleştirme</a>
                                </li>
                                <li>
                                    <a href="/konu/veri-bilimi-icin-istatistik" data-drupal-link-system-path="taxonomy/term/4791">Veri Bilimi için İstatistik</a>
                                </li>
                                <li>
                                    <a href="/konu/veri-isleme" data-drupal-link-system-path="taxonomy/term/4796">Veri Ön İşleme</a>
                                </li>
                                <li>
                                    <a href="/konu/makine-ogrenmesi" data-drupal-link-system-path="taxonomy/term/4780">Makine Öğrenmesi</a>
                                </li>
                                <li>
                                    <a href="/konu/python-ile-buyuk-veri" data-drupal-link-system-path="taxonomy/term/4785">Python ile Büyük Veri</a>
                                </li>
                                <li>
                                    <a href="/konu/veri-bilimi-proje-dongusu" data-drupal-link-system-path="taxonomy/term/4792">Veri Bilimi Proje Döngüsü</a>
                                </li>
                                <li>
                                    <a href="/konu/derin-ogrenme" data-drupal-link-system-path="taxonomy/term/13252">Derin Öğrenme</a>
                                </li>
                                <li>
                                    <a href="/konu/opencv" data-drupal-link-system-path="taxonomy/term/13515">OpenCV</a>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <a href="/konu/temel-linux" data-drupal-link-system-path="taxonomy/term/4786">Temel Linux</a>
                        </li>
                        <li>
                            <a href="https://gelecegiyazanlar.turkcell.com.tr/konu/siber-guvenlik">Siber Güvenlik</a>
                        </li>
                        <li>
                            <a href="">Mobil Programlama</a>
                            <ul>
                                <li>
                                    <a href="/konu/react-native" data-drupal-link-system-path="taxonomy/term/14350">React Native</a>
                                </li>
                                <li>
                                    <a href="https://gelecegiyazanlar.turkcell.com.tr/konu/kotlin-ile-android-programlama">Kotlin ile Android Programlama</a>
                                </li>
                                <li>
                                    <a href="https://gelecegiyazanlar.turkcell.com.tr/konu/swift-ile-ios-programlama">Swift ile iOS Programlama</a>
                                </li>
                                <li>
                                    <a href="/konu/android" data-drupal-link-system-path="taxonomy/term/4765">Android</a>
                                </li>
                                <li>
                                    <a href="/konu/app-inventor" data-drupal-link-system-path="taxonomy/term/4773">App Inventor</a>
                                </li>
                                <li>
                                    <a href="/konu/ios" data-drupal-link-system-path="taxonomy/term/4797">iOS</a>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <a href="">Oyun Programlama</a>
                            <ul>
                                <li>
                                    <a href="/konu/scratch-30" data-drupal-link-system-path="taxonomy/term/14485">Scratch 3.0</a>
                                </li>
                                <li>
                                    <a href="/konu/scratch" data-drupal-link-system-path="taxonomy/term/4803">Scratch</a>
                                </li>
                                <li>
                                    <a href="/konu/oyun-gelistirme" data-drupal-link-system-path="taxonomy/term/4783">Oyun Geliştirme</a>
                                </li>
                                <li>
                                    <a href="/konu/unity" data-drupal-link-system-path="taxonomy/term/4807">Unity</a>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <a href="">Programlama</a>
                            <ul>
                                <li>
                                    <a href="https://gelecegiyazanlar.turkcell.com.tr/konu/java">Java</a>
                                </li>
                                <li>
                                    <a href="/konu/ileri-java" data-drupal-link-system-path="taxonomy/term/14164">İleri Java</a>
                                </li>
                                <li>
                                    <a href="/konu/ileri-python" data-drupal-link-system-path="taxonomy/term/13971">İleri Python</a>
                                </li>
                                <li>
                                    <a href="https://gelecegiyazanlar.turkcell.com.tr/konu/kotlin">Kotlin</a>
                                </li>
                                <li>
                                    <a href="https://gelecegiyazanlar.turkcell.com.tr/konu/swift">Swift</a>
                                </li>
                                <li>
                                    <a href="https://gelecegiyazanlar.turkcell.com.tr/konu/c-ile-algoritma-ve-programlama">C# ile Algoritma ve Programlama</a>
                                </li>
                                <li>
                                    <a href="https://gelecegiyazanlar.turkcell.com.tr/konu/c-form-ile-gorsel-ve-nesne-tabanli-programlama">C# Form ile Görsel ve Nesne Tabanlı Programlama</a>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <a href="">Robotik ve Kodlama</a>
                            <ul>
                                <li>
                                    <a href="/konu/arduino" data-drupal-link-system-path="taxonomy/term/4774">Arduino</a>
                                </li>
                                <li>
                                    <a href="/konu/turkcell-rpa" data-drupal-link-system-path="taxonomy/term/12284">Turkcell RPA</a>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <a href="">Veritabanı Programlama</a>
                            <ul>
                                <li>
                                    <a href="/konu/microsoft-sql-server" data-drupal-link-system-path="taxonomy/term/4799">Microsoft SQL Server</a>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <a href="">Web Programlama</a>
                            <ul>
                                <li>
                                    <a href="/konu/web-programlama" data-drupal-link-system-path="taxonomy/term/4804">HTML, CSS ve Javascript</a>
                                </li>
                                <li>
                                    <a href="/konu/react" data-drupal-link-system-path="taxonomy/term/13097">React</a>
                                </li>
                                <li>
                                    <a href="/konu/aspnet-core-mvc" data-drupal-link-system-path="taxonomy/term/13791">Asp.Net Core MVC</a>
                                </li>
                                <li>
                                    <a href="/konu/angular" data-drupal-link-system-path="taxonomy/term/13692">Angular</a>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <a href="/konu/temel-network" data-drupal-link-system-path="taxonomy/term/4787">Temel Network</a>
                        </li>
                        <li>
                            <a href="/konu/dijital-okuryazarlik" data-drupal-link-system-path="taxonomy/term/5459">Dijital Okuryazarlık</a>
                            <ul>
                                <li>
                                    <a href="https://gelecegiyazanlar.turkcell.com.tr/konu/dijital-okuryazarlik">Dijital Okuryazarlık</a>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <a href="/konu/turkcell-akademi-egitimleri" data-drupal-link-system-path="taxonomy/term/4788">Turkcell Akademi Eğitimleri</a>
                        </li>
                    </ul>

                </li>
                <li>
                    <a href="">Topluluk</a>
                    <ul>
                        <li>
                            <a href="">Sosyal Programlarımız</a>
                            <ul>
                                <li>
                                    <a href="/gelecegi-yazanlar" data-drupal-link-system-path="node/42905">Gençlere Yatırım Geleceğe Yazılım</a>
                                </li>
                                <li>
                                    <a href="/superkadinlar" data-drupal-link-system-path="node/45645">Siber Güvenliğin Süper Kadınları</a>
                                </li>
                                <li>
                                    <a href="/iklimfikirmaratonu" data-drupal-link-system-path="node/42080">GYK İklim Fikir Maratonu</a>
                                </li>
                                <li>
                                    <a href="/dijitalokuryazarlik" data-drupal-link-system-path="node/36681">Dijital Okuryazarlık</a>
                                </li>
                            </ul>

                        </li>
                        <li>
                            <a href="/gonullulerimiz" data-drupal-link-system-path="node/35230">Gönüllülerimiz</a>
                        </li>
                    </ul>

                </li>
                <li>
                    <a href="/is-ilanlari" data-drupal-link-system-path="is-ilanlari">İş İlanları</a>
                </li>
            </ul>



        </nav>
        <div id="block-headerbutton">



            <p><a class="a-btn o-header__login-button" href="/user/login">Giriş Yap</a></p>


        </div>


        <div class="o-header__search">
            <a href="javascript:;" class="js-o-header-search" title="Arama Butonu">
                <i class="icon icon-search search"></i>
            </a>
            <div class="o-header__search-open">
                <div class="m-search">
                    <form class="m-form" action="/search">
                        <div class="m-search__input m-search__gray">
                            <button class="a-btn-icon m-search__search" title="Ara">
                                <i class="icon-search"></i>
                            </button>
                            <input type="text" placeholder="Ne aramıştınız?" name="combine" autocomplete="off" aria-label="Arama yap">
                            <a class="a-btn-icon m-search__cancel" href="javascript:;" title="Sil">
                                <i class="icon-close js-o-header-close"></i>
                            </a>
                            <a class="a-btn-icon m-search__speech" href="javascript:;" title="Sesle Ara">
                                <i class="icon-microphone"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</header>
</body>
</html>



