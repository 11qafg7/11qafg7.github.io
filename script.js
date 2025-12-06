
// 获取HTML元素
const messageElement = document.getElementById('message');
const changeTextBtn = document.getElementById('changeTextBtn');

// 按钮被点击时的处理
changeTextBtn.addEventListener('click', function() {
  messageElement.textContent = '太棒了！JavaScript动起来了！';
});
