$(document).ready(function() {
    function t(e) {
        for (var t = window.location.search.substring(1).split("&"), o = 0; o < t.length; o++) {
            var s = t[o].split("=");
            if (s[0] == e) return decodeURIComponent(s[1])
        }
        return !1
    }

    function e() {
        fontSize = $(".base_size").val(), $.isNumeric(fontSize) ? baseSize = fontSize / 16 : baseSize = 0, $(".base_em").text(Math.round(1e3 * baseSize) / 10 + "%/" + Math.round(1e3 * baseSize) / 1e3 + "em"), o(), $(".js_param_size").text(fontSize), $(".article_container").css("font-size", Math.round(1e3 * baseSize) / 1e3 + "em"), $(".js_css_font_size").text(Math.round(1e3 * baseSize) / 10), $(".js_css_font_size_px").text(fontSize)
    }

    function o() {
        scaleRatio = $(".js_font_scale").val(), "custom" === scaleRatio && (scaleRatio = $(".js_font_scale_custom").val()), u()
    }

    function s() {
        previewText = $(".preview_text").val(), $(".scale_preview_text, .article_header").text(previewText), $(".js_param_text").text(encodeURIComponent(previewText))
    }

    function n() {
        fontWeights = $(".js_font option:selected").data("weights"), fontWeights = fontWeights.split(","), listOptions = "", fontWeights.forEach(function(e) {
            "regular" === e ? e = "400" : e.includes("italic") && (e = null), null !== e && (listOptions += "<option>" + e + "</option>")
        })
    }

    function l() {
        webFont = $(".js_font").val(), n(), $(".js_weight").html(listOptions).val("400"), i(), "body_font_default" === $(".js_body_font").val() && (r(), $(".js_body_weight").html(listOptions).val("400"), c()), _(), webFontFamily = $(".js_font option:selected").data("family"), $(".scale_webfont, .article_content").attr("style", "font-family:" + webFontFamily), $(".js_param_font").text(encodeURIComponent(webFont)), $(".js_css_font_family").text(webFontFamily)
    }

    function i() {
        fontWeight = $(".js_weight").val(), _(), $(".js_style_weight").html(".scale_webfont, .article_header {font-weight:" + fontWeight + ";}"), $(".js_param_weight").text(fontWeight), $(".js_css_weight").text(fontWeight), c()
    }

    function r() {
        bodyFont = $(".js_body_font").val(), "body_font_default" === bodyFont ? (bodyFont = $(".js_font").val(), bodyWebFontFamily = $(".js_font option:selected").data("family"), n()) : (bodyWebFontFamily = $(".js_body_font option:selected").data("family"), fontWeights = $(".js_body_font option:selected").data("weights"), fontWeights = fontWeights.split(","), listOptions = "", fontWeights.forEach(function(e) {
            "regular" === e ? e = "400" : e.includes("italic") && (e = null), null !== e && (listOptions += "<option>" + e + "</option>")
        })), $(".js_body_weight").html(listOptions).val("400"), c(), _(), $(".js_style_body_font").html(".article_content p {font-family:" + bodyWebFontFamily + "}"), $(".js_param_body_font").text(encodeURIComponent(bodyFont)), $(".js_css_body_font_family").text(bodyWebFontFamily), g()
    }

    function c() {
        bodyFontWeight = $(".js_body_weight").val(), _(), $(".js_style_body_weight").html(".article_content p {font-weight:" + bodyFontWeight + ";}"), $(".js_param_body_weight").text($(".js_body_weight").val()), $(".js_css_body_weight").text(bodyFontWeight)
    }

    function _() {
        headerFont = $(".js_font").val().replace(/\s/g, "+"), bodyFont = $(".js_body_font").val().replace(/\s/g, "+"), headerWeight = $(".js_weight").val(), bodyWeight = $(".js_body_weight").val(), bodyFont === headerFont || "body_font_default" === bodyFont ? (bodyWeight === headerWeight ? bodyWeight = "" : bodyWeight += ",", webFontUrl = "https://fonts.googleapis.com/css?family=" + headerFont + ":" + bodyWeight + headerWeight) : webFontUrl = "https://fonts.googleapis.com/css?family=" + bodyFont + ":" + bodyWeight + "|" + headerFont + ":" + headerWeight, $(".webfont_url").attr("href", webFontUrl), $(".js_css_webfont_url").text(webFontUrl)
    }

    function h(e) {
        var t = e.replace(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+)/i);
        return t && 4 === t.length ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : e
    }

    function f() {
        backgroundColor = $(".js_bg_color").val(), $(".js_style_background_color").html(".article_preview {background-color:" + backgroundColor + ";}"), $(".js_css_background_color").text(backgroundColor), bgColorHex = h($(".article_preview").css("background-color")), $(".js_param_background_color").text(encodeURIComponent(bgColorHex))
    }

    function d() {
        fontColor = $(".js_font_color").val(), $(".js_style_font_color").html(".article_preview {color:" + fontColor + ";}"), $(".js_css_color").text(fontColor), fontColorHex = h($(".article_preview").css("color")), $(".js_param_font_color").text(encodeURIComponent(fontColorHex))
    }

    function p() {
        lineHeight = $(".js_line_height").val(), $(".js_style_line_height").html(".article_content {line-height:" + lineHeight + ";}"), $(".js_param_line_height").text(encodeURIComponent(lineHeight)), $(".js_css_line_height").text(lineHeight)
    }

    function u() {
        a = baseSize, b = scaleRatio, result = baseSize, $($(".scale_high").get().reverse()).each(function(e) {
            $(this).css("font-size", Math.round(1e3 * result) / 1e3 + "em"), result = a * b, a = result
        }), a = 1, b = scaleRatio, result = 1, $($(".scale_high_label").get().reverse()).each(function(e) {
            $(this).text(Math.round(1e3 * result) / 1e3 + "rem/" + (16 * baseSize * result).toFixed(2) + "px"), result = a * b, a = result
        }), a = 1, b = scaleRatio, result = 1, $($(".article_header").get().reverse()).each(function(e) {
            result = a * b, a = result, $(this).css("font-size", Math.round(1e3 * result) / 1e3 + "em")
        }), a = 1, b = scaleRatio, result = 1, $($(".js_css_header_size").get().reverse()).each(function(e) {
            result = a * b, a = result, $(this).text(Math.round(1e3 * result) / 1e3)
        }), a = baseSize, b = scaleRatio, result = baseSize, $(".scale_low").each(function(e) {
            result = a / b, a = result, $(this).css("font-size", Math.round(1e3 * result) / 1e3 + "em")
        }), a = 1, b = scaleRatio, result = 1, $(".scale_low_label").each(function(e) {
            result = a / b, a = result, $(this).text(Math.round(1e3 * result) / 1e3 + "rem/" + (16 * baseSize * result).toFixed(2) + "px")
        }), a = 1, b = scaleRatio, result = 1, $(".js_css_small_size").each(function(e) {
            result = a / b, a = result, $(this).text(Math.round(1e3 * result) / 1e3)
        }), g()
    }

    function g() {
        $("body").delay(650).queue(function(e) {
            $(this).css("min-height", $(".article_preview_inner").outerHeight()), e()
        })
    }
    windowWidth = $(window).innerWidth(), "true" === t("preview") && ($(".js_article_preview_button_icon").removeClass("fa-chevron-left").addClass("fa-chevron-right"), $(".article_preview").addClass("article_preview_open"), 767 <= windowWidth && $(".article_content").focus()), $(".js_article_preview_button").click(function() {
        $(".js_article_preview_button_icon").toggleClass("fa-chevron-right").toggleClass("fa-chevron-left"), $(".article_preview").toggleClass("article_preview_open"), 767 <= windowWidth && $(".article_preview_open .article_content").focus()
    }), $(".js_css_button").click(function(e) {
        e.preventDefault(), $(".js_css_button_icon").toggleClass("fa-chevron-up").toggleClass("fa-chevron-down")
    }), $(".js_permalink").click(function(e) {
        e.preventDefault(), $(".js_permalink_field").val($(".js_param_url").text()).toggle().select()
    }), $(".js_permalink_field").click(function() {
        $(this).val($(".js_param_url").text()).select()
    }), $("[data-toggle]").click(function(e) {
        e.preventDefault(), $($(this).data("toggle")).toggle()
    }), $(".js_scale_add_high").click(function(e) {
        e.preventDefault(), $(".js_scale_add_high_section").after($(".js_scale_section_high").first().prop("outerHTML")), $(".js_scale_section_high").first().hide().show().css("color", "#ff8787"), u()
    }), $(".js_scale_add_low").click(function(e) {
        e.preventDefault(), $(".js_scale_add_low_section").before($(".js_scale_section_low").last().prop("outerHTML")), $(".js_scale_section_low").last().hide().show().css("color", "#ff8787"), u()
    }), !1 === t("size") ? (baseSize = 1, $(".base_size").val(16)) : (baseSize = t("size") / 16, $(".base_size").val(t("size"))), e(), $(".base_size").on("change paste keyup", function() {
        e()
    }), !1 === t("scale") ? (windowWidth < 767 ? scaleRatio = "1.125" : scaleRatio = "1.250", $(".js_font_scale").val(scaleRatio)) : (scaleRatio = t("scale"), $(".js_font_scale").val(scaleRatio), $(".js_font_scale").val() ? $(".js_font_scale").val(scaleRatio) : ($(".js_scale_div").addClass("col_two_thirds"), $(".js_custom_scale_div").removeClass("hide").addClass("col_one_third"), $(".js_font_scale").val("custom"), $(".js_font_scale_custom").val(scaleRatio)), $(".js_param_scale").text(scaleRatio)), u(), $(".js_font_scale").on("change paste keyup", function() {
        "custom" === $(this).val() ? ($(".js_scale_div").addClass("col_two_thirds"), $(".js_custom_scale_div").removeClass("hide").addClass("col_one_third"), $(".js_font_scale_custom").val(scaleRatio).focus().select()) : (o(), $(".js_scale_div").removeClass("col_two_thirds"), $(".js_custom_scale_div").addClass("hide"), $(".js_param_scale").text($(this).val()))
    }), $(".js_font_scale_custom").on("change paste keyup", function() {
        scaleRatio = $(this).val(), u(), $(".js_param_scale").text($(this).val())
    }), !1 !== t("text") && ($(".preview_text").val(t("text")), s()), $(".preview_text").on("change paste keyup", function() {
        s()
    }), s(), $.getJSON("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBExIvFSO_6mtbJ5upWmYq8kR967HqREYM", function(e) {
        items = e.items, listElements = "", items.forEach(function(e) {
            "handwriting" === e.category ? fallback = "cursive" : "display" === e.category ? fallback = "sans-serif" : fallback = e.category, setWebFontListFamily = "'" + e.family + "', " + fallback, webFontWeights = " data-weights='" + e.variants + "'", listElements += '<option value="' + e.family + '" data-family="' + setWebFontListFamily + ';"' + webFontWeights + ">" + e.family + "</option>"
        }), $(".js_font, .js_body_font").append(listElements), $(".js_font").val("Poppins"), l(), !1 !== t("font") && ($(".js_font").val(t("font")), l()), !1 !== t("fontweight") && ($(".js_weight").val(t("fontweight")), i()), !1 !== t("bodyfont") && ($(".js_body_font").val(t("bodyfont")), r()), !1 !== t("bodyfontweight") && ($(".js_body_weight").val(t("bodyfontweight")), c())
    }), $(".js_font").on("change paste keyup", function() {
        l()
    }), $(".js_weight").on("change paste keyup", function() {
        i()
    }), $(".js_body_font").on("change paste keyup", function() {
        r()
    }), $(".js_body_weight").on("change paste keyup", function() {
        c()
    }), !1 !== t("backgroundcolor") && ($(".js_bg_color").val(t("backgroundcolor")), $(".js_bg_color_picker").val(t("backgroundcolor")), f()), $(".js_bg_color").on("change paste keyup", function() {
        backgroundColor = $(".js_bg_color").val(), f(), bgColorHex = h($(".article_preview").css("background-color")), $(".js_bg_color_picker").val(bgColorHex)
    }), $(".js_bg_color_picker").on("change paste keyup", function() {
        backgroundColor = $(".js_bg_color_picker").val(), $(".js_bg_color").val(backgroundColor), f()
    }), !1 !== t("fontcolor") && ($(".js_font_color").val(t("fontcolor")), $(".js_font_color_picker").val(t("fontcolor")), d()), $(".js_font_color").on("change paste keyup", function() {
        fontColor = $(".js_font_color").val(), d(), fontColorHex = h($(".article_preview").css("color")), $(".js_font_color_picker").val(fontColorHex)
    }), $(".js_font_color_picker").on("change paste keyup", function() {
        fontColor = $(".js_font_color_picker").val(), $(".js_font_color").val(fontColor), d()
    }), !1 !== t("lineheight") && ($(".js_line_height").val(t("lineheight")), p()), $(".js_line_height").on("change paste keyup", function() {
        p()
    }), $(".js_current_year").text((new Date).getFullYear())
}), $(document).ready(function() {
    $(".codepen_btn").hover(function() {
        $(".codepen_able").each(function() {
            el = $(this), type = el.data("type"), codeInside = el.find("code"), isCodeInside = codeInside.length, HTML = "", CSS = "", "html" == type ? codeInside ? HTML = codeInside.html() : HTML = el.html() : "css" == type && (codeInside ? CSS = codeInside.text() : CSS = el.html()), previewText = $(".preview_text").val(), data = {
                title: "A Type Scale",
                description: "Custom type scale and CSS from https://type-scale.com",
                html: HTML + "<h1>" + previewText + "</h1>\n\n<p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>\n\n<p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>\n\n<h2>" + previewText + "</h2>\n\n<p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>\n\n<p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>\n\n<h3>" + previewText + "</h3>\n\n<p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>\n\n<p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>\n\n<h4>" + previewText + "</h4>\n\n<p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>\n\n<p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>\n\n<h5>" + previewText + '</h5>\n\n<p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>\n\n<p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p></p>',
                css: CSS
            };
            var e = JSON.stringify(data);
            $(".codepen_json").val(e)
        })
    })
});
