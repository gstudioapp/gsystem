import { tokens } from '../temp/tokens-temp.json';
import dictionary from '../temp/dictionary';
import { camelCaseToSnakeCase } from './util'

export default function tokenResolver(cssProperty, tokenName) {

  let result = {}
  const tokenCategory = getCategory(cssProperty)
  result[cssProperty] = getTokenValue(tokenName, tokenCategory)
  
  console.info(9090, result)

  return result
}

const getCategory = (cssProperty) => {

  // Get Category name from CSS property
  let category = dictionary[cssProperty] || dictionary[camelCaseToSnakeCase(cssProperty)]
  ,   obj

  console.log(cssProperty, category)

  tokens.map((currentToken)=>{
    if( currentToken.category == category ) obj = currentToken
  })

  if(!obj) throw new Error(`Error, CSS property "${cssProperty}" not found in dictionary`);

  return obj

}

const getTokenValue = (tokenName, tokenCategory) => {
  if(!tokenCategory.values) throw new Error(`Token Category values not available!`);
  
  let tokenValue = tokenCategory.values[tokenName]

  if(!tokenValue) {
    if(!Array.isArray(tokenCategory.values)) throw new Error(`Token Category values is not an Array!`);
  
    let tokens = tokenCategory.values
    
    for(let i = 0, lgt = tokens.length; i < lgt; i++) {
      if(Array.isArray(tokenName)) {
        tokenValue = {}
        for(let j = 0, lgt2 = tokenName.length; j < lgt2; j++) {
          tokenValue[tokenName[j]] = tokens[i].values[tokenName[j]]
        }
      } else {
        tokenValue = tokens[i].values[tokenName]
      }
      if(tokenValue) break
    }
  }

  return tokenValue

}