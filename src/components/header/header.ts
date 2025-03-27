export function animationHeader(classNameAdd: string, classNameRemove: string) {
  const header = document.getElementById('header');

  if(header){
    header.classList.remove(classNameRemove);
    header.classList.add(classNameAdd);
  }
}