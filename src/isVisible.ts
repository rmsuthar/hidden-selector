class isVisible {
    protected static elm: HTMLElement | undefined;      
    selector(el:string){        
        isVisible.elm = <HTMLElement | undefined>document.querySelector(el);        
        let computedStyle = window.getComputedStyle(<HTMLElement> isVisible.elm);
        return !(isVisible.elm?.offsetHeight || isVisible.elm?.offsetWidth || isVisible.elm?.getClientRects().length) || (computedStyle.visibility=="hidden" || computedStyle.display=="none");
    }
}
