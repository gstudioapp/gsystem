export interface ComponentProtocol {
  name: string
  themeProps: PropProtocol[]
  editorProps: PropProtocol[]
}

export interface PropProtocol {
  type: AnyType;
  name: string;
  values?: EnumValues;
  required: boolean;
  
  label: string;
  description: string;
}

type EnumValues = string[]

type AnyType = 'STRING' | 'INT' | 'FLOAT' | 'DATE' | 'ID' | 'BOOLEAN';

