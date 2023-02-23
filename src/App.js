import './App.css';
import Screen from './Screen';

function App() {
  return (
  <div class="container calculator">
    <Screen/>
        <dl class="touche__box">
        <dt class="clear-item"> <span>clear</span></dt>
        <dt class="touche__box-item"> <span class="soustraction">_</span></dt>
        <dt class="touche__box-item"><span class="sign">+</span></dt>
        <dt class="touche__box-item clearme"> <span>7</span></dt>
        <dt class="touche__box-item"> <span>8</span></dt>
        <dt class="touche__box-item"> <span>9</span></dt>
        <dt class="touche__box-item"><span class="sign">/</span></dt>
        <dt class="touche__box-item"> <span>4</span></dt>
        <dt class="touche__box-item"> <span>5</span></dt>
        <dt class="touche__box-item"> <span>6</span></dt>
        <dt class="touche__box-item"><span class="sign">x</span></dt>
        <dt class="touche__box-item"> <span>1</span></dt>
        <dt class="touche__box-item"> <span>2</span></dt>
        <dt class="touche__box-item"> <span>3</span></dt>
        <dt class="equal-item"><span class="sign-equal">=</span></dt>
        <dt class="touche__box-item zero-item"> <span>0</span></dt>
        <dt class="touche__box-item un-item"><span class="sign">.</span></dt>
    </dl>
</div> 
  );
}

export default App;
