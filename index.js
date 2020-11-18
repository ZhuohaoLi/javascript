
const _array=new WeakMap()
class Stack{
   constructor(){
      _array.set(this,[])

   }
   peek(){
      let array =_array.get(this)
      if(array.length===0)
      throw new Error('Stack is empty!')
      return array[array.length-1]
   }
   pop(){
    if(_array.get(this).length===0)
    throw new Error('Stack is empty!')
    return _array.get(this).pop()
   }
   push(obj){
      _array.get(this).push(obj);
   }
   get count(){
     return _array.get(this).length
   }
   
   
}
const s=new Stack()