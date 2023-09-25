import type {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from './Layout';

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
