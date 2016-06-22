class Helpers {


    isFirefox() {
        return typeof InstallTrigger !== 'undefined' ? true : false;
    }
}