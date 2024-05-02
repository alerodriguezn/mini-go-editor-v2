export const testFiles = [
  `package main;

  type hola struct{
      b bool;
      x int;
      a string;
  };
  
  
  func main() int{
  
      var z hola;
      var arr []int;
  
      var nums []int;
  
      nums = append(nums, 2);
      l := len("String Lenght");
  
      switch x := 0 ; x {
          case 2 :
              println("Hola");
          case 3:
              println("Ok");
          default:
              println("Ok2");
      };

      return 0;
  
  
  };
      
    `,
  `package main;

  type hola struct{
      x int;
  };
  
  func ejemplo2(x int) int {
      var registro hola;
      var x int = 10;
      if x > 9 {
          print("Hola");
          if x > 10 {
              print("Hola");
          } else {
              print("Adios");
          };
  
      };
  
  };
  
    `,
  `package main;

  func ejemplo(x int) int{
      return 0;
  };
  
  func main() int{
  
      var x int = 10;
      var x string = "hola";
  
      for i := 0; i < 5; i++ {
          if(x==0){
              x=1;
          };
      };

      return 0;
  
    
  };
  
    `,
    `package main;

func ejemplo(x int) int {
    return "hola";
};

func main() int{

    z := ejemplo(x, "hola");

};
    `,
    `package main;

func ejemplo() int {

    var x int = 1;
    var y string = "Hola";

    z := x + y;


    return 0;
    
};
    
    
    
    `
];
