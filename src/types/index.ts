import { KeyboardEventListener, KeyboardType, NativeSyntheticEvent, TextInputContentSizeChangeEventData, TextInputSubmitEditingEventData } from "react-native";

export type TTheme = 'light' | 'dark'
export interface ThemeButtonProps { theme: TTheme; setTheme: Function }
export interface AppWrapperProps extends ThemeButtonProps { children: React.ReactNode }


interface Office {
  location: string
  address: string
  coordinates: string
}

export interface Partner {
  organization: string,
  offices: Office[]
};

export interface ApiGetPartners {
  areAll: boolean,
  partners: Partner[]
}

export interface CustomizedTextInputProps {
  placeholderText: string;
  keyboardType: KeyboardType;
  keyName: string;
  secureTextEntry: boolean;
  autoFocus: boolean;
  onSubmitEditing: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  blurOnSubmit: boolean;
  inputReference?: React.MutableRefObject<any>;
  multiline: boolean;
  style: any;
  value: string | number;
  maxLength: number;
  placeholderTextColor: string;
  onContentSizeChange: (
    e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
  ) => void;
  onChangeText: (text: string) => void;
  onKeyboardOpen: KeyboardEventListener;
  onKeyboardClose: KeyboardEventListener;
  editable: boolean;
  caretHidden: boolean;
};