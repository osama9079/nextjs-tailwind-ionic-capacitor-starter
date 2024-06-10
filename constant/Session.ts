import { Preferences } from "@capacitor/preferences";
export default class Session{
    public static URL : String = "https://mdarahim.com/";

    //   setPreference = async (key: string, value: string): Promise<void> => {
    //     await Preferences.set({ key: key, value: value });
    //   };
  
    public async setPreference(key: string, value: string): Promise<void> {
      await Preferences.set({ key: key, value: value });
    }
    // Function to get a preference
    getPreference = async (key: string): Promise<string | null> => {
      const { value } = await Preferences.get({ key: key });
      return value;
    };
  
    // Function to remove a preference
    removePreference = async (key: string): Promise<void> => {
      await Preferences.remove({ key: key });
    };
  
    // Function to clear all preferences
    clearPreferences = async (): Promise<void> => {
      await Preferences.clear();
    };
}