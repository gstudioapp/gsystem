/**
 * This function return element styles based on its properties/states.
 * Expected:
 * @param {Object} props Component props
 * @param {Object} styles Component Styles (All Styte Configurations)
 */
export default function styleResolver(props, styles, stateStyle) {
  console.info("Resolving styles: ", props, styles);
  console.info("Props: ", Object.keys(props), styles);

  stateStyle = stateStyle || {}
  const componentStyles = getType(props, styles.types)
  const componentStatesStyles = joinObjectsinArray(findObjectByProps(props, componentStyles.states))
  const componentModifiersStyles = joinObjectsinArray(findObjectByProps(props, componentStyles.modifiers))

  console.log('| \n| Result:',
    '\n| componentStyles: ', componentStyles, 
    '\n| componentStatesStyles: ', componentStatesStyles, 
    '\n| componentModifiersStyles: ', componentModifiersStyles,
    '\n|'
  )

  return {
    ...styles.baseStyle.fixed,
    ...styles.baseStyle.custom,
    ...componentStatesStyles.styles,
    ...componentModifiersStyles.styles,
    ...stateStyle
  }
}

function getType (props, types) {
  props = Object.keys(props)
  let defaultStyle 
  ,   type

  for(let i = 0, lgt = props.length; i < lgt; i++) {
    if(type) break
    for(let j = 0, lgt = types.length; j < lgt; j++) {
      type = types[j].title === props[i] ? types[j] : null
      if(types[j].isDefault) {
        defaultStyle = types[j]
      }
      if(type) break
    }  
  }
  
  return type || defaultStyle
}

/**
 * This function find the object with the same property name inside and array of objects:
 * Ex.: 
 * { title : 'disabled' } and property 'disabled'
 * So currentObject.title is equal componentProperty
 * @param {*} props 
 * @param {*} target 
 */
function findObjectByProps(props, target) {
  props = Object.keys(props)
  let result = []

  for(let i = 0, lgt = props.length; i < lgt; i++) {
    for(let j = 0, lgt = target.length; j < lgt; j++) {
      target[j].title === props[i] && result.push(target[j])
    }
  }
  
  return result
}

function joinObjectsinArray(arrObj) {
  return arrObj.reduce(function(result, current) {
    return Object.assign(result, current);
  }, {})
}