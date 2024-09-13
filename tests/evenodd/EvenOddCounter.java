package evenodd;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;


public class EvenOddCounter {
    private EvenOdd evenOddCounter;

    @BeforeEach
    public void setUp() {
        evenOddCounter = new EvenOdd();
    }

    @Test
    @DisplayName("Even-Odd Counter Class Exists")
    public void testThatClassExists() {
        assertNotNull(evenOddCounter);
    }

    @Test
    @DisplayName("Even-Odd Function Exists")
    public void testThatFunctionExists() {
        int [] value = {2,1,5,7,8};
        int [] arrayObj = EvenOdd.array(value);
        int [] expected = {2,3};
        assertArrayEquals(arrayObj, expected);
    }

    @Test
    @DisplayName("Even-Odd Counter Checks For Another Array")
    public void testThatFunctionChecksForAnotherArray() {
        int [] value = {4,1,5,7,9};
        int [] arrayObj = EvenOdd.array(value);
        int [] expected = {1,4};
        assertArrayEquals(arrayObj, expected);
    }


}
