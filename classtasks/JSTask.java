import java.util.Scanner;

public class JSTask{
	public static void main(String[]args){
		Scanner input = new Scanner(System.in);
		
		String var1, var2, var3, temp = "";
		
		System.out.println("Enter name of variable 1, 2, 3: ");
		var1 = input.next();
		var2 = input.next();
		var3 = input.next();

		System.out.print(rearrange(var1, var2, var3));


		/**temp = var1;
		var1 = var2;
		var2 = var3;
		var3 = temp;*/
		//System.out.printf("%nVar1: %s%nVar2: %s%nVar3: %s", var1, var2, var3);
	}


	public static String rearrange(String a, String b, String c){
		String d = "";	
		d = a;
		a = b;
		b = c;
		c = d;
		return String.format("%nVar1: %s%nVar2: %s%nVar3: %s", a, b, c);

	}
}