import $ from '../../temp/tokens-temp.json';

export default {
    title : "Button",
    baseStyle : {
        fixed : {
            color: $.colorNeutralDarkest,
            padding: $.spacingInsetSm,
            backgroundColor: $.colorNeutralLight
        },
        custom : {
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