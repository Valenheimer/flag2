function makeIt() {
    function generateKey() {
        let key = 'flag{';
        const characters = '0123456789abcdefghijklmnopqrstuvwxyz';
        
        
        for (let i = 0; i < 8; i++) {
          const randomChar = characters[Math.floor(Math.random() * characters.length)];
          key += randomChar;
        }
      
        key += '-';
      
        for (let i = 0; i < 4; i++) {
          const randomChar = characters[Math.floor(Math.random() * characters.length)];
          key += randomChar;
        }
      
        key += '-';
        
        for (let i = 0; i < 4; i++) {
          const randomChar = characters[Math.floor(Math.random() * characters.length)];
          key += randomChar;
        }
      
        key += '-';
             
        for (let i = 0; i < 4; i++) {
          const randomChar = characters[Math.floor(Math.random() * characters.length)];
          key += randomChar;
        }
      
        key += '-';
      
        for (let i = 0; i < 12; i++) {
          const randomChar = characters[Math.floor(Math.random() * characters.length)];
          key += randomChar;
        }
      
        key += '}';
        return key;
      }
      
      
      console.log(generateKey());

      /* CRAZY EFFICIENT CHATGPT VERSION
      function generateKey() {
        const characters = '0123456789abcdefghijklmnopqrstuvwxyz';
        const lengths = [8, 4, 4, 4, 12];
        let key = 'flag{';
      
        for (let i = 0; i < lengths.length; i++) {
          if (i > 0) key += '-';
      
          for (let j = 0; j < lengths[i]; j++) {
            key += characters[Math.floor(Math.random() * characters.length)];
          }
        }
      
        key += '}';
        return key;
      }
      
      console.log(generateKey());
      */
      
      
    
      

}




  
  
  