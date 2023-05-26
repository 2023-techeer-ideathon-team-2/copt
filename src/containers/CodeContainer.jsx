import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import { useState } from 'react';

const CodeContainer = () => {
  const [code, setCode] = useState(`@RestController
  @RequestMapping("/api/carts")
  public class CartController {
  
      @Autowired
      private CartService cartService;
  
      @GetMapping("/{id}")
      public Cart getCart(@PathVariable Long id){
          return cartService.getCart(id);
      }
  
      @PostMapping
      public Cart createCart(@RequestBody Cart cart){
          return cartService.createCart(cart);
      }
  
      @PutMapping("/{id}")
      public Cart updateCart(@PathVariable Long id, @RequestBody Cart cart){
          return cartService.updateCart(id, cart);
      }
  
      @DeleteMapping("/{id}")
      public void deleteCart(@PathVariable Long id){
          cartService.deleteCart(id);
      }
  
  }`);
  return (
    <Editor
      value={code}
      onValueChange={(code) => setCode(code)}
      highlight={(code) => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
  );
};

export default CodeContainer;
