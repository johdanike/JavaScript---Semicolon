package evenodd;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class StringSplitTest {
    StringsSplit split;
    @BeforeEach
    public void setUp() {
        split = new StringsSplit();
    }

    @Test
    public void testStringSplitExists() {
        assertNotNull(split);
    }
    @Test
    public void testStringLengthIsEven() {
        String input = "abcdef";
        String given = Arrays.toString(StringsSplit.splitText(input));
        String[] expected = {"ab", "cd", "ef"};
        assertArrayEquals(expected, expected);
    }
    @Test
    public void testStringLengthIsOdd() {
        String input = "abcde";
        String given = Arrays.toString(StringsSplit.splitText(input));
        String[] expected = {"ab", "cd", "e_"};
        assertArrayEquals(expected, expected);
    }
    @Test
    public void testStringIsEmpty() {
        String input = "";
        String given = Arrays.toString(StringsSplit.splitText(input));
        String[] expected = {""};
        assertArrayEquals(expected, expected);
    }

}
