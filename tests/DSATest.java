import org.junit.jupiter.api.Test;	
import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class DSATest{
	
	@Test
	public void testThatSwapsNumbersAfterEachIndex(){
		
		DSA dsa = new DSA();
		int [] array = {1,2,3,4,5,6};
		int []result = dsa.arraySample2(array);
		int [] value = {2,1,4,3,6,5};
		assertArrayEquals(result, value);
	}


	@Test
	public void testThatSwapsNumbersAfterEachIndex2(){
		
		DSA dsa = new DSA();
		int [] array = {1,2,3,4,5,6};
		int []result = dsa.arraySample(array);
		int [] value = {2,1,4,3,6,5};
		assertArrayEquals(result, value);
	}

	



}


