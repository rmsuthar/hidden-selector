class isHidden {
    protected static elm: HTMLElement | undefined;      
    selector(el:string){        
        isHidden.elm = <HTMLElement | undefined>document.querySelector(el);        
        let computedStyle = window.getComputedStyle(<HTMLElement> isHidden.elm);        
        return !(isHidden.elm?.offsetHeight || isHidden.elm?.offsetWidth || isHidden.elm?.getClientRects().length) || (computedStyle.visibility=="hidden" || computedStyle.display=="none" || parseInt(computedStyle.opacity) <= 0 || parseInt(computedStyle.width) <= 0 || parseInt(computedStyle.height) <= 0);
    }
}
