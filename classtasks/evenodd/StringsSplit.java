package evenodd;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class StringsSplit {
    public static void main(String[] args) {
//        String wordIn = word("abc");
//        System.out.println(wordIn);
//
//        String value = next("abcde");
//        System.out.println(value);

        System.out.println(Arrays.toString(splitText("Abcdef")));
        System.out.println(Arrays.toString(splitText("Abcde")));
        System.out.println(Arrays.toString(splitWord("Abcdktukhdjs")));
        System.out.println(Arrays.toString(splitWord("Abcde")));

    }

    public static String[] splitText(String word){
       List<String> text = new ArrayList<>();
        String quote = "\"";

       if(word.length() % 2 != 0){
           word+= "_";
       }

       for(int index = 0;index < word.length();index+=2){
           text.add(quote+word.substring(index, index+2)+quote);
       }
       return text.toArray(new String[0]);
    }


    public static String[] splitWord(String word) {
            int length = word.length();
            int resultArray = (length + 1) / 2;
            String[] text = new String[resultArray];
            String quote = "\"";

            int textIndex = 0;
            for (int index = 0; index < length; index += 2) {
                if (index + 1 < length) {
                    text[textIndex++] = (quote+(word.substring(index, index + 2))+quote);
                } else {
                    text[textIndex] = (quote+(word.substring((+index)) + "_")+quote);
                }
            }

            return text;
        }


    public static String next(String word){
        StringBuilder temp = new StringBuilder();
        List<String> words = new ArrayList<>();
        String quote = "\"";
        if(word.length() % 2 == 0){
            for(int index = 0; index < word.length(); index += 2){
                temp.append(word.charAt(index));
            }
            words.add(temp.toString());
        } else {
            for(int index = 0; index < word.length(); index += 2){
                temp.append(word.charAt(index));
            }
            words.add(quote+(temp + "_")+quote);
            System.out.println(word);
        }
        return words.getFirst();
    }


    public static String word(String userIn){
        List<String> words = new ArrayList<String>();
        String [] newWords = userIn.split(" ");
        String word = "";
        if(userIn.isEmpty()){
            return "Enter another word";
        }
        for(int index = 0; index < userIn.length(); index+=2) {
            if (userIn.length() % 2 == 0) {
                word += userIn.substring(index, index+2);
                words.add(word);
            }
            else {
                word += userIn.charAt(index) + "_";
            }
        }

        for (String string : words) {
            newWords = new String[]{string};
        }
//        return String.join(" ", newWords);
        return Arrays.toString(newWords);
    }
}
