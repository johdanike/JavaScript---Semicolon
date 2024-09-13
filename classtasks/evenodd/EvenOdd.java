package evenodd;

import java.util.Arrays;

public class EvenOdd {
    public static void main(String[] args) {
        int [] value1 = {2,1,5,7,8};
        int [] value2 = {4,1,5,7,9};

        System.out.printf("Value 1: %s\n",Arrays.toString(value1));
        System.out.printf("Value 2: %s",Arrays.toString(value2));

        int [] obj1 = array(value1);
        int [] obj2 = array(value2);

        System.out.printf("\nValue 1: %s\n",Arrays.toString(obj1));
        System.out.printf("Value 2: %s",Arrays.toString(obj2));

    }

    public static int [] array(int[] num){
        int [] array = new int[2];
        int odd = 0, even = 0;
        for (int index : num) {
            if (index % 2 != 0) {
                odd++;
            } else {
                even++;
            }
        }
        array[0] = even;
        array[1] = odd;
        return array;
    }
}
