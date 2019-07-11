import $ from '../../temp/tokens-temp.json';

export default {
    title : "Button",
    baseStyle : {
        fixed : {
            color: $.colorNeutralLightest,
            padding: $.spacingSquishSm,
            backgroundColor : $.colorBrandPrimaryMedium,
            border: `${$.borderWidthThin} ${$.borderStyleDefault} ${$.colorBrandPrimaryMedium}`,
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
                        backgroundColor : $.colorBrandPrimaryMedium,
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