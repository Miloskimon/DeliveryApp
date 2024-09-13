import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

export  function Search() {
 return (
   <View className='flex-row w-full h-14 border border-slate-500  rounded-full items-center gap-2 px-4 bg-transparent'>
      <Feather name="search" size={24} color="#6748b"/>
      <TextInput placeholder="Search our food" className='w-full h-full flex-1 bg-transparent' />
   </View>
  );
}