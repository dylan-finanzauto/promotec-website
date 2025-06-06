const useDialog = () => {
    const openDialog = () => {
        document.body.style.overflow = "hidden";
    }
    const closeDialog = () => {
        document.body.style.overflow = "auto";
    };

    return { openDialog, closeDialog };
}

export default useDialog;
