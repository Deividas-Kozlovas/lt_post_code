const form = () => {
  return `  <!-- Corrected 'returm' to 'return' -->
    <div class="mb-3">
      <input type="text" class="form-control term" placeholder="Adresas" />
    </div>
    <div class="mb-3">
      <input type="text" class="form-control result" readonly />
    </div>
    <button type="submit" class="btn btn-primary submit">Ieškoti</button>
    `;
};

export default form;
