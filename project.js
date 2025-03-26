// 登录和注册页面交互逻辑
document.addEventListener('DOMContentLoaded', function () {
    const modalBg = document.createElement('div');
    modalBg.id = 'modal-bg';
    document.body.appendChild(modalBg);

    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    function showModal(formToShow) {
        modalBg.classList.add('visible');
        if (formToShow === 'login') {
            loginForm.classList.add('active');
            registerForm.classList.remove('active');
        } else {
            registerForm.classList.add('active');
            loginForm.classList.remove('active');
        }
        // 添加键盘Esc关闭功能
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                hideModal();
            }
        });
    }

    function hideModal() {
        modalBg.classList.remove('visible');
        loginForm.classList.remove('active');
        registerForm.classList.remove('active');
    }

    modalBg.addEventListener('click', hideModal);
    loginBtn.addEventListener('click', () => {
        document.getElementById('login-modal').classList.add('visible');
        document.getElementById('register-modal').classList.remove('visible');
    });

    registerBtn.addEventListener('click', () => {
        document.getElementById('register-modal').classList.add('visible');
        document.getElementById('login-modal').classList.remove('visible');
    });
    // 处理登录/注册切换
    function handleAuthSwitch(formToShow) {
        console.log('切换到:', formToShow);
        // 切换按钮活动状态
        loginBtn.classList.toggle('active', formToShow === 'login');
        registerBtn.classList.toggle('active', formToShow === 'register');

        // 切换表单显示状态
        loginForm.classList.toggle('active', formToShow === 'login');
        registerForm.classList.toggle('active', formToShow === 'register');

        // 清除表单输入
        loginForm.reset();
        registerForm.reset();
    }

    // 监听登录按钮点击事件
    loginBtn.addEventListener('click', () => {
        console.log('点击登录按钮');
        handleAuthSwitch('login');
    });

    // 监听注册按钮点击事件
    registerBtn.addEventListener('click', () => {
        console.log('点击注册按钮');
        handleAuthSwitch('register');
    });
});

// 监听登录表单提交事件
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取用户输入的数据
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 验证输入是否为空
    if (!username || !password) {
        alert('请填写用户名和密码');
        return;
    }

    // 模拟登录流程
    alert(`欢迎回来，${username}！`);
});

// 监听注册表单提交事件
registerForm.addEventListener('submit', function (event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取用户输入的数据
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // 验证输入是否为空
    if (!username || !password || !confirmPassword) {
        alert('请填写所有字段');
        return;
    }

    // 验证密码是否匹配
    if (password !== confirmPassword) {
        alert('两次输入的密码不一致');
        return;
    }

    // 模拟注册流程
    alert(`注册成功！欢迎，${username}`);
    handleAuthSwitch('login'); // 注册成功后自动切换到登录表单
});

// 以下是原代码的其他部分
const symptomsInput = document.getElementById('symptoms');
const habitsInput = document.getElementById('habits');
const allergiesInput = document.getElementById('allergies');

symptomsInput.addEventListener('input', function () {
    if (symptomsInput.value.trim() === '') {
        symptomsInput.setCustomValidity('症状不能为空');
    } else {
        symptomsInput.setCustomValidity('');
    }
});

habitsInput.addEventListener('input', function () {
    if (habitsInput.value.trim() === '') {
        habitsInput.setCustomValidity('生活习惯不能为空');
    } else {
        habitsInput.setCustomValidity('');
    }
});

allergiesInput.addEventListener('input', function () {
    if (allergiesInput.value.trim() === '') {
        allergiesInput.setCustomValidity('过敏史不能为空');
    } else {
        allergiesInput.setCustomValidity('');
    }
});

// DIY设计模块交互逻辑
document.addEventListener('DOMContentLoaded', function () {
    const colorOptions = document.querySelectorAll('.color-option');
    const patternOptions = document.querySelectorAll('.pattern-option');
    const tasselOptions = document.querySelectorAll('.tassel-option');
    const sizeOptions = document.querySelectorAll('.size-option');
    const previewImage = document.getElementById('preview-image');

    let selectedColor = 'red';
    let selectedPattern = 'pattern1';
    let selectedTassel = 'tassel1';
    let selectedSize = 'small';

    // 更新设计预览
    function updatePreview() {
        const previewSrc = `images/${selectedColor}-${selectedPattern}-${selectedTassel}-${selectedSize}.png`;
        previewImage.src = previewSrc;
        previewImage.style.opacity = '0';
        setTimeout(() => {
            previewImage.style.opacity = '1';
        }, 200); // 动态添加动画
    }

    // 监听布料颜色选择事件
    colorOptions.forEach(color => {
        color.addEventListener('click', function () {
            selectedColor = this.getAttribute('data-color');
            updatePreview();
        });
    });

    // 监听香囊图案选择事件
    patternOptions.forEach(pattern => {
        pattern.addEventListener('click', function () {
            selectedPattern = this.getAttribute('data-pattern');
            updatePreview();
        });
    });

    // 监听流苏样式选择事件
    tasselOptions.forEach(tassel => {
        tassel.addEventListener('click', function () {
            selectedTassel = this.getAttribute('data-tassel');
            updatePreview();
        });
    });

    // 监听香囊大小选择事件
    sizeOptions.forEach(size => {
        size.addEventListener('click', function () {
            selectedSize = this.getAttribute('data-size');
            updatePreview();
        });
    });
});

