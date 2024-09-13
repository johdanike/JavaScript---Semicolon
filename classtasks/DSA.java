
import java.util.Arrays;

public class DSA{
	public static void main(String[]args){

		int array [] = {1,2,3,4,5,6};
		int array2 [] = {1,2,3,4,5,6};
		System.out.println(Arrays.toString (arraySample(array)));
		System.out.println(Arrays.toString (arraySample2(array2)));
	}
	

	public static int [] arraySample(int [] array1){
		int counter = 0;
		for(int index = 0; index < array1.length; index ++){
			if(index % 2 != 0){
				counter = array1[index-1];	
				array1[index -1] = array1[index];
				array1[index] = counter;	
			}
		}
		return array1;
	}


	public static int [] arraySample2(int [] array2){
		for(int index = 0; index < array2.length; index +=2){
				if(index % 2 == 0){
					array2[index] ^= array2[index+1];	
					array2[index + 1] ^= array2[index];
					array2[index] ^= array2[index+1];	
				}
			
		}
		return array2;
	}


}