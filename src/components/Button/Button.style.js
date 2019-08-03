import $ from '../../temp/tokens-temp.json';
import getTokenValue from '../../scripts/token-resolver';

export default {
    title : "Button",
    baseStyle : {
        fixed : {
            ...getTokenValue("padding", "spacingSquishSm"),
            ...getTokenValue("color", "colorBrandPrimaryMedium"),
            ...getTokenValue("backgroundColor", "colorBrandPrimaryMedium"),
            ...getTokenValue("color", "colorBrandPrimaryMedium"),
            ...getTokenValue("opacity", "opacityLight"),
            ...getTokenValue("border", [
                "borderWidthThin",
                "borderStyleDefault",
                "colorBrandPrimaryMedium"
            ]),
            cursor: `pointer`
        },
        custom : {
            borderRadius: $.borderRadiusPill
        }
    },
    types : [ // COMPONENTES QUE "BEBEM" DO MESMO BASE STYLE
        {
            title : "containedButton",
            isDefault : true,
            states : [
                {
                    title : "enabled",
                    isDefault : true,
                    styles : {
                        // backgroundColor : $.colorBrandPrimaryMedium,
                        color : $.colorNeutralDarkest
                    }
                },
                {
                    title : "disabled",
                    styles : {
                        opacity: 0.8,
                        cursor: 'not-allowed'
                    }
                },
                {
                    title : "hover",
                    styles : {
                        opacity : "$opacitySemiOpaque"
                    }
                }
            ],
            modifiers : [
                {
                    title : "block",
                    styles : {
                        display : "block",
                        width : "100%"
                    }
                }
            ]
        }
    ]
}