// 文件上传拖放
const designContainer = document.getElementById('design-container');
designContainer.addEventListener('dragover', function (event) {
    event.preventDefault();
    designContainer.classList.add('dragover');
});

// 本草知识数据库（示例数据）
const herbDatabase = [
    {
        symptom: '睡眠不佳',
        herbs: ['薰衣草', '洋甘菊'],
        description: '薰衣草和洋甘菊有助于放松神经，改善睡眠质量。'
    },
    {
        symptom: '容易疲劳',
        herbs: ['人参', '黄芪'],
        description: '人参和黄芪可以增强体力，缓解疲劳。'
    },
    {
        symptom: '感冒咳嗽',
        herbs: ['薄荷', '甘草'],
        description: '薄荷和甘草可以缓解感冒症状，止咳化痰。'
    }
];

// 订单管理模块交互逻辑
const orderItems = document.querySelectorAll('.order-item');
const orderDetails = document.getElementById('order-details');

// 监听订单选择事件
orderItems.forEach(order => {
    order.addEventListener('click', function () {
        // 更新订单详情
        const orderInfo = this.querySelector('.order-info').innerHTML;
        orderDetails.innerHTML = `
            <h3>订单详情</h3>
            <div class="order-details-info">
                ${orderInfo}
            </div>
        `;
    });
});

// 监听支付按钮点击事件
document.querySelectorAll('.pay-button').forEach(button => {
    button.addEventListener('click', function (event) {
        event.stopPropagation(); // 阻止事件冒泡
        const orderItem = this.closest('.order-item');
        const orderId = orderItem.querySelector('.order-info p:first-child').textContent;
        // 模拟支付流程
        alert(`正在处理订单 ${orderId} 的支付...`);
        // 更新订单状态
        orderItem.querySelector('.order-info p:nth-child(2)').textContent = '状态: 已支付';
        this.textContent = '查看物流';
        this.classList.remove('pay-button');
        this.classList.add('track-button');
    });
});

// 监听物流按钮点击事件
document.querySelectorAll('.track-button').forEach(button => {
    button.addEventListener('click', function (event) {
        event.stopPropagation(); // 阻止事件冒泡
        const orderItem = this.closest('.order-item');
        const orderId = orderItem.querySelector('.order-info p:first-child').textContent;
        // 显示物流信息
        alert(`正在查询订单 ${orderId} 的物流信息...`);
    });
});

// 会员中心模块交互逻辑
document.addEventListener('DOMContentLoaded', function () {
    let isVIP = false; // 初始状态为普通用户
    const currentStatus = document.getElementById('current-status');
    const upgradeButton = document.getElementById('upgrade-button');
    const vipBenefits = document.getElementById('vip-benefits');

    // 初始化会员状态
    function updateVIPStatus() {
        currentStatus.textContent = isVIP ? 'VIP用户' : '普通用户';
        vipBenefits.style.display = isVIP ? 'block' : 'none';
        upgradeButton.style.display = isVIP ? 'none' : 'block';
    }

    // 监听升级按钮点击事件
    upgradeButton.addEventListener('click', function () {
        // 模拟升级流程
        alert('正在升级为VIP...');
        isVIP = true;
        updateVIPStatus();
    });

    // 初始化页面
    updateVIPStatus();
});

// 创建推荐方案模态窗口
const recommendationsModal = document.createElement('div');
recommendationsModal.id = 'recommendations-modal';
recommendationsModal.className = 'auth-modal';
document.body.appendChild(recommendationsModal);

// 智能方案推荐函数
function recommendSolution(symptoms, habits, allergies) {
    // 根据症状匹配推荐方案
    const matchedSolutions = herbDatabase.filter(entry =>
        symptoms.includes(entry.symptom)
    );

    // 清空模态窗口内容
    recommendationsModal.innerHTML = '';

    if (matchedSolutions.length > 0) {
        // 创建推荐方案HTML内容
        const recommendationsHTML = matchedSolutions.map(solution => `
            <div class="recommendation">
                <h3>症状: ${solution.symptom}</h3>
                <p><strong>推荐本草:</strong> ${solution.herbs.join(', ')}</p>
                <p><strong>功效:</strong> ${solution.description}</p>
            </div>
        `).join('');

        // 将推荐方案插入到模态窗口中
        recommendationsModal.innerHTML = recommendationsHTML;
    } else {
        // 显示未找到匹配方案的提示
        recommendationsModal.innerHTML = '<p>未找到匹配的推荐方案。</p>';
    }

    // 显示模态窗口
    recommendationsModal.classList.add('visible');
}

// 监听症状表单提交事件
document.getElementById('symptoms-form').addEventListener('submit', function (event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取用户输入的数据
    const symptoms = document.getElementById('symptoms').value;
    const habits = document.getElementById('habits').value;
    const allergies = document.getElementById('allergies').value;

    // 调用推荐方案函数
    recommendSolution(symptoms, habits, allergies);
});

// 监听模态窗口点击事件以关闭
recommendationsModal.addEventListener('click', function () {
    this.classList.remove('visible');
});

// 手机端导航菜单交互逻辑
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});